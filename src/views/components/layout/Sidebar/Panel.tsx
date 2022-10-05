import { useEffect, useState, useRef, FC, useCallback, useLayoutEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { matchPath, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import ButtonBase from '@mui/material/ButtonBase';
import { IRoute } from 'types';
import IconNav from './IconNav';
import Icon from './Icon';

export interface PanelProps {
	classPanel?: string;
	item: IRoute;
	prefix?: string;
	children?: ReactNode
}

const getChildrenPath = (item: IRoute, prefix: string): string[] => {
	let rs: string[] = [];
	item.children?.map(i => {
		i.path && rs.push((prefix + '/' + (item.path ?? '') + '/' + (i.path ?? '')).replace(/\/\/+/g, '/'));
		if (i.children?.length) {
			rs = rs.concat(getChildrenPath(i, prefix + '/' + (item.path ?? '')));
		}
		return null;
	});

	return rs;
};

const Panel: FC<PanelProps> = props => {
	const { children, classPanel, item, prefix = '' } = props;
	const { t } = useTranslation();
	const { pathname } = useLocation();

	const panelRef = useRef<HTMLDivElement>(null);

	const [collapsed, setCollapsed] = useState(true);
	const [prefixDefault, setPrefixDefault] = useState<string>(prefix);

	const panelHeight = useRef(0);

	useLayoutEffect(() => {
		setPrefixDefault(prefix);
	}, [prefix])

	const checkMatchPaths = useCallback((_item: IRoute) => {
		const paths = getChildrenPath(_item, prefixDefault);
		item.path && paths.push(item.path);
		const matchs = paths.map(p => !!matchPath(('/' + p + '/*').replace(/\/\//g, ''), pathname));
		setCollapsed(!!~matchs.indexOf(true));
		return !!~matchs.indexOf(true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	const calculateHeight = useCallback((element: HTMLDivElement) => {
		for (let i = 0; i < element.childElementCount; i++) {
			panelHeight.current += 100;

			if (element.children[i].querySelector('.has-submenu')) {
				calculateHeight(element.children[i].querySelector('.submenu') as HTMLDivElement);
			}
		}
	}, []);

	// const fixSidebar = useCallback(() => {
	// 	const panelChildren = panelRef.current?.children ?? [];
	// 	for (let child of panelChildren) {
	// 		let href = child.getAttribute('href');
	// 		if (
	// 			href
	// 			&& href !== '/'
	// 			&& pathname !== '/'
	// 			&& matchPath(href, pathname)
	// 			// matchPath(pathname, { path: href, exact: false })
	// 		) {
	// 			calculateHeight(panelRef.current as HTMLDivElement);
	// 			// setCollapsed(false);
	// 		}
	// 	}
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [pathname]);

	useEffect(() => {
		if (!panelRef.current) return;
		calculateHeight(panelRef.current);
		// fixSidebar();
		setCollapsed(!checkMatchPaths(item as IRoute));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname, calculateHeight]);

	const handleClick = () => {
		panelHeight.current = 0;
		calculateHeight(panelRef.current as HTMLDivElement);
		setCollapsed(!collapsed);
	};

	return <div>
		<ButtonBase
			className={clsx('admin-sidebar-item flex justify-between w-full has-submenu overflow-hidden', { open: !collapsed })}
			onClick={handleClick}
		>
			<div className="flex items-center sidebar-navbar-left">
				<Icon item={item} />
				<span className="align-middle admin-sidebar-navbar-name">
					{item.name ? t(item.name) : ''}
				</span>
			</div>

			{Boolean(item.badge) && (
				<div className={`rounded px-1 py-1px bg-${item.badge?.color}`}>
					{item.badge?.value}
				</div>
			)}

			<div className="item-arrow">
				<IconNav />
				{/* <MuiIcon fontSize="small" className="align-middle">
          chevron_right
        </MuiIcon> */}
			</div>
		</ButtonBase>

		<div
			ref={panelRef}
			className={clsx(classPanel, "submenu")}
			style={{
				// maxHeight: collapsed ? 0 :`${ panelHeight.current }px`
				maxHeight: collapsed ? 0 : `${100}%`
			}}
		>
			{children}
		</div>
	</div>;
};

export default Panel;
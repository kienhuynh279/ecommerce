import PrivateRoute from 'app/navigation/PrivateRoute';
import { FC } from 'react';
import { IRoute } from 'types';
import Nav from './Nav';
import Panel from './Panel';

export interface NavbarProps {
	className: string;
	classPanel?: string;
}

const Navbar: FC<NavbarProps> = props => {
	const { className, classPanel } = props;
	// const { t } = useTranslation();
	// const  path  = useLocation();

	const renderLevels = (data: IRoute[]) => {
		return data.map((item, index) => {
			if (item.isRoute) return null;

			// if (item.type === 'label') {
			// 	return <Label key={index} label={item.label ? t(item.label) : ''} />
			// }

			if (item.children?.length) {
				return <Panel key={index} item={item} classPanel={classPanel}>
					{renderLevels(item.children)}
				</Panel>
			}

			// if (item.type === 'extLink') {
			// 	return <ExtLink key={index} item={item} />
			// }

			return <Nav key={index} item={item} />
		});
	}

	return <div className={className}>
		{renderLevels(PrivateRoute)}
	</div>
}
export default Navbar;
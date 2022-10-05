import React, { FC } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import clsx from 'clsx';
import wrapperStyle from './style';
import { IRoute } from 'types';
import ScrollBar from 'react-perfect-scrollbar';
import PrivateRoute from 'app/navigation/PrivateRoute';
import Topbar from '../Topbar';

const ContentWrapper: FC = () => {
	const classes = wrapperStyle();

	const listenRoutes = (routes: IRoute[]) => {
		return routes?.map(({ path = '', element: Comp, children }, i) => {
			if ((!path || !Comp) && !children?.length) return null;
			let routePath = path;

			if (path && children?.length) {
				routePath = path.replace(/\/?(\?.*)*$/g, '/*$1').replace(/\/\*\/\*?/, '/*');
			}

			if (!path && children?.length) {
				return <Route key={i} path="*" element={Comp ? <Comp /> : <Outlet />}>
					{listenRoutes(children)}
				</Route>
			}

			routePath = path.replace(/\/?(\?.*)*$/g, '/*$1').replace(/\/\*\/\*?/, '/');

			return <Route
				path={routePath}
				element={Comp ? <Comp /> : <Outlet />}
				key={i}
			/>
		});
	}

	return <div className={clsx(classes.root, 'h-full admin-content-wrapper')}>
		<div className="relative wh-full">
			<ScrollBar>
				<Topbar />
				<div className={clsx(classes.wrapper, 'h-full')} id="scroll-bar-content">
					<Routes>
						{listenRoutes(PrivateRoute)}
					</Routes>
				</div>
			</ScrollBar>
		</div>
	</div>
}

export default ContentWrapper;
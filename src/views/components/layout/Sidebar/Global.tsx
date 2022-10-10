
import { getShowSidebar } from 'features/app/slice';
import { FC, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

const SidebarGlobal: FC = () => {

	const show = useSelector(getShowSidebar);

	useEffect(() => {
		show
			? document.body.classList.remove('admin-sidebar-collapsed')
			: document.body.classList.add('admin-sidebar-collapsed');
	});

	return null;

}

export default memo(SidebarGlobal); 
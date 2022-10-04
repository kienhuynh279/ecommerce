import { FC } from 'react';
import { Route } from 'types';
import MuiIcon from '@mui/material/Icon';
import CircleIcon from '@mui/icons-material/Circle';

export interface IconProps {
	item: Route;
}

const Icon: FC<IconProps> = props => {

	const { item } = props;

	if (item.icon) {
		return <MuiIcon className="admin-sidebar-icon text-18 flex flex-center">
			{item.icon}
		</MuiIcon>
	}

	if (item.iconText) {
		<div className="nav-bullet-text ml-5 text-11">
			{item.iconText}
		</div>
	}

	return <CircleIcon className="sidebar-non-icon" />
}

export default Icon;
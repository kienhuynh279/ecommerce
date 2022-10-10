import { FC } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { handleSidebar } from 'features/app/slice';

const ToggleSidebar: FC = () => {
	const dispatch = useDispatch();

	const handleToggleSidebar = () => {
		dispatch(handleSidebar());
	}

	return <IconButton
		size="large"
		edge="start"
		color="inherit"
		aria-label="open drawer"
		sx={{ mr: 2, color: 'var(--admin-primary)' }}
		onClick={handleToggleSidebar}
	>
		<MenuIcon className="text-primary" />
	</IconButton>

}

export default ToggleSidebar;
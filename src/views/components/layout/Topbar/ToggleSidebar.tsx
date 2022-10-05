import { FC } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

const ToggleSidebar: FC = () => {

	return <IconButton
		size="large"
		edge="start"
		color="inherit"
		aria-label="open drawer"
		sx={{ mr: 2, color: 'var(--admin-primary)' }}
		onClick={() => console.log('Toggele Sidebar')}
	>
		<MenuIcon className="text-primary" />
	</IconButton>

}

export default ToggleSidebar;
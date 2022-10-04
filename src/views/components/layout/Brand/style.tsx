import { makeStyles } from "@mui/styles";

const brandStyle = makeStyles(() => ({
	root: {
		height: 'var(--admin-topbar-height)',
		paddingLeft: 'var(--admin-sidebar-padding)',

		'& a': {
			height: 'var(--admin-topbar-height)',
		},

		'& img': {
			height: '30px'
		}
	}
})) as Function;

export default brandStyle;
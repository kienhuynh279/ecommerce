import { Box, styled, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import bg from '../../../assets/images/bc.jpg'

const loginStyle = makeStyles(() => ({
	page: {
		backgroundImage: `url(${bg})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	},

	titleLogin: {
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
		borderBottom: "5px solid var(--admin-primary)",
		width: '41%',
		fontWeight: 700,
		paddingBottom: '10px'
	},

	formLogin: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		padding: '0 32px',
		marginTop: '68px'
	},

	btnLogin: {
		width: '220px'
	},

	input: {
		height: '36px',
		marginTop: '50px'
	}
}))

export const BoxLogin = styled(Box)(() => ({
	width: '620px',
	height: '440px',
	backgroundColor: '#fff',
	borderRadius: '12px'
}));

export const InputLogin = styled(TextField)(() => ({
	height: '36px',
	marginBottom: '12px'
}))

export default loginStyle;

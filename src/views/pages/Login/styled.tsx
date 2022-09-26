import { Box, styled } from "@mui/material";
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
	}
}))

export const BoxLogin = styled(Box)(() => ({
	width: '620px',
	height: '440px',
	backgroundColor: '#fff',
	borderRadius: '12px'
}))

export default loginStyle;

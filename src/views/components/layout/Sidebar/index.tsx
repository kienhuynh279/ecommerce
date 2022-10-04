import Box from '@mui/material/Box'
import clsx from 'clsx'
import React from 'react'
import Brand from '../Brand'
import sidebarStyle from './style'
import ScrollBar from 'react-perfect-scrollbar';
import Navbar from './Navbar'

type Props = {}

const Sidebar = (props: Props) => {

	const classes = sidebarStyle();
	const sidebarClassname = clsx(classes.root, "fixed left top bottom")

	return <div className={sidebarClassname}>
		<div className="flex-column relative h-full">
			<Brand />

			<div className={clsx(classes)}>
				<Box className={clsx('relative')} sx={{
					height: '100%', '& >div >div:nth-of-type(2)': {
						display: 'none'
					}
				}} >
					<ScrollBar
						options={{ suppressScrollX: true }}
						className={clsx('relative', classes)}
					>
						<Navbar className={classes.navigation} classPanel={classes.panel} />
					</ScrollBar>
				</Box>
			</div>
		</div>
	</div >
}

export default Sidebar
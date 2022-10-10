import { Box, CircularProgress } from '@mui/material'
import React from 'react'

type Props = {}

const Loading = (props: Props) => {
	return <Box sx={{ display: 'flex' }}>
		<CircularProgress />
	</Box>
}

export default Loading
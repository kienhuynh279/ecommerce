import { getUserAuth } from 'features/auth/slice'
import isNull from 'lodash/isNull'
import React, { Fragment, memo } from 'react'
import { useSelector } from 'react-redux'
import ContentWrapper from 'views/components/layout/ContentWrapper'
import Sidebar from 'views/components/layout/Sidebar'

type Props = {}

const Layout = (props: Props) => {
	const userAuth = useSelector(getUserAuth);

	if (isNull(userAuth)) return null;

	return (
		<Fragment>
			<Sidebar />
			<ContentWrapper />
		</Fragment>
	)
}

export default memo(Layout)
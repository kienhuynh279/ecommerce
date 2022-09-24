import PageURL from 'app/PageURL';
import { getUserAuth } from 'features/auth/slice'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';
import Dashboard from 'views/pages/Dashboard';
import isNull from 'lodash/isNull';

const Guard = () => {
	const userAuth = useSelector(getUserAuth);
	const location = useLocation();

	if (isNull(userAuth)) {
		return <Navigate to={{ pathname: PageURL.Login }} state={{ form: location }} />
	}

	return (
		<Dashboard></Dashboard>
	)
}

export default Guard
import PageURL from 'app/PageURL';
import { getUserAuth } from 'features/auth/slice'
import React, { lazy } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';
import isNull from 'lodash/isNull';

const Layout = lazy(() => import('./Layout'));

const Guard = () => {
  const userAuth = useSelector(getUserAuth);
  const location = useLocation();

  if (isNull(userAuth)) {
    return <Navigate to={{ pathname: PageURL.Login }} state={{ form: location }} />
  }

  return (
    <Layout />
  )
}

export default Guard
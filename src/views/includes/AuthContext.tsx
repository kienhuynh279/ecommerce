import PageURL from 'app/PageURL';
import { getUserAuth } from 'features/auth/slice';
import React, { Fragment, memo, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { matchPath, Navigate, useLocation } from 'react-router-dom';

type AuthContextProps = {
  children?: ReactNode;
};

const AuthContext = (props: AuthContextProps) => {
  const { children } = props;
  const location = useLocation();
  const userAuth = useSelector(getUserAuth);

  if (!!userAuth && matchPath(PageURL.Login, location.pathname)) {
    return <Navigate to="/dashboard" />;
  }

  if (location.pathname === '/') {
    return <Navigate to="/dashboard" />;
  }
  return <Fragment>{children}</Fragment>;
};

export default memo(AuthContext);

import React from 'react';
import { Redirect } from 'react-router-dom';

interface Iprops {
  children: any,
  isLoading: boolean,
  isLoggedIn: boolean
}

const ProtectedRoute = (props: Iprops) => {
  const { isLoggedIn, isLoading, children } = props;

  return (
    <>
      {(isLoggedIn) ? children : <Redirect to="/" />}
    </>
  )
}

export default ProtectedRoute

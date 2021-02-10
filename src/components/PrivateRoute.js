import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = (props) => {
  const user = useSelector((state) => state.user);
  return (
    <Route {...props}>
      {user.isLogin ? props.children : <Redirect to={{ pathname: "/" }} />}
    </Route>
  );
};

export default PrivateRoute;

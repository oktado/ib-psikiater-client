import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouteAdmin = (props) => {
  const user = useSelector((state) => state.user);
  return (
    <Route {...props}>
      {user.isLogin && user.role === "ADMIN" ? (
        props.children
      ) : (
        <Redirect to={{ pathname: "/" }} />
      )}
    </Route>
  );
};

export default PrivateRouteAdmin;

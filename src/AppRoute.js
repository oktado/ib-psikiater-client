import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoutePsikiater from "./components/PrivateRoutePsikiater";
import PrivateRoutePasien from "./components/PrivateRoutePasien";
import PrivateRouteAdmin from "./components/PrivateRouteAdmin";
import PrivateRoute from "./components/PrivateRoute";

import RegisterPage from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PatientHistory from "./pages/PatientHistory/index";
import Search from "./pages/Search";
import Psikiater from "./pages/Psikiater";
import Checkout from "./pages/Checkout";
import Appointment from "./pages/Appointment";
import PublicProfilePsychiatrist from "./pages/PublicPsychiatristProfile";
import ProfilePatient from "./pages/ProfilePatient";
import PatientDashboard from "./pages/PatientDashboard";
import Chatbox from "./pages/Chatbox/index";
import EmailVerification from "./pages/EmailVerification";
import PaymentSlipUpload from "./pages/PaymentSlipUpload";
import AdminDashboard from "./pages/AdminDashboard";

const AppRoute = () => {
  return (
    <Switch>
      <PrivateRoute path="/chatbox/:roomChat_id/:appointment_id">
        <Chatbox />
      </PrivateRoute>
      <PrivateRoutePasien path="/appointment/:psikiater_id" exact>
        <Appointment />
      </PrivateRoutePasien>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
      <PrivateRoutePasien path="/patient-history" exact>
        <PatientHistory />
      </PrivateRoutePasien>
      <Route path="/search-result" exact>
        <Search />
      </Route>
      <PrivateRoutePsikiater path="/psikiater-dashboard">
        <Psikiater />
      </PrivateRoutePsikiater>
      <PrivateRoutePasien path="/checkout-payment/:payment_id" exact>
        <Checkout />
      </PrivateRoutePasien>
      <Route path="/profile/:psychiatrist_id" exact>
        <PublicProfilePsychiatrist />
      </Route>
      <PrivateRoutePasien path="/profile-me" exact>
        <ProfilePatient />
      </PrivateRoutePasien>
      <PrivateRoutePasien path="/patient-dashboard" exact>
        <PatientDashboard />
      </PrivateRoutePasien>
      <Route path="/email-verification" exact>
        <EmailVerification />
      </Route>
      <PrivateRoutePasien path="/upload-payment-slip/:payment_id" exact>
        <PaymentSlipUpload />
      </PrivateRoutePasien>
      <PrivateRouteAdmin path="/admin-dashboard">
        <AdminDashboard />
      </PrivateRouteAdmin>
    </Switch>
  );
};

export default AppRoute;

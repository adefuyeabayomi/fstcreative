import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import pages
import Home from "../pages/Home";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import Login from "../pages/Authentications/Login";
import Signup from "../pages/Authentications/Signup";
import ForgotPassword from "../pages/Authentications/ForgotPassword";
import PasswordReset from "../pages/Authentications/PasswordReset";
import ChatPage from "../pages/Chat/index";
import Blog from "../pages/Blog/index";
import DesignElements from "../pages/Articles/DesignElements";
import DesignPrinciples from "../pages/Articles/DesignPrinciples";
import ColorTheory from "../pages/Articles/ColorTheory";
import FigmaIntro from "../pages/Articles/FigmaIntro";
import Typography from "../pages/Articles/Typography";
import QuotationRequest from "../pages/QuotationRequest";
import DashboardHome from "../pages/LoggedIn/DashboardHome";
import AccountSettings from "../pages/LoggedIn/AccountSettings";
import CustomerSupport from "../pages/LoggedIn/CustomerSupport";
import DesignSchoolHome from "../pages/LoggedIn/DesignSchoolHome";
import Notifications from "../pages/LoggedIn/Notifications";
import ProjectsAndActivities from "../pages/LoggedIn/ProjectsAndActivities";
import Transactions from "../pages/LoggedIn/Transactions";
import { SideBar } from "../components/sidebar";
import Careers from "../pages/Careers";
import { useDash } from "../contexts/DashContext";
import AuthGuard from "../pages/AuthGuard";
import Pricing from "../pages/Pricing";

function Navigation(): React.JSX.Element {
  let { isDash } = useDash();
  useEffect(() => {
    console.log({ isDash });
  }, [isDash]);

  return (
    <>
      <Router>
        <Header />
        <div className="py-4"></div>
        <div className={`${isDash ? "layout" : "layout-one"}`}>
          {isDash ? (
            <div className={`sidebar-main`}>
              <SideBar />
            </div>
          ) : (
            ""
          )}

          <div className="main-content">
            <section className="layout-container">
              <Routes>
                <Route path="/" Component={Home} />
                <Route path="/login" Component={Login} />
                <Route path="/signup" Component={Signup} />
                <Route path="/forgot-password" Component={ForgotPassword} />
                <Route path="/reset-password" Component={PasswordReset} />
                <Route path="/auth-guard" Component={AuthGuard} />
                <Route path="/careers" Component={Careers} />
                <Route path="/pricing" Component={Pricing} />
                <Route path="/dashboard" Component={DashboardHome} />
                <Route
                  path="/dashboard/account-settings"
                  Component={AccountSettings}
                />
                <Route
                  path="/dashboard/customer-support"
                  Component={CustomerSupport}
                />
                <Route
                  path="/dashboard/design-school"
                  Component={DesignSchoolHome}
                />
                <Route
                  path="/dashboard/notifications"
                  Component={Notifications}
                />
                <Route
                  path="/dashboard/projects-and-activities"
                  Component={ProjectsAndActivities}
                />
                <Route
                  path="/dashboard/transactions"
                  Component={Transactions}
                />
                <Route path="/chat" Component={ChatPage} />
                <Route path="/quotation-request" Component={QuotationRequest} />
                <Route path="/blog" Component={Blog} />
                <Route
                  path="/blog/visual-design-elements"
                  Component={DesignElements}
                />
                <Route
                  path="/blog/visual-design-principles"
                  Component={DesignPrinciples}
                />
                <Route path="/blog/color-theory" Component={ColorTheory} />
                <Route path="/blog/figma-intro" Component={FigmaIntro} />
                <Route path="/blog/typography" Component={Typography} />
              </Routes>
            </section>
          </div>
        </div>

        <div className="py-4" />
        <Footer />
      </Router>
    </>
  );
}

export default Navigation;

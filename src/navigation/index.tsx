import React from "react";
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
import Blog from "../pages/Blog";
import DesignElements from "../pages/Articles/DesignElements";
import DesignPrinciples from "../pages/Articles/DesignPrinciples";
import ColorTheory from "../pages/Articles/ColorTheory";
import FigmaIntro from "../pages/Articles/FigmaIntro";
import Typography from "../pages/Articles/Typography";

function Navigation(): React.JSX.Element {
  return (
    <>
      <Router>
        <Header />
        <div className="py-4"></div>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
          <Route path="/forgot-password" Component={ForgotPassword} />
          <Route path="/reset-password" Component={PasswordReset} />
          <Route path="/chat" Component={ChatPage} />
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
        <div className="py-4" />
        <Footer />
      </Router>
    </>
  );
}

export default Navigation;

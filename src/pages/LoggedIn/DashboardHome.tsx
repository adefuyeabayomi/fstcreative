import React, { useEffect } from "react";
import "./style.css";
import { animateScroll as scroll } from "react-scroll";
import { DashHomeCard } from "../../components/Cards";
import { useDash } from "../../contexts/DashContext";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

interface DHomeCardPropType {
  title: string;
  link: string;
}

const DashboardHome = (): React.JSX.Element => {
  let { updateDashStatus } = useDash();
  let navigate = useNavigate();
  let auth = useAuth();
  if (!auth.isAuthenticated) {
    navigate("/auth-guard");
  }
  useEffect(() => {
    updateDashStatus(true);
    // Scroll to top when the component mounts
    scroll.scrollToTop({
      duration: 1000, // duration of the scrolling animation in milliseconds
      smooth: "easeInOutQuart", // the type of easing
    });
  }, []);

  let cardDetails = [
    {
      title: "Projects & Activities",
      description:
        "View your ongoing projects, track your project status, initialize payment and more.",
      link: "/dashboard/projects-and-activities",
    },
    {
      title: "Design School",
      link: "/dashboard/design-school",
      description:
        "Register for Classes, Access Materials and your class schedules",
    },
    {
      title: "Notifications",
      link: "/dashboard/notifications",
      description: "Access your notifications and latest updates.",
    },
    {
      title: "Transactions",
      link: "/dashboard/transactions",
      description: "View all your transactions history",
    },
    {
      title: "Support Page",
      link: "/dashboard/customer-support",
      description:
        "Submit all your feedback and complaints to our customer service",
    },
    {
      title: "Account Page",
      link: "/dashboard/account-settings",
      description: "View and Update your account with the settings page.",
    },
  ];

  return (
    <div className="d-page royal-shade-5">
      <div className="py-4" />
      <div className="d-page-heading">
        <h1 className="">Welcome Back, Abayomi</h1>
        <p className="text-medium">
          Access your dashboard, project updates, design school materials and
          permissions, informations and notifications here.
        </p>
      </div>

      <div className="py-3" />
      <div className="d-page-content">
        <div className="container-fluid no-space">
          <div className="row no-space">
            {cardDetails.map((x, index) => {
              return (
                <div
                  key={index}
                  className="col-12 col-md-6 col-lg-4 col-xl-3 no-space"
                >
                  <div style={{ paddingRight: "15px", paddingTop: "15px" }}>
                    <DashHomeCard
                      description={x.description}
                      actionFn={() => navigate(x.link)}
                      title={x.title}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="py-5" />
    </div>
  );
};

export default DashboardHome;

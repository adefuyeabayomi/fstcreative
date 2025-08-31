import React, { useEffect } from "react";
import "./style.css";
import { animateScroll as scroll } from "react-scroll";
import { ProjectCard } from "../../components/Cards";
import { useDash } from "../../contexts/DashContext";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const ProjectsAndActivities = (): React.JSX.Element => {
  let { updateDashStatus } = useDash();
  let navigate = useNavigate();
  let auth = useAuth();
  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate("/auth-guard");
    }
    updateDashStatus(true);
    // Scroll to top when the component mounts
    scroll.scrollToTop({
      duration: 1000, // duration of the scrolling animation in milliseconds
      smooth: "easeInOutQuart", // the type of easing
    });
  }, []);

  return (
    <div className="d-page royal-shade-5">
      <div className="py-3" />
      <div className="d-page-heading">
        <h1 className="">Projects & Services</h1>
        <p className="text-medium">
          View and track all your ongoing / completed Projects and Service Plans
        </p>
      </div>
      <div>
        <ProjectCard />
      </div>

      <div className="py-3" />
      <div className="d-page-content">
        <div></div>
      </div>
    </div>
  );
};

export default ProjectsAndActivities;

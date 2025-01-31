import React, { useEffect, useState } from "react";
import "./style.css";
import { animateScroll as scroll } from "react-scroll";
import { useDash } from "../../contexts/DashContext";
import CareerPost from "../../components/Cards/CareerPost";
import { useNavigate } from "react-router-dom";

const Careers = (): React.JSX.Element => {
  let [activeCat, setActiveCat] = useState("all");
  let { updateDashStatus } = useDash();
  let navigate = useNavigate();
  useEffect(() => {
    updateDashStatus(false);
    // Scroll to top when the component mounts
    scroll.scrollToTop({
      duration: 1000, // duration of the scrolling animation in milliseconds
      smooth: "easeInOutQuart", // the type of easing
    });
  }, []);

  const jobPostings = [
    {
      essential: {
        job_title: "Junior Front-End Developer",
        location: "Remote",
        technology_stack: ["React", "JavaScript", "HTML", "CSS", "Git"],
        employment_type: "Full-time",
        salary_range: "NGN 20,000 - NGN 30,000 Monthly",
        experience_level: "Entry-level (0-2 years)",
      },
      additional: {
        key_responsibilities: [
          "Develop and maintain UI components",
          "Collaborate with designers and back-end developers",
          "Ensure responsiveness and cross-browser compatibility",
          "Optimize performance and accessibility",
        ],
        required_skills: [
          "React",
          "JavaScript",
          "CSS",
          "REST APIs",
          "Git",
          "Responsive Design",
        ],
        preferred_skills: [
          "TypeScript",
          "Next.js",
          "Tailwind CSS",
          "Testing Libraries",
        ],
        perks_and_benefits: [
          "Flexible working hours",
          "Career growth and mentorship",
          "Learning budget for courses and books",
          "Health benefits",
        ],
        application_deadline: "Febuary 28, 2025",
        application_link: "https://company.com/careers/frontend-dev",
      },
    },
  ];

  return (
    <div className="careers-container main-spacing-x" id="careers-page">
      <div className="py-3" />
      <div className="py-3" />
      <div>
        <h1 className="text-bold text-center royal-shade-5 font-family-quicksand">
          Career Opportunities At Five And Six Technologies
        </h1>

        <div className="py-3 w-100" />
        <p className="text-center text-medium col-md-10 col-lg-9 col-xl-7 center">
          Five and Six Technologies is a digital creative agency. We aim to be
          pacesetters in the industry. We look forward to working with ambitious
          individuals who are interested in helping us grow, who are also
          interested in their personal growth. Overall, we want a productive
          partnership that would be of a positive influence on the larger
          society.
        </p>
      </div>
      <div className="py-3 w-100" />
      <div id="category-container" className="blog-category-container">
        <div className="d-divider-half gray-11-bg"></div>
        <div className="py-1"></div>
        <div className="cat-container-div">
          <ul className="blog-cat-list center text-center">
            <li
              onClick={() => setActiveCat("all")}
              className={`${activeCat == "all" ? "active" : ""} text-medium pointer`}
            >
              All
            </li>
            <li
              onClick={() => setActiveCat("uiux")}
              className={`${activeCat == "uiux" ? "active" : ""} text-medium pointer`}
            >
              UI/UX Designer
            </li>
            <li
              onClick={() => setActiveCat("frontend")}
              className={`${activeCat == "frontend" ? "active" : ""} text-medium pointer`}
            >
              Frontend.Dev
            </li>
            <li
              onClick={() => setActiveCat("backend")}
              className={`${activeCat == "backend" ? "active" : ""} text-medium pointer`}
            >
              Backend.Dev
            </li>
            <li
              onClick={() => setActiveCat("internship")}
              className={`${activeCat == "internship" ? "active" : ""} text-medium pointer`}
            >
              Internship
            </li>
          </ul>
        </div>
        <div className="py-1"></div>
        <div className="d-divider-half gray-11-bg"></div>
      </div>
      <div className="py-3" />
      <div>
        <CareerPost
          actionFn={() => {
            navigate("/fst-careers-apply");
          }}
          essential={jobPostings[0].essential}
          additional={jobPostings[0].additional}
        />
      </div>
    </div>
  );
};

export default Careers;

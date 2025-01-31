import React from "react";
import "./style.css";
import ang45Arrow from "../../assets/images/ang45arrow.svg";

import cIcon from "../../assets/images/iconJobPost.svg";

//type employment_type = "Full-time" | "Part-time" | "Contract" | "Internship";

interface JobPosting {
  essential: {
    job_title: string;
    location: string;
    technology_stack: string[];
    employment_type: string;
    salary_range?: string;
    experience_level: string;
  };
  additional?: {
    key_responsibilities: string[];
    required_skills: string[];
    preferred_skills?: string[];
    perks_and_benefits: string[];
    application_deadline?: string;
    application_link: string;
  };
  actionFn: () => void;
}

const CareerPost = ({
  actionFn,
  essential,
  additional,
}: JobPosting): React.JSX.Element => {
  return (
    <div className="career-post p-3 fade-border r-10 royal-shade-4">
      <div className="container-fluid no-space">
        <div className="row no-space align-items-center">
          <div className="w-max-content no-space">
            <div>
              <h6 className="royal text-semibold">
                <span className="text-bold"></span>
                {essential.job_title}
              </h6>
            </div>
          </div>
          <div className="col" />
          <div className="w-max-content no-space">
            <div className="cpost-icon-container">
              <img src={cIcon} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-medium text-small gray-4">
          <span className="text-semibold">Location: </span> {essential.location}
        </p>
        <p className="text-medium text-small gray-4">
          <span className="text-semibold">Tech Stack: </span>
          {essential.technology_stack.join(", ")}
        </p>
        <p className="text-medium text-small gray-4">
          <span className="text-semibold">Employment Type: </span>{" "}
          {essential.employment_type}
        </p>
        <p className="text-medium text-small gray-4">
          <span className="text-semibold">Salary Range: </span>
          {essential.salary_range}
        </p>
        <p className="text-medium text-small gray-4">
          <span className="text-semibold">Experience Level: </span>
          {essential.experience_level}
        </p>
      </div>
      <div className="py-2" />
      <div>
        <p className="text-bold gray-3">Additional Informations</p>
        <ul className="text-medium gray-4 text-p text-gray-9 text-p cpj-description">
          {additional?.key_responsibilities.map((x) => {
            return <li>{x}</li>;
          })}
          <li>
            <span className="text-semibold">Required Skills: </span>{" "}
            {additional?.required_skills.join(", ")}
          </li>
          <li>
            <span className="text-semibold">Nice To Have: </span>{" "}
            {additional?.preferred_skills
              ? additional?.preferred_skills.join(", ")
              : ""}
          </li>
        </ul>
      </div>
      <div className="py-2" />
      <div>
        <p className="text-bold gray-3">Benefits</p>
        <ul className="text-medium gray-4 text-p text-gray-9 text-p cpj-description">
          {additional?.perks_and_benefits.map((x) => {
            return <li>{x}</li>;
          })}
        </ul>
      </div>
      <div className="py-2" />
      <div>
        <p className="text-medium medium gray-4">
          <span className="text-semibold">Application Deadline </span>
          {additional?.application_deadline}
        </p>
      </div>

      <div className="py-2" />

      <div>
        <button
          onClick={actionFn}
          className="text-center royal-shade-2 text-center cpbtn"
        >
          <div className="container-fluid no-space">
            <div className="row no-space align-items-center justify-content-center center">
              <div className="w-max-content no-space">
                <p className="text-semibold">Apply</p>
              </div>
              <div className="w-max-content no-space">
                <img src={ang45Arrow} className="d-home-card-img" />
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CareerPost;

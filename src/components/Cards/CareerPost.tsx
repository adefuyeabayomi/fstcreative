import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBriefcase,
  faLocationDot,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import ang45Arrow from "../../assets/images/ang45arrow.svg";
import { Button } from "@/components/ui/Button";

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
    <article className="rounded-container border border-white/70 bg-white p-6 shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={ang45Arrow.src} alt="" className="h-5 w-5" />
          <h5 className="font-quicksand text-xl font-semibold text-royal-ink">
            {essential.job_title}
          </h5>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand">
          <FontAwesomeIcon icon={faBriefcase} className="h-3 w-3" />
          {essential.employment_type}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
        <span className="inline-flex items-center gap-1.5">
          <FontAwesomeIcon icon={faLocationDot} className="h-3.5 w-3.5 text-royal" />
          {essential.location}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <FontAwesomeIcon icon={faMoneyBillWave} className="h-3.5 w-3.5 text-royal" />
          {essential.salary_range}
        </span>
        <span>{essential.experience_level}</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {essential.technology_stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-surface-secondary px-2.5 py-1 text-xs font-medium text-slate-600"
          >
            {tech}
          </span>
        ))}
      </div>

      {additional && (
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h6 className="text-sm font-semibold text-royal-ink">
              Key responsibilities
            </h6>
            <ul className="mt-2 list-none space-y-1.5 text-sm leading-6 text-slate-600">
              {additional.key_responsibilities.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-royal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="text-sm font-semibold text-royal-ink">Benefits</h6>
            <ul className="mt-2 list-none space-y-1.5 text-sm leading-6 text-slate-600">
              {additional.perks_and_benefits.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-royal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {additional && (
        <div className="mt-5 space-y-1.5 text-sm text-slate-600">
          <p>
            <span className="font-semibold text-royal-ink">Required skills: </span>
            {additional.required_skills.join(", ")}
          </p>
          {additional.preferred_skills?.length ? (
            <p>
              <span className="font-semibold text-royal-ink">Nice to have: </span>
              {additional.preferred_skills.join(", ")}
            </p>
          ) : null}
        </div>
      )}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-5">
        <p className="text-sm text-slate-500">
          Application deadline:{" "}
          <span className="font-medium text-royal-ink">
            {additional?.application_deadline ?? "Open"}
          </span>
        </p>
        <Button variant="royal" shape="pill" onClick={actionFn}>
          Apply
          <FontAwesomeIcon icon={faArrowRight} className="h-3.5 w-3.5" />
        </Button>
      </div>
    </article>
  );
};

export default CareerPost;

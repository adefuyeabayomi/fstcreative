"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDash } from "../../contexts/DashContext";
import CareerPost from "../../components/Cards/CareerPost";
import { widthControlClass } from "@/styles/widthControl";
import { cn } from "@/lib/cn";

const categories = [
  { id: "all", label: "All" },
  { id: "uiux", label: "UI/UX Designer" },
  { id: "frontend", label: "Frontend Dev" },
  { id: "backend", label: "Backend Dev" },
  { id: "internship", label: "Internship" },
];

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
      preferred_skills: ["TypeScript", "Next.js", "Tailwind CSS", "Testing Libraries"],
      perks_and_benefits: [
        "Flexible working hours",
        "Career growth and mentorship",
        "Learning budget for courses and books",
        "Health benefits",
      ],
      application_deadline: "February 28, 2025",
      application_link: "https://company.com/careers/frontend-dev",
    },
  },
];

export default function Careers(): React.JSX.Element {
  const [activeCat, setActiveCat] = useState("all");
  const { updateDashStatus } = useDash();
  const router = useRouter();

  useEffect(() => {
    updateDashStatus(false);
    window.scrollTo(0, 0);
  }, [updateDashStatus]);

  return (
    <main className="bg-white pb-20 font-sans text-ink">
      <div className={widthControlClass}>
        <div className="pt-14 text-center">
          <span className="inline-flex h-7 items-center rounded-full bg-royal/5 px-3 text-[12px] font-medium text-royal">
            Careers
          </span>
          <h1 className="mx-auto mt-4 max-w-3xl font-quicksand text-[32px] font-semibold leading-tight tracking-[-0.02em] text-royal-ink sm:text-[42px]">
            Career opportunities at Five and Six Technologies
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-slate-600">
            We are a digital creative agency aiming to be pacesetters in the
            industry. We work with ambitious individuals who want to grow with us
            and make a positive impact on the larger society.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex w-full max-w-3xl gap-1 overflow-x-auto rounded-full border border-slate-200 bg-white p-1.5 shadow-card [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((category) => {
              const active = activeCat === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCat(category.id)}
                  className={cn(
                    "flex-1 whitespace-nowrap rounded-full px-4 py-2.5 text-[13px] font-medium transition-colors sm:text-sm",
                    active
                      ? "bg-royal text-white shadow-card"
                      : "text-slate-500 hover:bg-slate-100 hover:text-royal-ink",
                  )}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10">
          <CareerPost
            actionFn={() => router.push("/fst-careers-apply")}
            essential={jobPostings[0].essential}
            additional={jobPostings[0].additional}
          />
        </div>
      </div>
    </main>
  );
}

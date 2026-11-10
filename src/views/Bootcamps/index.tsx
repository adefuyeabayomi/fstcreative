"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDash } from "../../contexts/DashContext";
import { useAuth } from "../../contexts/AuthContext";
import { useLoading } from "../../contexts/LoadingContext";
import { Button } from "@/components/ui/Button";
import { widthControlClass } from "@/styles/widthControl";

import heroImg from "../../assets/images/Default_A_techsavvy_young_black_man_smiling_as_he_works_on_his_2 1.png";
import dUIImg from "../../assets/images/dUIimg.png";
import bIconAi from "../../assets/images/bIconAi.png";
import bIconBezier from "../../assets/images/bIconBezier.png";
import bIconCode from "../../assets/images/bIconCode.png";
import bIconFigma from "../../assets/images/bIconFigma.png";
import bIconUI from "../../assets/images/bIconUI.png";
import angArrow from "../../assets/images/ang45arrow.svg";

const featureIcons = [bIconFigma, bIconCode, bIconBezier, bIconUI, bIconAi];

function Checklist({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-none space-y-2.5 text-[15px] leading-7 text-slate-600">
      {items.map((item, index) => (
        <li key={index} className="flex gap-2.5">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-royal" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Bootcamps(): React.JSX.Element {
  const auth = useAuth();
  const { setLoading, setLoadingText } = useLoading();
  const router = useRouter();
  const { updateDashStatus } = useDash();

  useEffect(() => {
    updateDashStatus(false);
    window.scrollTo(0, 0);
  }, [updateDashStatus]);

  function register() {
    if (!auth.isAuthenticated) {
      setLoading(true);
      setLoadingText(
        "You need to log in to register for a bootcamp. Redirecting to the login page.",
      );
      setTimeout(() => {
        setLoading(false);
        setLoadingText("");
        router.push("/login?next=bootcamps&register=true");
      }, 5000);
      return;
    }
    router.push("/bootcamp-registration");
  }

  return (
    <main className="bg-white pb-20">
      <div className={widthControlClass}>
        <section className="grid items-center gap-10 pt-14 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <span className="inline-flex h-7 items-center rounded-full bg-royal/5 px-3 text-[12px] font-medium text-royal">
              Bootcamps
            </span>
            <h1 className="mt-4 font-quicksand text-[32px] font-semibold leading-tight tracking-[-0.02em] text-royal-ink sm:text-[42px]">
              Kickstart your tech career with hands-on learning
            </h1>

            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              {featureIcons.map((icon, index) => (
                <img
                  key={index}
                  src={icon.src}
                  alt=""
                  className="h-11 w-11 rounded-full object-contain"
                />
              ))}
            </div>

            <h2 className="mt-6 font-quicksand text-lg font-semibold text-royal-ink">
              Start your design journey with our bootcamp — coding coming soon!
            </h2>
            <p className="mx-auto mt-2 max-w-md text-[15px] leading-7 text-slate-600 lg:mx-0">
              Explore our current Product Design Bootcamp and gain hands-on
              experience in UI/UX, visual design, and interactive prototyping. As
              we grow, expect even more opportunities, including coding bootcamps.
            </p>
          </div>

          <div className="rounded-canvas border border-slate-200 bg-surface-canvas p-3 shadow-card">
            <img
              src={heroImg.src}
              alt="Bootcamp"
              className="h-auto w-full rounded-card object-cover"
            />
          </div>
        </section>

        <div className="my-14 h-px bg-slate-200" />

        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-royal">
          Explore
          <img src={angArrow.src} alt="" className="h-6 w-6 rotate-90" />
        </div>

        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-semibold text-royal-ink">3 Months Bootcamp</p>
              <p className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
                Starts March 14<sup>th</sup>
              </p>
            </div>

            <h2 className="mt-4 font-quicksand text-[26px] font-semibold tracking-[-0.01em] text-royal-ink sm:text-[32px]">
              Product Design Bootcamp (Beginner to Advanced)
            </h2>
            <p className="mt-2 text-lg font-semibold text-royal-ink">
              🚀 Master UI/UX &amp; visual design in just 3 months!
            </p>

            <div className="mt-6">
              <Checklist
                items={[
                  <>
                    <span className="font-semibold text-royal-ink">Start date:</span>{" "}
                    14th March, 2025
                  </>,
                  <>
                    <span className="font-semibold text-royal-ink">Duration:</span> 12
                    weeks (live sessions + hands-on practicals)
                  </>,
                  <>
                    <span className="font-semibold text-royal-ink">Skill level:</span>{" "}
                    Total beginner to advanced
                  </>,
                  <>
                    <span className="font-semibold text-royal-ink">Mode:</span> Online
                    (live + recorded sessions)
                  </>,
                ]}
              />
            </div>

            <div className="mt-8 overflow-hidden rounded-container border border-slate-200 bg-white p-2 shadow-card">
              <img src={dUIImg.src} alt="" className="w-full rounded-card object-cover" />
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-royal-ink">What you&apos;ll learn</h3>
              <div className="mt-3">
                <Checklist
                  items={[
                    <>
                      <span className="font-semibold text-royal-ink">
                        Basics of visual design —
                      </span>{" "}
                      master design principles, colour theory and typography.
                    </>,
                    <>
                      <span className="font-semibold text-royal-ink">
                        Logo design &amp; vector editing (Inkscape) —
                      </span>{" "}
                      create stunning logos and scalable vector graphics.
                    </>,
                    <>
                      <span className="font-semibold text-royal-ink">
                        Fundamentals of UI/UX design (Figma) —
                      </span>{" "}
                      learn wireframing, prototyping and user research.
                    </>,
                    <>
                      <span className="font-semibold text-royal-ink">
                        Design systems and libraries —
                      </span>{" "}
                      build reusable UI components for scalable projects.
                    </>,
                    <>
                      <span className="font-semibold text-royal-ink">
                        Advanced UI design —
                      </span>{" "}
                      craft polished, high-quality interfaces that stand out.
                    </>,
                    <>
                      <span className="font-semibold text-royal-ink">
                        Interaction &amp; motion design —
                      </span>{" "}
                      create immersive experiences with animations and
                      micro-interactions.
                    </>,
                    <>
                      <span className="font-semibold text-royal-ink">
                        Product development lifecycle —
                      </span>{" "}
                      work in a team setting and understand real-world workflows.
                    </>,
                    <>
                      <span className="font-semibold text-royal-ink">
                        Live sessions &amp; portfolio projects —
                      </span>{" "}
                      gain hands-on experience and showcase your work.
                    </>,
                  ]}
                />
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-royal-ink">Why this bootcamp?</h3>
              <div className="mt-3">
                <Checklist
                  items={[
                    <>
                      <span className="font-semibold text-royal-ink">
                        Industry-relevant training —
                      </span>{" "}
                      learn exactly what top companies look for in designers.
                    </>,
                    <>
                      <span className="font-semibold text-royal-ink">
                        Practical hands-on approach —
                      </span>{" "}
                      apply your knowledge through real-world projects.
                    </>,
                    <>
                      <span className="font-semibold text-royal-ink">
                        Build a portfolio that stands out —
                      </span>{" "}
                      work on projects that impress recruiters.
                    </>,
                    <>
                      <span className="font-semibold text-royal-ink">
                        Expert mentorship &amp; guidance —
                      </span>{" "}
                      get personalised feedback from industry professionals.
                    </>,
                    <>
                      <span className="font-semibold text-royal-ink">
                        Community &amp; collaboration —
                      </span>{" "}
                      join a network of aspiring designers.
                    </>,
                  ]}
                />
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-royal-ink">
                By the end of this bootcamp, you&apos;ll be able to:
              </h3>
              <div className="mt-3">
                <Checklist
                  items={[
                    "Design high-quality user interfaces and experiences from scratch.",
                    "Work with modern design tools (Figma, Inkscape, etc.).",
                    "Build and contribute to real-world products.",
                    "Create a compelling portfolio that attracts job offers.",
                  ]}
                />
              </div>
            </div>

            <div className="mt-10">
              <h3 className="font-quicksand text-lg font-semibold text-royal-ink">
                Ready to start your design journey?
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                🚀 Register now and secure your spot!
              </p>
              <Button
                type="button"
                variant="royal"
                size="lg"
                fullWidth
                className="mt-4"
                onClick={register}
              >
                Register
              </Button>
            </div>
          </div>

          <aside className="rounded-container border border-slate-200 bg-surface-canvas p-6 shadow-card lg:sticky lg:top-24">
            <p className="text-sm font-semibold text-royal-ink">Cohort details</p>
            <ul className="mt-4 list-none space-y-3 text-sm text-slate-600">
              <li className="flex items-center justify-between gap-3">
                <span>Start date</span>
                <span className="font-medium text-royal-ink">14 Mar 2025</span>
              </li>
              <li className="flex items-center justify-between gap-3">
                <span>Duration</span>
                <span className="font-medium text-royal-ink">12 weeks</span>
              </li>
              <li className="flex items-center justify-between gap-3">
                <span>Format</span>
                <span className="font-medium text-royal-ink">Live + recorded</span>
              </li>
              <li className="flex items-center justify-between gap-3">
                <span>Level</span>
                <span className="font-medium text-royal-ink">Beginner+</span>
              </li>
            </ul>
            <Button
              type="button"
              variant="royalOutline"
              fullWidth
              className="mt-5"
              onClick={register}
            >
              Secure your spot
            </Button>
          </aside>
        </div>
      </div>
    </main>
  );
}

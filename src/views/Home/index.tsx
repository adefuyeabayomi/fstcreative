"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheck,
  faLocationArrow,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";

import heroImg from "../../assets/images/Hero-section.png";
import s2 from "../../assets/images/s2.png";
import service1 from "../../assets/images/service1.png";
import service2 from "../../assets/images/service2.png";
import service3 from "../../assets/images/service3.png";
import service4 from "../../assets/images/service4.png";
import contactCall from "../../assets/images/contact-call.png";
import contactWhatsapp from "../../assets/images/contact-whatsapp.png";
import contactEmail from "../../assets/images/contact-email.png";
import dUIImg from "../../assets/images/dUIimg.png";

import { useHash } from "@/hooks/useHash";
import { widthControlClass } from "@/styles/widthControl";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { blogPosts } from "@/data/blogPosts";
import { useDash } from "../../contexts/DashContext";

const services: Array<{
  title: string;
  group: string | null;
  cta: string;
  points: string[];
  image: { src: string };
}> = [
  {
    title: "Branding & Identity Design",
    group: "branding",
    cta: "See service plans",
    image: service1,
    points: [
      "Strategic brand development",
      "Custom logo creation — distinctive and timeless logos tailored to your brand's personality and vision",
      "Reusable visual identity systems with cohesive iconography, patterns and graphic elements",
      "Brand story design",
      "Packaging and merchandise branding",
    ],
  },
  {
    title: "Creative Graphics Design",
    group: "creativeGraphicsDesign",
    cta: "See service plans",
    image: service2,
    points: [
      "High-impact poster and flyer designs for events, products and campaigns",
      "Social media graphics optimised for every platform, with consistent branding",
      "Advertorial-style visuals built for click-through and conversion",
    ],
  },
  {
    title: "UI/UX Design",
    group: "uiUxDesign",
    cta: "See service plans",
    image: service3,
    points: [
      "Full user research — surveys, interviews and journey maps",
      "Low-fidelity and high-fidelity designs",
      "Fully interactive prototypes for proper user testing",
      "Style guide and design system with reusable components",
    ],
  },
  {
    title: "Web Development",
    group: "webDevelopment",
    cta: "See service plans",
    image: service4,
    points: [
      "Accessible, user-friendly website design",
      "Simplified deployment and ongoing assistance",
      "SEO optimisation and SSL security",
      "API and database integrations",
    ],
  },
  {
    title: "Design and Coding Classes",
    group: null,
    cta: "Register for a bootcamp",
    image: service4,
    points: [
      "Design fundamentals — bootcamp",
      "Web design fundamentals (HTML & CSS) — bootcamp",
      "JavaScript and the web, React.js — bootcamp",
      "Beginner to advanced UI design with Figma — bootcamp",
    ],
  },
];

const contactChannels = [
  {
    label: "Call",
    value: "0813 624 3796",
    href: "tel:+2348136243796",
    image: contactCall,
  },
  {
    label: "WhatsApp",
    value: "0813 624 3796",
    href: "https://wa.me/+2348136243796",
    image: contactWhatsapp,
  },
  {
    label: "Email",
    value: "yomi@fiveandsixtechnologies.com",
    href: "mailto:yomi@fiveandsixtechnologies.com",
    image: contactEmail,
  },
];

export default function Home(): React.JSX.Element {
  const router = useRouter();
  const hash = useHash();
  const { updateDashStatus } = useDash();

  useEffect(() => {
    updateDashStatus(false);
    window.scrollTo(0, 0);
  }, [updateDashStatus]);

  useEffect(() => {
    const scrollTo = (selector: string) => {
      const element = document.querySelector(selector) as HTMLElement | null;
      if (!element) return;
      window.scrollTo({ top: element.offsetTop - 70, behavior: "smooth" });
    };

    if (hash === "#services") scrollTo("#services");
    else if (hash === "#contact") scrollTo("#contact");
    else window.scrollTo(0, 0);
  }, [hash]);

  return (
    <main id="home" className="overflow-hidden bg-white text-royal-ink">
      {/* Hero */}
      <section className="relative pt-16 lg:pt-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-32 h-96 w-96 rounded-full bg-royal/5 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-brand/5 blur-3xl"
        />

        <div className={cn(widthControlClass, "relative")}>
          <div className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-14 lg:py-20">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-royal/5 px-5 py-2 text-[13px] font-medium text-royal">
                <FontAwesomeIcon icon={faStarHalfStroke} className="h-3 w-3" />
                Hi, welcome to Five &amp; Six Technologies
                <FontAwesomeIcon icon={faStarHalfStroke} className="h-3 w-3" />
              </span>

              <h1 className="mt-6 font-quicksand text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] text-royal-ink sm:text-[44px] lg:text-[52px]">
                WE CREATE <span className="text-royal">RESULT DRIVEN</span>{" "}
                DIGITAL SOLUTIONS
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-ink-muted lg:mx-0">
                At Five &amp; Six Technologies, our mission is to drive your
                business forward. We build websites and mobile apps that increase
                sales, enhance brand visibility, engage customers effectively and
                generate valuable leads — ensuring tangible growth and success.
              </p>

              <div className="mt-8 flex justify-center lg:justify-start">
                <Button
                  type="button"
                  variant="royal"
                  size="lg"
                  shape="pill"
                  onClick={() =>
                    document
                      .querySelector("#services")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  Our services
                  <FontAwesomeIcon icon={faLocationArrow} className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-canvas border border-white/70 bg-surface-canvas p-3 shadow-floating">
                <img
                  src={heroImg.src}
                  alt="Five and Six Technologies digital solutions"
                  className="h-auto w-full rounded-card object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={widthControlClass}>
        <div className="h-px bg-black/[0.06]" />
      </div>

      {/* Why */}
      <section id="section-2" className={widthControlClass}>
        <div className="grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-14">
          <div className="text-center lg:order-1 lg:text-left">
            <h2 className="font-quicksand text-[28px] font-semibold leading-tight tracking-[-0.02em] text-royal-ink sm:text-[36px]">
              TAKE ADVANTAGE OF{" "}
              <span className="text-royal">MODERN INNOVATIONS</span> AND SPEED UP
              YOUR BUSINESS OPERATIONS AND EXPOSURE.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-ink-muted lg:mx-0">
              Having a website and a mobile application brings you just clicks
              away from getting a new client, making a new sale, or getting one
              more prospect to see your business. Let&apos;s help you get
              visibility for your business.
            </p>
          </div>

          <div className="">
            <div className="rounded-canvas border border-white/70 p-3 shadow-card">
              <img
                src={s2.src}
                alt="Modern digital innovation"
                className="h-auto w-full rounded-card object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24 bg-surface-canvas/60">
        <div className={widthControlClass}>
          <div className="py-14 sm:py-16">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex h-7 items-center rounded-full bg-royal/5 px-3 text-[12px] font-medium text-royal">
                What we do
              </span>
              <h2 className="mt-4 font-quicksand text-[30px] font-semibold tracking-[-0.02em] text-royal-ink sm:text-[38px]">
                OUR <span className="text-royal">SERVICES</span>
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-ink-muted">
                Discover how our suite of services can help you navigate the
                digital landscape with ease, offering innovative solutions
                tailored to your unique needs.
              </p>
            </div>

            <div className="mt-12 space-y-14 lg:space-y-20">
              {services.map((service, index) => {
                const reversed = index % 2 === 1;
                return (
                  <div
                    key={service.title}
                    className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
                  >
                    <div
                      className={cn(
                        "text-center lg:text-left",
                        reversed ? "lg:order-2" : "lg:order-1",
                      )}
                    >
                      <h3 className="font-quicksand text-[21px] font-semibold text-royal-ink sm:text-[23px]">
                        {service.title}
                      </h3>

                      <ul className="mt-4 list-none space-y-2.5 text-left">
                        {service.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2.5 text-[14px] leading-6 text-ink-muted"
                          >
                            <FontAwesomeIcon
                              icon={faCheck}
                              className="mt-1.5 h-3 w-3 shrink-0 text-royal"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex justify-center lg:justify-start">
                        <Button
                          type="button"
                          variant="royalOutline"
                          shape="pill"
                          onClick={() =>
                            service.group
                              ? router.push(`/pricing#${service.group}`)
                              : router.push("/bootcamps")
                          }
                        >
                          {service.cta}
                          <FontAwesomeIcon icon={faArrowRight} className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>

                    <div className={reversed ? "lg:order-1" : "lg:order-2"}>
                      <div className="overflow-hidden rounded-container border border-white/70 bg-white p-3 shadow-card">
                        <img
                          src={service.image.src}
                          alt={service.title}
                          className="h-auto w-full rounded-card object-cover"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Bootcamp overview */}
      <section id="bootcamp" className="scroll-mt-24 bg-surface-canvas/60">
        <div className={widthControlClass}>
          <div className="grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:gap-14">
            <div className="text-center lg:text-left">
              <span className="inline-flex h-7 items-center rounded-full bg-royal/5 px-3 text-[12px] font-medium text-royal">
                Bootcamp
              </span>
              <h2 className="mt-4 font-quicksand text-[30px] font-semibold leading-tight tracking-[-0.02em] text-royal-ink sm:text-[38px]">
                Product Design Bootcamp
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-[15px] leading-7 text-ink-muted lg:mx-0">
                Go from total beginner to advanced designer in 12 weeks. Learn
                UI/UX, visual design and interactive prototyping through live
                sessions, practical projects and expert mentorship.
              </p>

              <ul className="mx-auto mt-5 grid max-w-xl list-none gap-2.5 text-left text-[14px] text-ink-muted sm:grid-cols-2 lg:mx-0">
                {[
                  "3 months · 12 weeks",
                  "Live + recorded sessions",
                  "Beginner to advanced",
                  "Portfolio projects",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheck} className="h-3 w-3 text-royal" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-xs font-medium uppercase tracking-[0.12em] text-ink-subdued">
                Next cohort starts March 14th · Limited slots
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
                <Button
                  variant="royal"
                  size="lg"
                  shape="pill"
                  onClick={() => router.push("/bootcamp-registration")}
                >
                  Register for bootcamp
                  <FontAwesomeIcon icon={faArrowRight} className="h-3.5 w-3.5" />
                </Button>
                <Button
                  variant="royalOutline"
                  size="lg"
                  shape="pill"
                  onClick={() => router.push("/bootcamps")}
                >
                  Learn more
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-canvas border border-white/70 bg-white p-3 shadow-floating">
                <img
                  src={dUIImg.src}
                  alt="Product Design Bootcamp"
                  className="h-auto w-full rounded-card object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-4 rounded-card bg-royal px-4 py-3 text-white shadow-floating sm:left-6">
                <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/70">
                  Starts
                </p>
                <p className="text-lg font-semibold leading-tight">March 14</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={widthControlClass}>
        <div className="h-px bg-black/[0.06]" />
      </div>

      {/* Blog overview */}
      <section id="blog" className="scroll-mt-24">
        <div className={widthControlClass}>
          <div className="py-14 sm:py-16">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex h-7 items-center rounded-full bg-royal/5 px-3 text-[12px] font-medium text-royal">
                Blog
              </span>
              <h2 className="mt-4 font-quicksand text-[30px] font-semibold tracking-[-0.02em] text-royal-ink sm:text-[38px]">
                Insights &amp; ideas
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-ink-muted">
                Practical notes on design, technology and building better digital
                products.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {blogPosts.slice(0, 4).map((post) => (
                <Link
                  key={post.linkPath}
                  href={post.linkPath}
                  className="group no-underline"
                >
                  <article className="flex h-full flex-col overflow-hidden rounded-container border border-white/70 bg-white shadow-card transition-shadow hover:shadow-floating">
                    <div className="overflow-hidden rounded-card">
                      <img
                        src={post.image.src}
                        alt={post.title}
                        className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[0.1em]">
                        <span className="text-royal">{post.category}</span>
                        <span className="text-ink-subdued">{post.duration}</span>
                      </div>
                      <h3 className="mt-2 font-quicksand text-[16px] font-semibold leading-snug text-royal-ink">
                        {post.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-[13px] leading-6 text-ink-muted">
                        {post.highlightText}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[13px] font-semibold text-royal">
                        Read more
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                        />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button
                variant="royalOutline"
                size="lg"
                shape="pill"
                onClick={() => router.push("/blog")}
              >
                See all articles
                <FontAwesomeIcon icon={faArrowRight} className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className={widthControlClass}>
        <div className="h-px bg-black/[0.06]" />
      </div>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24">
        <div className={widthControlClass}>
          <div className="py-14 sm:py-16">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex h-7 items-center rounded-full bg-royal/5 px-3 text-[12px] font-medium text-royal">
                Contact
              </span>
              <h2 className="mt-4 font-quicksand text-[30px] font-semibold tracking-[-0.02em] text-royal-ink sm:text-[38px]">
                GET IN <span className="text-royal">CONTACT</span>
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-ink-muted">
                Reach us through any of the channels below for enquiries,
                feedback or complaints.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {contactChannels.map((channel) => (
                <div
                  key={channel.label}
                  className="rounded-container border border-royal/10 bg-white p-6 text-center shadow-card transition-shadow hover:shadow-floating"
                >
                  <img
                    src={channel.image.src}
                    alt=""
                    className="mx-auto h-16 w-16 object-contain"
                  />
                  <h3 className="mt-4 font-quicksand text-[16px] font-semibold text-royal-ink">
                    {channel.label}
                  </h3>
                  <a
                    href={channel.href}
                    className="mt-1 inline-block text-[14px] font-medium text-royal no-underline transition-colors hover:text-royal-dark"
                  >
                    {channel.value}
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-container border border-white/70 bg-surface-canvas p-6 text-center shadow-card">
              <p className="text-[14px] leading-6 text-ink-muted">
                Prefer a tailored proposal?{" "}
                <Link
                  href="/quotation-request"
                  className="font-semibold text-royal no-underline transition-colors hover:text-royal-dark"
                >
                  Request a quotation
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

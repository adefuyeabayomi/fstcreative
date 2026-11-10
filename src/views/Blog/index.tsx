"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BlogCardProp, FeaturedCard } from "../../components/BlogCard/BlogCardMain";
import { useDash } from "../../contexts/DashContext";
import { Button } from "@/components/ui/Button";
import { widthControlClass } from "@/styles/widthControl";
import { cn } from "@/lib/cn";
import { blogPosts } from "@/data/blogPosts";

import blogImgTemp from "../../assets/images/Leonardo_Kino_XL_Picture_the_Mona_Lisa_as_a_cyberpunk_hacker_i_4 1.png";

const blogCards: BlogCardProp[] = blogPosts.map((post) => ({
  title: post.title,
  linkPath: post.linkPath,
  highlightText: post.highlightText,
  img: <img src={post.image.src} alt="" className="h-full w-full object-cover" />,
}));

const categories = [
  "all",
  "featured",
  "tech",
  "content",
  "design",
  "inspiration",
  "life",
  "stories",
];

const categoryLabels: Record<string, string> = {
  all: "All",
  featured: "Featured",
  tech: "Tech Innovations",
  content: "Content Creation",
  design: "Design & Creativity",
  inspiration: "Inspiration",
  life: "Life",
  stories: "Short Stories",
};

export default function Blog(): React.JSX.Element {
  const [activeCat, setActiveCat] = useState("all");
  const router = useRouter();
  const { updateDashStatus } = useDash();

  useEffect(() => {
    updateDashStatus(false);
    window.scrollTo(0, 0);
  }, [updateDashStatus]);

  return (
    <main className="bg-white pb-20">
      <div className={widthControlClass}>
        <div className="pt-14 text-center">
          <span className="inline-flex h-7 items-center rounded-full bg-royal/5 px-3 text-[12px] font-medium text-royal">
            Blog
          </span>
          <h1 className="mx-auto mt-4 max-w-3xl font-quicksand text-[32px] font-semibold leading-tight tracking-[-0.02em] text-royal-ink sm:text-[42px]">
            Get exciting updates in the creative world
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-slate-600">
            Delve into creative design, tech innovations, software development,
            physics, entrepreneurship and life.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex w-full max-w-4xl gap-1 overflow-x-auto rounded-full border border-slate-200 bg-white p-1.5 shadow-card [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((category) => {
              const active = activeCat === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCat(category)}
                  className={cn(
                    "whitespace-nowrap rounded-full px-4 py-2.5 text-[13px] font-medium transition-colors",
                    active
                      ? "bg-royal text-white shadow-card"
                      : "text-slate-500 hover:bg-slate-100 hover:text-royal-ink",
                  )}
                >
                  {categoryLabels[category]}
                </button>
              );
            })}
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            Featured updates
          </h2>
          <div className="mt-4">
            <FeaturedCard
              duration="2mins"
              cat="TECH INNOVATION"
              image={blogCards[0].img}
              highlightText={blogCards[0].highlightText}
              title={blogCards[0].title}
              linkPath={blogCards[0].linkPath}
              feature
            />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            Latest updates
          </h2>

          <div className="mt-4 grid gap-5 lg:grid-cols-3">
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
              {blogCards.slice(1).map((card) => (
                <FeaturedCard
                  key={card.linkPath}
                  duration="3mins"
                  cat="TECH INNOVATION"
                  image={card.img}
                  highlightText={card.highlightText}
                  title={card.title}
                  linkPath={card.linkPath}
                  feature={false}
                />
              ))}
            </div>

            <aside className="h-max rounded-container border border-slate-200 bg-surface-canvas p-5 shadow-card">
              <div className="flex items-center justify-between gap-3">
                <Button
                  variant="royal"
                  shape="pill"
                  onClick={() => router.push("/bootcamp-registration")}
                >
                  Register
                </Button>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white">
                    31
                  </span>
                  Days
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white">
                    45
                  </span>
                  Mins
                </div>
              </div>

              <h3 className="mt-5 font-sans text-lg font-black leading-snug text-slate-800">
                3 month Product Design Bootcamp! (Beginner to Advanced)
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                🚀 Register now — limited slots available!
              </p>
              <p className="mt-3 text-sm font-semibold text-royal">
                📅 Starts: March 14, 2025
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Go from a total beginner to an advanced designer with our
                simplified, practical and hands-on training.
              </p>

              <img
                src={blogImgTemp.src}
                alt="Bootcamp"
                className="mt-4 w-full rounded-card object-cover"
              />

              <h4 className="mt-5 text-sm font-semibold text-royal-ink">What you&apos;ll cover</h4>
              <ul className="mt-2 list-none space-y-2 text-[13px] leading-6 text-slate-600">
                {[
                  "Visual design fundamentals — build a strong design foundation",
                  "Logo design & vector editing (Inkscape)",
                  "UI/UX design essentials (Figma)",
                  "Design systems & libraries",
                  "Advanced UI design",
                  "Product development lifecycle",
                  "Interaction and motion design",
                  "Live sessions & portfolio projects",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-royal" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-sm font-semibold text-royal">
                With live sessions, practicals and portfolio building!
              </p>
              <p className="mt-1 text-[13px] text-slate-500">
                🎯 Graduate with a portfolio & collaborate on real projects!
              </p>

              <Button
                variant="royal"
                fullWidth
                className="mt-4"
                onClick={() => router.push("/bootcamp-registration")}
              >
                🔗 Register now
              </Button>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}

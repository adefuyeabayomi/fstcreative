import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons/faChevronCircleRight";
import avatar from "../../assets/images/avatar.png";
import { cn } from "@/lib/cn";

export interface BlogCardProp {
  title: string;
  linkPath: string;
  highlightText: string;
  img: React.JSX.Element;
}

const BlogCardMain = ({
  title,
  linkPath,
  highlightText,
  img,
}: BlogCardProp) => {
  return (
    <div className="overflow-hidden rounded-container border border-white/70 bg-white shadow-card">
      <div className="overflow-hidden rounded-card [&_img]:h-full [&_img]:w-full [&_img]:object-cover">
        {img}
      </div>
      <div className="p-5">
        <h6 className="font-quicksand text-base font-semibold text-royal-ink">
          {title}
        </h6>
        <p className="mt-2 text-sm leading-6 text-slate-600">{highlightText}</p>
        <Link
          href={linkPath}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-royal no-underline transition-colors hover:text-royal-dark"
        >
          Read more
          <FontAwesomeIcon icon={faChevronCircleRight} className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
};

interface BCardProps {
  feature: boolean;
  linkPath: string;
  title: string;
  highlightText: string;
  image: React.JSX.Element;
  cat: string;
  duration: string;
}

export const FeaturedCard = ({
  feature,
  title,
  linkPath,
  highlightText,
  image,
  cat,
  duration,
}: BCardProps) => {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-container border border-white/70 bg-white shadow-card transition-shadow hover:shadow-floating",
        feature ? "p-5" : "p-4",
      )}
    >
      <div
        className={cn(
          "grid gap-5",
          feature ? "lg:grid-cols-2" : "grid-cols-1",
        )}
      >
        <div className="overflow-hidden rounded-card [&_img]:h-full [&_img]:w-full [&_img]:object-cover">
          {image}
        </div>

        <div className="flex flex-col justify-center">
          <Link href={linkPath} className="no-underline">
            <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-wide">
              <span className="text-royal">{feature ? "Featured" : cat}</span>
              <span className="text-slate-400">{duration} read</span>
            </div>

            <h6 className="mt-3 font-quicksand text-lg font-semibold leading-snug text-royal-ink">
              {title}
            </h6>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {highlightText}{" "}
              <span className="font-semibold text-royal">...Read more.</span>
            </p>
          </Link>

          <div className="mt-5 flex items-center gap-3">
            <img
              src={avatar.src}
              alt="Adefuye Abayomi"
              className="h-11 w-11 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-royal-ink">Adefuye Abayomi</p>
              <p className="text-xs text-slate-500">
                Creative Designer at Five and Six Technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export const Placeholder = () => <div className="h-24 rounded-card bg-surface-secondary" />;

export default BlogCardMain;

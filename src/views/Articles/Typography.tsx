"use client";

import React, { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

import typography1 from "./images/typography-1.png";
import typography2 from "./images/typography-2.png";
import typography3 from "./images/typography-3.png";
import typography4 from "./images/typography-4.png";
import typography5 from "./images/typography-5.png";
import designElement6 from "./images/design-elements-6.png";

import { useDash } from "../../contexts/DashContext";

const Typography = (): React.JSX.Element => {
  let { updateDashStatus } = useDash();
  let [category, duration] = ["TECH INNOVATION", "2mins"];
  useEffect(() => {
    updateDashStatus(false);
    // Scroll to top when the component mounts
    scroll.scrollToTop({
      duration: 1000, // duration of the scrolling animation in milliseconds
      smooth: "easeInOutQuart", // the type of easing
    });
  }, []);
  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <div className="py-4" />
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl">
        <div className="w-full">
          <div className="flex flex-wrap">
            <div className="w-max">
              <p className="text-royal font-semibold">{category}</p>
            </div>
            <div className="flex-1"></div>
            <div className="w-max">
              <p className="font-semibold text-royal-ink">{duration} Read</p>
            </div>
          </div>
        </div>
        <div className="py-2" />
        <h1 className="font-bold font-quicksand text-royal-ink">
          Introduction to Visual Design (I) - Design Elements
        </h1>
      </div>

      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl">
        <div className="py-3" />
        <div>
          <h4 className="font-quicksand text-slate-800 font-semibold">
            Introduction to Typography
          </h4>
          <h6 className="font-quicksand text-slate-800 font-semibold">
            What is Typography?
          </h6>
          <p className="py-2 font-medium text-slate-600">
            Typography is the art of arranging text to make written language
            visually appealing and readable. It includes everything from font
            choice to line spacing, impacting how information is communicated.
          </p>
          <h6 className="font-quicksand text-slate-800 font-semibold">
            Importance of Typography in Design
          </h6>
          <p className="py-2 font-medium text-slate-600">
            Good typography enhances readability, emphasizes important
            information, and creates a distinct voice for a brand. In digital
            experiences, typography also affects user interaction and overall
            engagement
          </p>
          <div className="w-full">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="w-full md:w-1/2"></div>
              <div className="w-full md:w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl">
        <div className="py-3" />
        <div>
          <h4 className="font-quicksand text-slate-800 font-semibold">
            Elements of Typography
          </h4>
          <h6 className="font-quicksand text-slate-800 font-semibold">
            Fonts and Typefaces
          </h6>

          <ul className="text-[15px] font-medium text-slate-600">
            <li>
              <span className="font-semibold">Typefaces:</span> are the design
              of the letterforms (e.g., Arial, Times New Roman).
            </li>
            <li>
              <span className="font-semibold">Fonts: </span> are variations
              within typefaces, such as bold or italic.
            </li>
          </ul>

          <div className="w-full">
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <div className="mx-auto w-full max-w-[400px]">
                <img src={typography1.src} />
              </div>
              <div className="mx-auto w-full max-w-[400px]">
                <img src={typography2.src} />
              </div>
            </div>
          </div>
          <h6 className="font-quicksand text-slate-800 font-semibold">
            Font Size and Scale{" "}
          </h6>
          <p className="py-2 font-medium text-slate-600">
            Appropriate font size and scale enhance readability, especially on
            digital platforms where screens vary in size.
          </p>
          <h6 className="font-quicksand text-slate-800 font-semibold">
            Leading, Kerning, and Tracking{" "}
          </h6>

          <ul className="text-[15px] font-medium text-slate-600">
            <li>
              <span className="font-semibold">Leading:</span> is the space
              between lines of text.
            </li>
            <li>
              <span className="font-semibold">Kerning: </span> adjusts space
              between individual characters.
            </li>
            <li>
              <span className="font-semibold">Tracking: </span> manages spacing
              across groups of letters, improving readability and aesthetics
            </li>
          </ul>

          <div className="w-full">
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <div className="mx-auto w-full max-w-[400px]">
                <img src={designElement6.src} />
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="w-full md:w-1/2"></div>
              <div className="w-full md:w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl">
        <div className="py-3" />
        <div>
          <h4 className="font-quicksand text-slate-800 font-semibold">
            Typography Classifications
          </h4>
          <h6 className="font-quicksand text-slate-800 font-semibold">
            Serif, Sans Serif, and Slab Serif
          </h6>

          <ul className="text-[15px] font-medium text-slate-600">
            <li>
              <span className="font-semibold">Serif fonts:</span> have
              decorative “tails” or strokes at the ends of letters (e.g., Times
              New Roman), often used in formal or traditional designs.
            </li>
            <li>
              <span className="font-semibold">Sans serif fonts: </span>are clean
              and modern, with no added strokes (e.g., Helvetica).
            </li>
            <li>
              <span className="font-semibold">Slab Serif Fonts: </span> have
              thick, block-like serifs, adding a bold feel.
            </li>
          </ul>

          <h6 className="font-quicksand text-slate-800 font-semibold">
            Script, Display and Decorative
          </h6>

          <ul className="text-[15px] font-medium text-slate-600">
            <li>
              <span className="font-semibold">Script fonts:</span> have
              decorative “tails” or strokes at the ends of letters (e.g., Times
              New Roman), often used in formal or traditional designs.
            </li>
            <li>
              <span className="font-semibold">Decorative fonts: </span>are clean
              and modern, with no added strokes (e.g., Helvetica).
            </li>
          </ul>

          <div className="w-full">
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <div className="mx-auto w-full max-w-[400px]">
                <img src={typography3.src} />
              </div>
              <div className="mx-auto w-full max-w-[400px]">
                <img src={typography4.src} />
              </div>
            </div>
          </div>

          <h6 className="font-quicksand text-slate-800 font-semibold">
            Monospace and Modern Fonts
          </h6>

          <ul className="text-[15px] font-medium text-slate-600">
            <li>
              <span className="font-semibold">Monospace fonts:</span> have
              decorative “tails” or strokes at the ends of letters (e.g., Times
              New Roman), often used in formal or traditional designs.
            </li>
            <li>
              <span className="font-semibold">Modern fonts: </span>are clean and
              modern, with no added strokes (e.g., Helvetica).
            </li>
          </ul>

          <div className="w-full">
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <div className="mx-auto w-full max-w-[400px]">
                <img src={typography5.src} />
              </div>
            </div>
          </div>

          <h4 className="font-quicksand text-slate-800 font-semibold">
            Typography in UI/UX DesignFont Size and Scale{" "}
          </h4>

          <h6 className="font-quicksand text-slate-800 font-semibold">
            Enhancing Readability and User Experience{" "}
          </h6>
          <p className="py-2 font-medium text-slate-600">
            Clear typography helps users navigate content, enhancing both
            comprehension and engagement. Readability is especially crucial in
            UI/UX as it prevents user frustration and supports a seamless
            experience.
          </p>
          <h6 className="font-quicksand text-slate-800 font-semibold">
            Visual Hierarchy and Emphasis.
          </h6>
          <p className="py-2 font-medium text-slate-600">
            Typography creates a hierarchy by varying font size, weight, and
            color. Larger or bolder fonts signal important information, guiding
            users’ focus through a design.
          </p>
          <h6 className="font-quicksand text-slate-800 font-semibold">
            Accessibility Considerations.{" "}
          </h6>
          <p className="py-2 font-medium text-slate-600">
            Typography should consider users with visual impairments by ensuring
            good color contrast, readable font sizes, and spacing.
          </p>

          <div className="w-full">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="w-full md:w-1/2"></div>
              <div className="w-full md:w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl">
        <div className="py-3" />
        <div>
          <h4 className="font-quicksand text-slate-800 font-semibold">
            Best Practices in Typography
          </h4>
          <h6 className="font-quicksand text-slate-800 font-semibold">
            Consistency and Legibility
          </h6>
          <p className="py-2 font-medium text-slate-600">
            Consistency in font choice, color, and spacing creates a unified
            design. Legibility ensures that text is easy to read, regardless of
            screen size or resolution.
          </p>
          <h6 className="font-quicksand text-slate-800 font-semibold">
            Using White Space Effectively
          </h6>
          <p className="py-2 font-medium text-slate-600">
            White space, or negative space, around text and elements gives the
            design breathing room, preventing clutter and enhancing readability.
          </p>
          <h6 className="font-quicksand text-slate-800 font-semibold">
            Pairing Fonts and Creating Contrast
          </h6>
          <p className="py-2 font-medium text-slate-600">
            Combining two complementary fonts, such as a serif for headers and
            sans serif for body text, creates contrast and visual interest
            without overwhelming the design.
          </p>

          <div className="w-full">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="w-full md:w-1/2"></div>
              <div className="w-full md:w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl">
        <div className="py-3" />
        <div>
          <h4 className="font-quicksand text-slate-800 font-semibold">
            Common Mistakes in Typography
          </h4>
          <h6 className="font-quicksand text-slate-800 font-semibold">
            Overuse of Fonts
          </h6>
          <p className="py-2 font-medium text-slate-600">
            Using too many fonts can make designs appear chaotic. Limit font
            choices to one or two that work well together.
          </p>
          <h6 className="font-quicksand text-slate-800 font-semibold">
            Insufficient Line Spacing
          </h6>
          <p className="py-2 font-medium text-slate-600">
            Tight line spacing can reduce readability, making text feel dense.
            Generous spacing enhances comfort and flow, especially in
            paragraphs.
          </p>
          <h6 className="font-quicksand text-slate-800 font-semibold">
            Ignoring Mobile Responsiveness
          </h6>
          <p className="py-2 font-medium text-slate-600">
            Text that looks good on a desktop may not on mobile. Ensure
            typography is responsive and adjusts seamlessly for readability on
            smaller screens.
          </p>
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl">
        <p className="py-2 font-medium text-slate-600">
          Typography is a powerful element that shapes the way people experience
          design. From readability to branding, it influences perception and
          usability. By mastering typography’s fundamentals, using it
          consistently, and applying best practices, designers can elevate their
          work and create designs that resonate.
        </p>
      </div>
    </section>
  );
};

export default Typography;

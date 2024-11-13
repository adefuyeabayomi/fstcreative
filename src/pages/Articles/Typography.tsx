import React, { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

import typography1 from './images/typography-1.png'
import typography2 from './images/typography-2.png'
import typography3 from './images/typography-3.png'
import typography4 from './images/typography-4.png'
import typography5 from './images/typography-5.png'
import designElement6 from "./images/design-elements-6.png";

import "./style.css";

const Typography = (): React.JSX.Element => {
  useEffect(() => {
    // Scroll to top when the component mounts
    scroll.scrollToTop({
      duration: 1000, // duration of the scrolling animation in milliseconds
      smooth: "easeInOutQuart", // the type of easing
    });
  }, []);
  return (
    <section className="main-spacing-x">
      <div className="py-3" />
      <div className="article-title-backdrop py-4 p-3">
        <h2 className="font-family-quicksand text-medium">
          Mastering Typography: fonts, readability, and pairing.
        </h2>
        <div className="py-1" />
        <p className="white">
          <span>Date: 11th November, 2024</span>{" "}
          <span>Tags: Visual Design, Introduction, Design Elements</span>
        </p>
      </div>

      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            Introduction to Typography
          </h4>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            What is Typography?
          </h6>
          <p className="py-2 text-medium gray-4">
            Typography is the art of arranging text to make written language
            visually appealing and readable. It includes everything from font
            choice to line spacing, impacting how information is communicated.
          </p>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Importance of Typography in Design
          </h6>
          <p className="py-2 text-medium gray-4">
            Good typography enhances readability, emphasizes important
            information, and creates a distinct voice for a brand. In digital
            experiences, typography also affects user interaction and overall
            engagement
          </p>
          <div className="container-fluid no-space">
            <div className="row no-space g-3 align-items-center">
              <div className="no-space col-12 col-md-6"></div>
              <div className="no-space col-12 col-md-6"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            Elements of Typography
          </h4>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Fonts and Typefaces
          </h6>

          <ul className="text-p text-medium gray-4">
            <li>
              <span className="text-semibold">Typefaces:</span> are the design
              of the letterforms (e.g., Arial, Times New Roman).
            </li>
            <li>
              <span className="text-semibold">Fonts: </span> are variations
              within typefaces, such as bold or italic.
            </li>
          </ul>

          <div className="container-fluid no-space">
          <div className="row g-3 align-items-center justify-content-center">
            <div className="article-images-container">
              <img src={typography1} />
            </div>
            <div className="article-images-container">
              <img src={typography2} />
            </div>
          </div>
        </div>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Font Size and Scale{" "}
          </h6>
          <p className="py-2 text-medium gray-4">
            Appropriate font size and scale enhance readability, especially on
            digital platforms where screens vary in size.
          </p>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Leading, Kerning, and Tracking{" "}
          </h6>

          <ul className="text-p text-medium gray-4">
            <li>
              <span className="text-semibold">Leading:</span> is the space
              between lines of text.
            </li>
            <li>
              <span className="text-semibold">Kerning: </span> adjusts space
              between individual characters.
            </li>
            <li>
              <span className="text-semibold">Tracking: </span> manages spacing
              across groups of letters, improving readability and aesthetics
            </li>
          </ul>

          <div className="container-fluid no-space">
          <div className="row g-3 align-items-center justify-content-center">
            <div className="article-images-container">
              <img src={designElement6} />
            </div>
          </div>
        </div>
          <div className="container-fluid no-space">
            <div className="row no-space g-3 align-items-center">
              <div className="no-space col-12 col-md-6"></div>
              <div className="no-space col-12 col-md-6"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            Typography Classifications
          </h4>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Serif, Sans Serif, and Slab Serif
          </h6>

          <ul className="text-p text-medium gray-4">
            <li>
              <span className="text-semibold">Serif fonts:</span> have
              decorative “tails” or strokes at the ends of letters (e.g., Times
              New Roman), often used in formal or traditional designs.
            </li>
            <li>
              <span className="text-semibold">Sans serif fonts: </span>are clean
              and modern, with no added strokes (e.g., Helvetica).
            </li>
            <li>
              <span className="text-semibold">Slab Serif Fonts: </span> have
              thick, block-like serifs, adding a bold feel.
            </li>
          </ul>

          <h6 className="font-family-quicksand gray-2 text-semibold">
            Script, Display and Decorative
          </h6>

          <ul className="text-p text-medium gray-4">
            <li>
              <span className="text-semibold">Script fonts:</span> have
              decorative “tails” or strokes at the ends of letters (e.g., Times
              New Roman), often used in formal or traditional designs.
            </li>
            <li>
              <span className="text-semibold">Decorative fonts: </span>are clean
              and modern, with no added strokes (e.g., Helvetica).
            </li>
          </ul>
          
          <div className="container-fluid no-space">
          <div className="row g-3 align-items-center justify-content-center">
            <div className="article-images-container">
              <img src={typography3} />
            </div>
            <div className="article-images-container">
              <img src={typography4} />
            </div>
          </div>
        </div>

          <h6 className="font-family-quicksand gray-2 text-semibold">
            Monospace and Modern Fonts
          </h6>

          <ul className="text-p text-medium gray-4">
            <li>
              <span className="text-semibold">Monospace fonts:</span> have
              decorative “tails” or strokes at the ends of letters (e.g., Times
              New Roman), often used in formal or traditional designs.
            </li>
            <li>
              <span className="text-semibold">Modern fonts: </span>are clean and
              modern, with no added strokes (e.g., Helvetica).
            </li>
          </ul>
          
          <div className="container-fluid no-space">
          <div className="row g-3 align-items-center justify-content-center">
            <div className="article-images-container">
              <img src={typography5} />
            </div>
          </div>
        </div>

          <h4 className="font-family-quicksand gray-2 text-semibold">
            Typography in UI/UX DesignFont Size and Scale{" "}
          </h4>

          <h6 className="font-family-quicksand gray-2 text-semibold">
            Enhancing Readability and User Experience{" "}
          </h6>
          <p className="py-2 text-medium gray-4">
            Clear typography helps users navigate content, enhancing both
            comprehension and engagement. Readability is especially crucial in
            UI/UX as it prevents user frustration and supports a seamless
            experience.
          </p>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Visual Hierarchy and Emphasis.
          </h6>
          <p className="py-2 text-medium gray-4">
            Typography creates a hierarchy by varying font size, weight, and
            color. Larger or bolder fonts signal important information, guiding
            users’ focus through a design.
          </p>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Accessibility Considerations.{" "}
          </h6>
          <p className="py-2 text-medium gray-4">
            Typography should consider users with visual impairments by ensuring
            good color contrast, readable font sizes, and spacing.
          </p>

          <div className="container-fluid no-space">
            <div className="row no-space g-3 align-items-center">
              <div className="no-space col-12 col-md-6"></div>
              <div className="no-space col-12 col-md-6"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            Best Practices in Typography
          </h4>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Consistency and Legibility
          </h6>
          <p className="py-2 text-medium gray-4">
            Consistency in font choice, color, and spacing creates a unified
            design. Legibility ensures that text is easy to read, regardless of
            screen size or resolution.
          </p>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Using White Space Effectively
          </h6>
          <p className="py-2 text-medium gray-4">
            White space, or negative space, around text and elements gives the
            design breathing room, preventing clutter and enhancing readability.
          </p>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Pairing Fonts and Creating Contrast
          </h6>
          <p className="py-2 text-medium gray-4">
            Combining two complementary fonts, such as a serif for headers and
            sans serif for body text, creates contrast and visual interest
            without overwhelming the design.
          </p>

          <div className="container-fluid no-space">
            <div className="row no-space g-3 align-items-center">
              <div className="no-space col-12 col-md-6"></div>
              <div className="no-space col-12 col-md-6"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            Common Mistakes in Typography
          </h4>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Overuse of Fonts
          </h6>
          <p className="py-2 text-medium gray-4">
            Using too many fonts can make designs appear chaotic. Limit font
            choices to one or two that work well together.
          </p>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Insufficient Line Spacing
          </h6>
          <p className="py-2 text-medium gray-4">
            Tight line spacing can reduce readability, making text feel dense.
            Generous spacing enhances comfort and flow, especially in
            paragraphs.
          </p>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Ignoring Mobile Responsiveness
          </h6>
          <p className="py-2 text-medium gray-4">
            Text that looks good on a desktop may not on mobile. Ensure
            typography is responsive and adjusts seamlessly for readability on
            smaller screens.
          </p>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <p className="py-2 text-medium gray-4">
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

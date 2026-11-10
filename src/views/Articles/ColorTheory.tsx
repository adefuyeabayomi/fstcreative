"use client";

import React, { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import colorTheoryBanner from "./images/color-theory-banner.png";
import colorTheory1 from "./images/color-theory-1.png";
import colorTheory2 from "./images/color-theory-2.png";
import colorTheory3 from "./images/color-theory-3.png";
import colorTheory4 from "./images/color-theory-4.png";
import colorTheory5 from "./images/color-theory-5.png";
import colorTheory6 from "./images/color-theory-6.png";
import colorTheory7 from "./images/color-theory-7.png";
import colorTheory8 from "./images/color-theory-8.png";
import colorTheory9 from "./images/color-theory-9.png";
import colorTheory10 from "./images/color-theory-10.png";
import colorTheory11 from "./images/color-theory-11.png";
import colorTheory12 from "./images/color-theory-12.png";
import colorTheory13 from "./images/color-theory-13.png";
import colorTheory14 from "./images/color-theory-14.png";
import { useDash } from "../../contexts/DashContext";

const ColorTheory = (): React.JSX.Element => {
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
            Color Theory
          </h4>
          <p className="py-2 font-medium text-slate-600">
            Color theory is the study of how colors work together and how they
            affect our emotions and perceptions. It's like a toolbox for
            artists, designers, and creators to help them choose the right
            colors for their projects.{" "}
          </p>
          <p className="py-2 font-medium text-slate-600">
            Color theory enables you to pick colors that go well together and
            convey the right mood or message in your work. There are some ideas
            that are worth looking at when working with colors.
          </p>
        </div>

        <div className="mx-auto w-full max-w-[900px] [&_img]:w-full [&_img]:rounded-2xl">
          <img className="w-full rounded-2xl" src={colorTheoryBanner.src} />
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl">
        <div className="py-3" />
        <div>
          <h4 className="font-quicksand text-slate-800 font-semibold">
            Hue, Saturation and Value
          </h4>
          <p className="py-2 font-medium text-slate-600">
            Hue refers to the base color itself, like red, blue, yellow, green,
            etc. It is the property that makes it possible to tell one color
            from the other. It’s what people commonly refer to when they talk
            about color.
          </p>

          <div className="w-full">
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <div className="mx-auto w-full max-w-[400px]">
                <img src={colorTheory1.src} />
              </div>
            </div>
          </div>
          <p className="py-2 font-medium text-slate-600">
            Saturation refers to the intensity or purity of a color. Highly
            saturated colors are bold and vibrant, while low saturation makes
            colors look muted or more gray.
          </p>

          <div className="w-full">
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <div className="mx-auto w-full max-w-[400px]">
                <img src={colorTheory2.src} />
              </div>
              <div className="mx-auto w-full max-w-[400px]">
                <img src={colorTheory3.src} />
              </div>
            </div>
          </div>
          <p className="py-2 font-medium text-slate-600">
            Value refers to how light or dark a color is. High value means the
            color is closer to white (lighter), while low value means the color
            is closer to black (darker).
          </p>

          <div className="w-full">
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <div className="mx-auto w-full max-w-[400px]">
                <img src={colorTheory4.src} />
              </div>
              <div className="mx-auto w-full max-w-[400px]">
                <img src={colorTheory5.src} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl">
        <div className="py-3" />
        <div>
          <h4 className="font-quicksand text-slate-800 font-semibold">
            The Color Wheel
          </h4>
          <p className="py-2 font-medium text-slate-600">
            The Color Wheel is a circular diagram that organizes colors in a way
            that shows relationships between them. It's a fundamental tool in
            design and art, helping designers understand how different colors
            interact and work together
          </p>
          <p className="py-2 font-medium text-slate-600">
            It typically consists of 12 main colors: primary, secondary, and
            tertiary colors
          </p>

          <h6 className="font-quicksand text-slate-800 font-medium">
            Primary Colors:
          </h6>
          <p className="py-2 font-medium text-slate-600">
            These are the base colors that can’t be created by mixing other
            colors. They are red, blue, and yellow.
          </p>

          <h6 className="font-quicksand text-slate-800 font-medium">
            Secondary Colors
          </h6>
          <p className="py-2 font-medium text-slate-600">
            These colors are created by mixing two primary colors. They are
            orange (red + yellow), green (blue + yellow), and purple (red +
            blue).
          </p>

          <h6 className="font-quicksand text-slate-800 font-medium">
            Tertiary Colors
          </h6>
          <p className="py-2 font-medium text-slate-600">
            These are colors made by mixing a primary color with a neighboring
            secondary color.
            <ul>
              <li>Red-Orange: #FF4500</li>
              <li>Yellow-Orange: #FFD700</li>
              <li>Yellow-Green: #9ACD32</li>
              <li>Blue-Green: #00CED1</li>
              <li>Blue-Purple: #8A2BE2</li>
              <li>Red-Purple: #C71585 </li>
            </ul>
          </p>
        </div>

        <div className="w-full">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <div className="mx-auto w-full max-w-[400px]">
              <img src={colorTheory6.src} />
            </div>
            <div className="mx-auto w-full max-w-[400px]">
              <img src={colorTheory7.src} />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl">
        <div className="py-3" />
        <div>
          <h4 className="font-quicksand text-slate-800 font-semibold">
            Color Relationships on the Wheel - The Color Schemes and Harmonies
          </h4>
          <p className="py-2 font-medium text-slate-600">
            A color scheme is a group of colors used together. An artist or
            designer chooses these colors according to principles of color
            theory
          </p>
          <h6 className="font-quicksand text-slate-800 font-medium">
            Complementary Colors
          </h6>
          <p className="py-2 font-medium text-slate-600">
            Colors that are opposite each other on the color wheel. They create
            high contrast and make each other stand out.
          </p>
          <h6 className="font-quicksand text-slate-800 font-medium">
            Analogous Colors
          </h6>
          <p className="py-2 font-medium text-slate-600">
            These are colors that sit next to each other on the color wheel.
            They usually work well together and create harmonious designs.
          </p>

          <div className="w-full">
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <div className="mx-auto w-full max-w-[400px]">
                <img src={colorTheory8.src} />
              </div>
              <div className="mx-auto w-full max-w-[400px]">
                <img src={colorTheory9.src} />
              </div>
            </div>
          </div>
          <h6 className="font-quicksand text-slate-800 font-medium">
            Triadic Colors
          </h6>
          <p className="py-2 font-medium text-slate-600">
            These are colors evenly spaced around the wheel, forming a triangle.
            They tend to be vibrant, even if you use pale or muted versions.
          </p>
          <h6 className="font-quicksand text-slate-800 font-medium">
            Split-Complementary Colors:
          </h6>
          <p className="py-2 font-medium text-slate-600">
            This scheme uses one base color and the two colors adjacent to its
            complementary color. It offers contrast but is more subtle than
            complementary schemes.
          </p>

          <div className="w-full">
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <div className="mx-auto w-full max-w-[400px]">
                <img src={colorTheory10.src} />
              </div>
              <div className="mx-auto w-full max-w-[400px]">
                <img src={colorTheory11.src} />
              </div>
            </div>
          </div>
          <h6 className="font-quicksand text-slate-800 font-medium">
            Monochromatic Colors
          </h6>
          <p className="py-2 font-medium text-slate-600">
            This harmony uses different shades, tints, and tones of a single
            hue. It’s a subtle and cohesive way to create depth and visual
            interest.
          </p>
          <h6 className="font-quicksand text-slate-800 font-medium">
            Tetradic (Double-Complementary) Colors
          </h6>
          <p className="py-2 font-medium text-slate-600">
            This harmony uses four colors that form two complementary pairs. It
            provides a wide variety of colors but can be tricky to balance.
          </p>

          <div className="w-full">
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <div className="mx-auto w-full max-w-[400px]">
                <img src={colorTheory12.src} />
              </div>
              <div className="mx-auto w-full max-w-[400px]">
                <img src={colorTheory14.src} />
              </div>
            </div>
          </div>
          <h6 className="font-quicksand text-slate-800 font-medium">
            Square Color Scheme
          </h6>
          <p className="py-2 font-medium text-slate-600">
            This scheme uses four colors evenly spaced around the color wheel,
            forming a square. It’s similar to the tetradic scheme but offers
            more balance.
          </p>
          <div className="w-full">
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <div className="mx-auto w-full max-w-[400px]">
                <img src={colorTheory13.src} />
              </div>
            </div>
          </div>
          <h6 className="font-quicksand text-slate-800 font-medium"></h6>
          <p className="py-2 font-medium text-slate-600"></p>
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl">
        <div className="py-3" />
        <div>
          <h4 className="font-quicksand text-slate-800 font-semibold">
            Color Harmony
          </h4>
          <p className="py-2 font-medium text-slate-600">
            Color harmony in design refers to the balanced and aesthetically
            pleasing interaction of colors. Designers use color harmony to
            influence user experiences, create brand identity, and enhance
            accessibility. Color harmony is not only about attractive colors but
            their impact on the overall design.
          </p>
          <div className="py-2" />
          <h6 className="font-quicksand text-slate-800 font-medium">
            How to Apply Color Harmony in Design
          </h6>

          <ul className="text-[15px] font-medium text-slate-600">
            <li>
              <div>
                <span className="font-semibold">Choose the right harmony:</span>{" "}
                Depending on the type of design you’re working on, different
                color harmonies serve different purposes. For example:
                <ul className="text-[15px] font-medium text-slate-600">
                  <li>
                    <span className="font-semibold">Complementary:</span>Use for
                    bold, high-impact designs (e.g., sale ads).
                  </li>
                  <li>
                    <span className="font-semibold">Analogous: </span>Use for
                    calm, cohesive designs (e.g., nature-themed projects).
                  </li>
                  <li>
                    <span className="font-semibold">Monochromatic:</span>Use for
                    minimalistic, professional designs (e.g., tech products).
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <span className="font-semibold">Experiment with balance:</span>{" "}
              While color harmony creates balance, it’s important to decide
              which colors will dominate and which will be accents. Too much
              color can overwhelm the design, while too little can make it feel
              flat.
            </li>
            <li>
              <span className="font-semibold">
                Consider the emotional response:
              </span>
              Color schemes evoke different emotions, so choosing the right
              harmony can help convey your message effectively. For example,
              analogous color schemes often feel more peaceful, while
              complementary schemes can feel more energetic.
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl">
        <div className="py-3" />
        <div>
          <h4 className="font-quicksand text-slate-800 font-semibold">
            Color Psychology
          </h4>
          <p className="py-2 font-medium text-slate-600">
            Color Psychology is the study of how different colors affect human
            emotions and behavior. Colors can influence perceptions, evoke
            feelings, and even drive actions.
          </p>
          <p className="py-2 font-medium text-slate-600">
            Here’s a simple overview of the emotions commonly associated with
            different colors:
          </p>

          <ul className="text-[15px] font-medium text-slate-600">
            <li>
              <span className="font-semibold">Red:</span> Passion, excitement,
              urgency, and energy. Often used in sales or to grab attention.
            </li>
            <li>
              <span className="font-semibold">Blue: </span>Trust, calm,
              professionalism, and security. Common in tech and corporate
              branding.
            </li>
            <li>
              <span className="font-semibold">Yellow: </span>Happiness,
              optimism, and warmth, but can also signal caution. Used to create
              a cheerful or eye-catching effect.
            </li>
            <li>
              <span className="font-semibold">Green: </span>Nature, health,
              growth, and tranquility. Popular in environmental and wellness
              industries.
            </li>
            <li>
              <span className="font-semibold">Orange: </span>Creativity,
              enthusiasm, and friendliness. Often used to suggest fun and
              adventure.
            </li>
            <li>
              <span className="font-semibold">Purple: </span>Luxury, creativity,
              and mystery. Associated with elegance and sophistication
            </li>
            <li>
              <span className="font-semibold">Black: </span>Power,
              sophistication, and elegance. Frequently used in luxury brands.
            </li>
            <li>
              <span className="font-semibold">White: </span>Purity, cleanliness,
              and simplicity. Common in minimalist designs and healthcare.
            </li>
            <li>
              <span className="font-semibold">Pink: </span>Femininity,
              compassion, and youthfulness. Often used in products aimed at
              younger audiences.
            </li>
            <li>
              <span className="font-semibold">Gray: </span>Neutrality, balance,
              and calm. Common in professional or modern designs.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ColorTheory;

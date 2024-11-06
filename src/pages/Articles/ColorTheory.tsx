import React, { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import "./style.css";
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

const ColorTheory = (): React.JSX.Element => {
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
          Color Theory: Introduction to color schemes, harmony, and psychology.
        </h2>
        <div className="py-1" />
        <p className="white">
          <span>Date: 25 October, 2024</span>{" "}
          <span>Tags: Visual Design, Introduction, Color Theory</span>
        </p>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            Color Theory
          </h4>
          <p className="py-2 text-medium gray-4">
            Color theory is the study of how colors work together and how they
            affect our emotions and perceptions. It's like a toolbox for
            artists, designers, and creators to help them choose the right
            colors for their projects.{" "}
          </p>
          <p className="py-2 text-medium gray-4">
            Color theory enables you to pick colors that go well together and
            convey the right mood or message in your work. There are some ideas
            that are worth looking at when working with colors.
          </p>
        </div>

        <div className="banner-images-container">
          <img className="color-theory-banner" src={colorTheoryBanner} />
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            Hue, Saturation and Value
          </h4>
          <p className="py-2 text-medium gray-4">
            Hue refers to the base color itself, like red, blue, yellow, green,
            etc. It is the property that makes it possible to tell one color
            from the other. It’s what people commonly refer to when they talk
            about color.
          </p>

          <div className="container-fluid no-space">
            <div className="row g-3 align-items-center justify-content-center">
              <div className="article-images-container">
                <img src={colorTheory1} />
              </div>
            </div>
          </div>
          <p className="py-2 text-medium gray-4">
            Saturation refers to the intensity or purity of a color. Highly
            saturated colors are bold and vibrant, while low saturation makes
            colors look muted or more gray.
          </p>

          <div className="container-fluid no-space">
            <div className="row g-3 align-items-center justify-content-center">
              <div className="article-images-container">
                <img src={colorTheory2} />
              </div>
              <div className="article-images-container">
                <img src={colorTheory3} />
              </div>
            </div>
          </div>
          <p className="py-2 text-medium gray-4">
            Value refers to how light or dark a color is. High value means the
            color is closer to white (lighter), while low value means the color
            is closer to black (darker).
          </p>

          <div className="container-fluid no-space">
            <div className="row g-3 align-items-center justify-content-center">
              <div className="article-images-container">
                <img src={colorTheory4} />
              </div>
              <div className="article-images-container">
                <img src={colorTheory5} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            The Color Wheel
          </h4>
          <p className="py-2 text-medium gray-4">
            The Color Wheel is a circular diagram that organizes colors in a way
            that shows relationships between them. It's a fundamental tool in
            design and art, helping designers understand how different colors
            interact and work together
          </p>
          <p className="py-2 text-medium gray-4">
            It typically consists of 12 main colors: primary, secondary, and
            tertiary colors
          </p>

          <h6 className="font-family-quicksand gray-2 text-medium">
            Primary Colors:
          </h6>
          <p className="py-2 text-medium gray-4">
            These are the base colors that can’t be created by mixing other
            colors. They are red, blue, and yellow.
          </p>

          <h6 className="font-family-quicksand gray-2 text-medium">
            Secondary Colors
          </h6>
          <p className="py-2 text-medium gray-4">
            These colors are created by mixing two primary colors. They are
            orange (red + yellow), green (blue + yellow), and purple (red +
            blue).
          </p>

          <h6 className="font-family-quicksand gray-2 text-medium">
            Tertiary Colors
          </h6>
          <p className="py-2 text-medium gray-4">
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

        <div className="container-fluid no-space">
          <div className="row g-3 align-items-center justify-content-center">
            <div className="article-images-container">
              <img src={colorTheory6} />
            </div>
            <div className="article-images-container">
              <img src={colorTheory7} />
            </div>
          </div>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            Color Relationships on the Wheel - The Color Schemes and Harmonies
          </h4>
          <p className="py-2 text-medium gray-4">
            A color scheme is a group of colors used together. An artist or
            designer chooses these colors according to principles of color
            theory
          </p>
          <h6 className="font-family-quicksand gray-2 text-medium">
            Complementary Colors
          </h6>
          <p className="py-2 text-medium gray-4">
            Colors that are opposite each other on the color wheel. They create
            high contrast and make each other stand out.
          </p>
          <h6 className="font-family-quicksand gray-2 text-medium">
            Analogous Colors
          </h6>
          <p className="py-2 text-medium gray-4">
            These are colors that sit next to each other on the color wheel.
            They usually work well together and create harmonious designs.
          </p>

          <div className="container-fluid no-space">
            <div className="row g-3 align-items-center justify-content-center">
              <div className="article-images-container">
                <img src={colorTheory8} />
              </div>
              <div className="article-images-container">
                <img src={colorTheory9} />
              </div>
            </div>
          </div>
          <h6 className="font-family-quicksand gray-2 text-medium">
            Triadic Colors
          </h6>
          <p className="py-2 text-medium gray-4">
            These are colors evenly spaced around the wheel, forming a triangle.
            They tend to be vibrant, even if you use pale or muted versions.
          </p>
          <h6 className="font-family-quicksand gray-2 text-medium">
            Split-Complementary Colors:
          </h6>
          <p className="py-2 text-medium gray-4">
            This scheme uses one base color and the two colors adjacent to its
            complementary color. It offers contrast but is more subtle than
            complementary schemes.
          </p>

          <div className="container-fluid no-space">
            <div className="row g-3 align-items-center justify-content-center">
              <div className="article-images-container">
                <img src={colorTheory10} />
              </div>
              <div className="article-images-container">
                <img src={colorTheory11} />
              </div>
            </div>
          </div>
          <h6 className="font-family-quicksand gray-2 text-medium">
            Monochromatic Colors
          </h6>
          <p className="py-2 text-medium gray-4">
            This harmony uses different shades, tints, and tones of a single
            hue. It’s a subtle and cohesive way to create depth and visual
            interest.
          </p>
          <h6 className="font-family-quicksand gray-2 text-medium">
            Tetradic (Double-Complementary) Colors
          </h6>
          <p className="py-2 text-medium gray-4">
            This harmony uses four colors that form two complementary pairs. It
            provides a wide variety of colors but can be tricky to balance.
          </p>

          <div className="container-fluid no-space">
            <div className="row g-3 align-items-center justify-content-center">
              <div className="article-images-container">
                <img src={colorTheory12} />
              </div>
              <div className="article-images-container">
                <img src={colorTheory14} />
              </div>
            </div>
          </div>
          <h6 className="font-family-quicksand gray-2 text-medium">
            Square Color Scheme
          </h6>
          <p className="py-2 text-medium gray-4">
            This scheme uses four colors evenly spaced around the color wheel,
            forming a square. It’s similar to the tetradic scheme but offers
            more balance.
          </p>
          <div className="container-fluid no-space">
            <div className="row g-3 align-items-center justify-content-center">
              <div className="article-images-container">
                <img src={colorTheory13} />
              </div>
            </div>
          </div>
          <h6 className="font-family-quicksand gray-2 text-medium"></h6>
          <p className="py-2 text-medium gray-4"></p>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            Color Harmony
          </h4>
          <p className="py-2 text-medium gray-4">
            Color harmony in design refers to the balanced and aesthetically
            pleasing interaction of colors. Designers use color harmony to
            influence user experiences, create brand identity, and enhance
            accessibility. Color harmony is not only about attractive colors but
            their impact on the overall design.
          </p>
          <div className="py-2" />
          <h6 className="font-family-quicksand gray-2 text-medium">
            How to Apply Color Harmony in Design
          </h6>

          <ul className="text-p text-medium gray-4">
            <li>
              <div>
                <span className="text-semibold">Choose the right harmony:</span>{" "}
                Depending on the type of design you’re working on, different
                color harmonies serve different purposes. For example:
                <ul className="text-p text-medium gray-4">
                  <li>
                    <span className="text-semibold">Complementary:</span>Use for
                    bold, high-impact designs (e.g., sale ads).
                  </li>
                  <li>
                    <span className="text-semibold">Analogous: </span>Use for
                    calm, cohesive designs (e.g., nature-themed projects).
                  </li>
                  <li>
                    <span className="text-semibold">Monochromatic:</span>Use for
                    minimalistic, professional designs (e.g., tech products).
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <span className="text-semibold">Experiment with balance:</span>{" "}
              While color harmony creates balance, it’s important to decide
              which colors will dominate and which will be accents. Too much
              color can overwhelm the design, while too little can make it feel
              flat.
            </li>
            <li>
              <span className="text-semibold">
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
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            Color Psychology
          </h4>
          <p className="py-2 text-medium gray-4">
            Color Psychology is the study of how different colors affect human
            emotions and behavior. Colors can influence perceptions, evoke
            feelings, and even drive actions.
          </p>
          <p className="py-2 text-medium gray-4">
            Here’s a simple overview of the emotions commonly associated with
            different colors:
          </p>

          <ul className="text-p text-medium gray-4">
            <li>
              <span className="text-semibold">Red:</span> Passion, excitement,
              urgency, and energy. Often used in sales or to grab attention.
            </li>
            <li>
              <span className="text-semibold">Blue: </span>Trust, calm,
              professionalism, and security. Common in tech and corporate
              branding.
            </li>
            <li>
              <span className="text-semibold">Yellow: </span>Happiness,
              optimism, and warmth, but can also signal caution. Used to create
              a cheerful or eye-catching effect.
            </li>
            <li>
              <span className="text-semibold">Green: </span>Nature, health,
              growth, and tranquility. Popular in environmental and wellness
              industries.
            </li>
            <li>
              <span className="text-semibold">Orange: </span>Creativity,
              enthusiasm, and friendliness. Often used to suggest fun and
              adventure.
            </li>
            <li>
              <span className="text-semibold">Purple: </span>Luxury, creativity,
              and mystery. Associated with elegance and sophistication
            </li>
            <li>
              <span className="text-semibold">Black: </span>Power,
              sophistication, and elegance. Frequently used in luxury brands.
            </li>
            <li>
              <span className="text-semibold">White: </span>Purity, cleanliness,
              and simplicity. Common in minimalist designs and healthcare.
            </li>
            <li>
              <span className="text-semibold">Pink: </span>Femininity,
              compassion, and youthfulness. Often used in products aimed at
              younger audiences.
            </li>
            <li>
              <span className="text-semibold">Gray: </span>Neutrality, balance,
              and calm. Common in professional or modern designs.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ColorTheory;

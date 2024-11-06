import { useEffect } from "react";
import "./style.css";
import designElement1 from "./images/design-elements-1.png";
import designElement2 from "./images/design-elements-2.png";
import designElement3 from "./images/design-elements-3.png";
import designElement4 from "./images/design-elements-4.png";
import designElement5 from "./images/design-elements-5.png";
import designElement6 from "./images/design-elements-6.png";
import designElement7 from "./images/design-elements-7.png";
import designElement8 from "./images/design-elements-8.png";
import designElement9 from "./images/design-elements-9.png";
import designElement10 from "./images/design-elements-10.png";
import { animateScroll as scroll } from "react-scroll";

const DesignElements = () => {
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
          Introduction to Visual Design (I) - Design Elements
        </h2>
        <div className="py-1" />
        <p className="white">
          <span>Date: 6 October, 2024</span>{" "}
          <span>Tags: Visual Design, Introduction, Design Elements</span>
        </p>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            What is design?
          </h4>
          <p className="py-2 text-medium gray-4">
            The term design is used in many contexts. From architecture and
            structural design, to fashion, to information technology,
            infographics, presentation, branding and strategy, Product,
            Advertising, Layout design.
            <br />
            Some things can be picked out as common to all these areas listed.
            Design is created for a purpose. Every design is made to fulfill a
            goal. Architectural designs would one day be a majestic building,
            presentations would serve the purpose of enlightenment, product
            designs serve to showcase new products to end users. Every design
            serves a purpose. Another thing all designs have in common is that
            they all start from the imagination. Designs are first ideas, then
            rough sketches, then they undergo several more process of refinement
            before being ready to be presented as finished work.
          </p>
          <p className="py-2 text-medium gray-4">
            All design however have building block. This building blocks are the
            components that are put together to build the design. Each component
            individually may not be much on their own. But together, they create
            complex and aesthetically pleasing visual compositions. These
            components are called the design element.
          </p>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            What are design elements?
          </h4>
          <p className="py-2 text-medium gray-4">
            Visual Design elements are the building block of every visual design
            composition. These element come together to create all designs we
            see, from simple text compositions, to eye catching graphics
            designs. So what are these design elements? Let's dive in an get
            started.
          </p>
          <p className="py-2 text-medium gray-4">
            Visual design elements includes:
          </p>
          <ul className="text-p text-medium gray-4">
            <li>Line</li>
            <li>Shape</li>
            <li>Form</li>
            <li>Typography</li>
            <li>Color</li>
            <li>Texture</li>
            <li>Space</li>
          </ul>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">Line</h4>
          <p className="py-2 text-medium gray-4">
            A line is a connection between two points. Line are essential in
            designing. They serve many purpose and can be used to create a wide
            variety of different designs. Lines can be used to create boundary
            in design, sometimes you need to separate contents, thus the need
            for line boundaries. Lines can also be used to guide viewers eyes, a
            very common usecase of this is the tree diagram illustrations where
            lines guide the user on how information are related. Lines can
            possess different qualities. Lines can be thin, thick, wavy, dashed,
            zigzag. Lines can be combined in the most spectacular ways to create
            amazing compositions. Examples of prominent use of lines in design
            includes line art, 2d illustrations, icons etc.{" "}
          </p>

          <div className="container-fluid no-space">
            <div className="row g-3 align-items-center justify-content-center">
              <div className="article-images-container">
                <img src={designElement1} />
              </div>
              <div className="article-images-container">
                <img src={designElement2} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">Shape</h4>
          <p className="py-2 text-medium gray-4">
            A shape is formed when a line is enclosed. Some common shapes are
            circles, rectangles, triangles. An infinite number of shapes can be
            formed by combining other shapes, tweaking the boundaries of the
            shapes in creative ways. Shapes can be used in creative ways to
            bring a design to life.
          </p>

          <div className="container-fluid no-space">
            <div className="row g-3 align-items-center justify-content-center">
              <div className="article-images-container">
                <img src={designElement3} />
              </div>
              <div className="article-images-container">
                <img src={designElement4} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            Typography
          </h4>
          <p className="py-2 text-medium gray-4">
            Typography in design refers to working with text, arranging text to
            meet the goals of readability, legibility, and even aesthetics and
            visual appeal. It involves the use of fonts, and varying styles of
            fonts to evoke a mood. In short, typography brings text to life. In
            order to make your typography work, you need to know the elements of
            typography. These elements are key in creating type that are both
            easy to read and replicate across different media but also pleasing
            to the eyes.
          </p>
          <p className="py-2 text-medium gray-4">
            The elements of typography are :
          </p>
          <ul className="text-p text-medium gray-4">
            <li>Fonts and Typefaces</li>
            <li>Leading, Kerning and Tracking</li>
            <li>Hierarchy</li>
            <li>Consistency</li>
            <li>Alignment</li>
          </ul>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Fonts And Typeface
          </h6>
          <p className="py-2 text-medium gray-4">
            Font is a single typeface. A typeface is a collection of related
            fonts. I you used Cambria, font size - 12, style - normal. That
            would be a font. But a collection of different weights, and style of
            Cambria is a Typeface.
            <br />
            Some properties of fonts are:
            <br />
            <span className="text-semibold">Weight:</span> Thin, Regular, Semi
            Bold, Bold, Extra Bold
            <br />
            <span className="text-semibold">Style:</span> Italic, Normal,
            Oblique
            <br />
            <span className="text-semibold">Size:</span> Font Size is
            conventionally measured in pixels(px). By default paragraph fonts
            are usually 12px, Subtitle - 18px, Titles - 48px. You can set fonts
            to any size depending on the need at hand.
            <br />
            When creating a design, it is best to stick to as little fonts as
            possible, at most three. If you feel the need to create variation in
            the fonts you use, try altering the font properties, to create that
            variation. You could combine bold and regular fonts creatively to
            create contrast, call attention to important object, change color,
            etc
          </p>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Leading, Kerning and Tracking
          </h6>
          <p className="py-2 text-medium gray-4">
            <span className="text-semibold">Kerning:</span> The adjustment of
            space between individual characters.
            <br />
            <span className="text-semibold">Leading:</span> The vertical spacing
            between lines of text.
            <br />
            <span className="text-semibold">Letterspacing (Tracking):</span> The
            uniform adjustment of space across a range of characters in a block
            of text.
          </p>
        </div>

        <div className="container-fluid no-space">
          <div className="row g-3 align-items-center justify-content-center">
            <div className="article-images-container">
              <img src={designElement5} />
            </div>
            <div className="article-images-container">
              <img src={designElement6} />
            </div>
          </div>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Hierarchy
          </h6>
          <p className="py-2 text-medium gray-4">
            Using different font sizes, weights, or styles to establish a sense
            of importance in the text.
          </p>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Consistency
          </h6>
          <p className="py-2 text-medium gray-4">
            Consistency in typography refers to maintaining uniformity in font
            choices, sizes, line heights, and spacing throughout a design. It
            ensures that the design feels cohesive, improves readability, and
            creates a clear visual hierarchy, making it easier for users to
            navigate content.
          </p>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Alignment
          </h6>
          <p className="py-2 text-medium gray-4">
            Alignment: How text is aligned on a page (left, right, center, or
            justified).
          </p>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">Color</h4>
          <p className="py-2 text-medium gray-4">
            Color also known as hue is a quality observed on object surfaces.
            Colors can be combined in very interesting ways to create unique and
            eye catching designs. There are different topics to understand when
            dealing with color:
          </p>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Primary (Brand), Secondary, Accent Colors
          </h6>
          <p className="py-2 text-medium gray-4">
            <span className="text-semibold">Primary (Brand) Color: </span> This
            is the main color used to represent your brand. It’s the most
            dominant color in your design and is often used in logos, website
            headers, and major elements. The primary color helps create a strong
            brand identity and is the color most associated with your business.
          </p>
          <p className="py-2 text-medium gray-4">
            <span className="text-semibold">Secondary Color: </span>The
            secondary complements the primary color. It’s used to highlight key
            elements, such as buttons, links, or calls to action. Secondary
            colors provide contrast and help guide users’ attention to specific
            areas without overpowering the primary color.
          </p>
          <p className="py-2 text-medium gray-4">
            <span className="text-semibold">Accent Color: </span>Accent colors
            add additional depth and variety to a design. These are often used
            sparingly and can help break up large areas of content or create
            visual interest without distracting from the brand's primary or
            secondary colors. These colors are often neutral or subtle to
            maintain balance.
          </p>
        </div>

        <div className="row g-3 align-items-center justify-content-center">
          <div className="article-images-container">
            <img src={designElement7} />
          </div>
          <div className="article-images-container">
            <img src={designElement8} />
          </div>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Shades, Tints and Tones
          </h6>
          <p className="py-2 text-medium gray-4">
            <span className="text-semibold">Shades: </span> A shade is created
            by adding black to a color, making it darker. This is often used for
            more dramatic or subdued effects.
            <br />
            <span className="text-semibold">Tints: </span>A tint is created by
            adding white to a color, making it lighter. This is common in
            creating softer, pastel tones.
            <br />
            <span className="text-semibold">Tones: </span>A tone is created by
            adding gray (a mixture of black and white) to a color. Tones help
            create more muted, sophisticated colors that can be used for subtle
            design work.
          </p>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Color Palette
          </h6>
          <p className="py-2 text-medium gray-4">
            A color palette is a collection of colors chosen for a design or
            brand. It typically includes primary, secondary, and accent colors,
            ensuring visual harmony. Palettes are essential for maintaining
            consistency in branding and design, providing a range of shades,
            tints, and tones for diverse use cases. A well-curated palette can
            help establish mood and communicate the desired message effectively.
          </p>
        </div>

        <div className="row g-3 align-items-center justify-content-center">
          <div className="article-images-container">
            <img src={designElement9} />
          </div>
          <div className="article-images-container">
            <img src={designElement10} />
          </div>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Color Theory
          </h6>
          <p className="py-2 text-medium gray-4">
            Color theory involves understanding the relationships between colors
            and how they interact. It covers concepts like the color wheel,
            complementary colors, analogous colors, and color harmony. This
            knowledge helps in making informed choices for creating
            aesthetically pleasing designs.
            <br />
            {/*
            For a deeper dive into color theory, you can refer to this [external
            resource].
                */}
          </p>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">Form</h4>
          <p className="py-2 text-medium gray-4">
            Form in design refers to creating a sense of realism by using
            three-dimensional objects. It allows flat, 2D designs to appear more
            lifelike and tangible. <br /> Realism can be achieved through
            several techniques:
          </p>
          <ul className="text-p text-medium gray-4">
            <li>
              <span className="text-semibold">Lighting: </span>Simulating light
              sources to add highlights and shadows.
            </li>
            <li>
              <span className="text-semibold">Shadows: </span>Creating depth and
              grounding objects by adding shadows.
            </li>
            <li>
              <span className="text-semibold">Depth: </span>Using layering,
              gradients, and overlap to give the illusion of depth.
            </li>
            <li>
              <span className="text-semibold">Perspective: </span>Altering
              angles and scaling to mimic how objects appear in real life.
            </li>
          </ul>
          <p className="py-2 text-medium gray-4">
            These techniques make designs appear more dynamic and realistic.
            Modern day designs use realism to achieve an immersive experience
            for users and is becoming very popular in web design.
          </p>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            Texture
          </h4>
          <p className="py-2 text-medium gray-4">
            Texture in design refers to the surface quality of an object. In
            graphic and digital design, texture creates the illusion of a
            surface that can be felt, even though the medium is flat. It adds
            depth, dimension, and realism to designs, making elements more
            engaging and lifelike.
          </p>
          <p className="py-2 text-medium gray-4">
            Textures can be rough, smooth, gritty, soft, or metallic, among
            other types. They are often achieved through patterns, gradients, or
            image overlays. In UI/UX design, texture is primarily visual,
            enhancing the user experience by creating a sense of tangibility or
            weight to certain elements, helping guide attention and evoke
            emotions.
          </p>
          <p className="py-2 text-medium gray-4">
            For example: <br />
            Paper texture in a background gives a handmade feel. <br />
            Wood grain in a product image adds warmth and earthiness. <br />
            Subtle gradients mimic soft textures for buttons or cards. <br />
          </p>
          <p className="py-2 text-medium gray-4">
            Textures should be used carefully to avoid overwhelming the design
            or distracting from the core content.
          </p>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">Space</h4>
          <p className="py-2 text-medium gray-4">
            Also know as whitespace or negative space. Space in design is
            necessary to ensure the design is not cluttered. A cluttered design
            is always not ideal. Designs need space to breath. Elements in a
            design should be given a healthy room to breath
          </p>
          <p className="py-2 text-medium gray-4">
            Here are key ways to implement better whitespace in design:
          </p>

          <ul className="text-p text-medium gray-4">
            <li>
              <span className="text-semibold">Use a Grid System: </span>Grids
              create a structured layout, naturally introducing consistent
              whitespace between elements. They help maintain uniform spacing,
              making the design more balanced and readable.
            </li>
            <li>
              <span className="text-semibold">
                Prioritize Content Hierarchy:{" "}
              </span>
              Increase whitespace around important elements (like headers or
              calls to action) to draw attention and create a clear visual
              hierarchy. This separates primary content from secondary details.
            </li>
            <li>
              <span className="text-semibold">Embrace Minimalism: </span>Avoid
              overcrowding by using fewer elements and embracing simplicity.
              Allow content to "breathe" by not filling every part of the
              canvas, which improves focus and visual clarity.
            </li>
            <li>
              <span className="text-semibold">
                Adjust Line Spacing and Letter Spacing:{" "}
              </span>
              Increase line height (leading) and letter spacing (tracking) for
              better readability. Too-tight spacing can make text feel cramped,
              while generous spacing can enhance comfort and flow.
            </li>
            <li>
              <span className="text-semibold">Use Padding and Margins: </span>
              Properly apply padding within elements (e.g., buttons or text
              blocks) and margins between elements to create adequate gaps,
              ensuring a more open and clean design.
            </li>
            <li>
              <span className="text-semibold">
                Consistent Spacing Between Sections:{" "}
              </span>
              Ensure consistent vertical and horizontal whitespace between
              sections or content blocks. This helps separate content logically
              and prevents visual clutter.
            </li>
            <li>
              <span className="text-semibold">
                Balance Positive and Negative Space:{" "}
              </span>
              Pay attention to the relationship between positive space (content)
              and negative space (empty areas). A balance between the two can
              enhance the design’s composition and aesthetic.
            </li>
            <li>
              <span className="text-semibold">Whitespace in UI Elements: </span>
              Space out interactive elements like buttons, forms, and links.
              Adding whitespace around these areas ensures they stand out and
              improves usability by making them easier to tap or click.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DesignElements;

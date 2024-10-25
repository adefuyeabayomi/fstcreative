import { animateScroll as scroll } from "react-scroll";
import "./style.css";
import { useEffect } from "react";

const DesignPrinciples = () => {
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
          Introduction to Visual Design (II) - Design Principles
        </h2>
        <div className="py-1" />
        <p className="white">
          <span>Date: 24 October, 2024</span>{" "}
          <span>Tags: Visual Design, Introduction, Design Principles</span>
        </p>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            What are design principles?
          </h4>
          <p className="py-2 text-medium gray-4">
            Design principles help designers create useful designs that are
            effective and cohesive and pass information to the viewers properly.
            <br />
            There are Many different design principles, Let's dive straight into
            the list
          </p>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            Unity and Variety
          </h4>
          <p className="py-2 text-medium gray-4">
            Unity ensures all elements in a design work together harmoniously,
            creating a sense of cohesion. Variety adds interest by incorporating
            differences in the design, for instance, imagine if every element in
            a design (shapes, colors, and fonts) was identical—your design would
            look boring and flat!
          </p>
          <p className="py-2 text-medium gray-4">
            Imagine a design for a travel blog post. If we used the same font
            size, color, and style for the heading, subheading, and body text,
            it would lack personality. But by introducing variety (like
            different font sizes or adding an accent color for the heading), we
            keep things exciting while still maintaining unity across the
            layout.
          </p>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            Balance
          </h4>
          <p className="py-2 text-medium gray-4">
            Balance refers to how elements are distributed in a design. It can
            be symmetrical, where both sides mirror each other, or asymmetrical,
            where different elements still balance each other visually.
          </p>
          <p className="py-2 text-medium gray-4">
            Imagine designing a poster for a music event. If we place the title
            and main image exactly in the center, the design would feel
            structured and balanced (symmetrical). But for a more dynamic feel,
            we could place the image on one side and balance it with smaller
            text elements on the other side (asymmetrical). Both styles can work
            depending on the mood you want to set!
          </p>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            Contrast
          </h4>
          <p className="py-2 text-medium gray-4">
            Contrast helps highlight differences between elements, like light
            vs. dark, large vs. small, or bold vs. thin
          </p>
          <p className="py-2 text-medium gray-4">
            Imagine designing a sale announcement poster. If everything was in
            the same color and size, nothing would stand out! But by using bold,
            bright colors for the “50% Off” and a smaller, more subtle font for
            the rest of the details, you make sure the discount grabs the
            viewer’s attention. This contrast guides their eyes to the most
            important information first.
          </p>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            Spacing & Proximity
          </h4>
          <p className="py-2 text-medium gray-4">
            Spacing is about the amount of space between elements, while
            proximity refers to how close or far elements are from each other.
          </p>
          <p className="py-2 text-medium gray-4">
            Imagine you’re designing a flyer for a restaurant. If the contact
            details, opening hours, and menu items are all crammed together with
            no space between them, the design feels cluttered and confusing. By
            spacing things out properly, each section gets room to breathe,
            making it easier for viewers to find the information they need. When
            elements are placed near each other, like the restaurant's address
            and phone number, they feel more connected and related.
          </p>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            Hierarchy
          </h4>
          <p className="py-2 text-medium gray-4">
            Hierarchy helps organize elements by importance, guiding viewers
            through the design in the right order.
          </p>
          <p className="py-2 text-medium gray-4">
            Imagine designing a movie poster. The movie title should be the
            biggest and boldest, followed by the release date, and finally the
            smaller cast names. If everything were the same size, viewers
            wouldn’t know what to focus on. But by giving the title the most
            emphasis, you guide them through the poster in a clear, logical way.
          </p>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            Emphasis
          </h4>
          <p className="py-2 text-medium gray-4">
            Emphasis directs attention to the most important part of a design.
          </p>
          <p className="py-2 text-medium gray-4">
            Imagine creating a banner ad for a new product. If the product image
            and text were all the same size and color, nothing would stand out.
            But by making the product name bold and using a bright color, you
            create a focal point that immediately draws attention. Emphasis
            ensures that the most crucial part of your design—the product—is the
            first thing people see.
          </p>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            Repetition
          </h4>
          <p className="py-2 text-medium gray-4">
            Repetition is about using the same element throughout your design to
            create consistency.
          </p>
          <p className="py-2 text-medium gray-4">
            Imagine designing a website for a brand. If each page uses different
            fonts, colors, and button styles, the site will feel disjointed. But
            by repeating the same font, color scheme, and button design across
            all pages, you create a cohesive experience. Repetition builds
            familiarity, so the user always knows what to expect and where to
            look for important elements like navigation links.
          </p>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">Scale</h4>
          <p className="py-2 text-medium gray-4">
            Scale refers to the size of elements in relation to one another.
            Imagine designing an Instagram post for a clothing sale. If the
            "Sale" text and the image of the clothes were the same size, they’d
            compete for attention. But by making the "Sale" text large and bold,
            and keeping the clothing image smaller, you’re using scale to tell
            viewers what’s most important: the sale. Scale helps create a visual
            hierarchy by showing what matters most in the design.
          </p>
        </div>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold"></h4>
          <p className="py-2 text-medium gray-4"></p>
          <p className="py-2 text-medium gray-4"></p>
          <p className="py-2 text-medium gray-4"></p>
        </div>
      </div>
    </section>
  );
};

export default DesignPrinciples;

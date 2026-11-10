"use client";

import { animateScroll as scroll } from "react-scroll";
import { useEffect } from "react";
import designPrinciple1 from "./images/design-principles-1.png";
import designPrinciple2 from "./images/design-principles-2.png";
import designPrinciple3 from "./images/design-principles-3.png";
import designPrinciple4 from "./images/design-principles-4.png";
import designPrinciple5 from "./images/design-principles-5.png";
import designPrinciple6 from "./images/design-principles-6.png";
import designPrinciple7 from "./images/design-principles-7.png";
import { useDash } from "../../contexts/DashContext";

const DesignPrinciples = () => {
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
          Introduction to Visual Design (II) - Design Principles
        </h1>
      </div>
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl">
        <div className="py-3" />
        <div>
          <h4 className="font-quicksand text-slate-800 font-semibold">
            What are design principles?
          </h4>
          <p className="py-2 font-medium text-slate-600">
            Design principles help designers create useful designs that are
            effective and cohesive and pass information to the viewers properly.
            <br />
            There are Many different design principles, Let's dive straight into
            the list
          </p>
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl">
        <div className="py-3" />
        <div>
          <h4 className="font-quicksand text-slate-800 font-semibold">
            Unity and Variety
          </h4>
          <p className="py-2 font-medium text-slate-600">
            Unity ensures all elements in a design work together harmoniously,
            creating a sense of cohesion. Variety adds interest by incorporating
            differences in the design, for instance, imagine if every element in
            a design (shapes, colors, and fonts) was identical—your design would
            look boring and flat!
          </p>
          <p className="py-2 font-medium text-slate-600">
            Imagine a design for a travel blog post. If we used the same font
            size, color, and style for the heading, subheading, and body text,
            it would lack personality. But by introducing variety (like
            different font sizes or adding an accent color for the heading), we
            keep things exciting while still maintaining unity across the
            layout.
          </p>
        </div>

        <div className="w-full">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <div className="mx-auto w-full max-w-[400px]">
              <img src={designPrinciple1.src} />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl">
        <div className="py-3" />
        <div>
          <h4 className="font-quicksand text-slate-800 font-semibold">
            Balance
          </h4>
          <p className="py-2 font-medium text-slate-600">
            Balance refers to how elements are distributed in a design. It can
            be symmetrical, where both sides mirror each other, or asymmetrical,
            where different elements still balance each other visually.
          </p>
          <p className="py-2 font-medium text-slate-600">
            Imagine designing a poster for a music event. If we place the title
            and main image exactly in the center, the design would feel
            structured and balanced (symmetrical). But for a more dynamic feel,
            we could place the image on one side and balance it with smaller
            text elements on the other side (asymmetrical). Both styles can work
            depending on the mood you want to set!
          </p>
        </div>

        <div className="w-full">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <div className="mx-auto w-full max-w-[400px]">
              <img src={designPrinciple2.src} />
            </div>
            <div className="mx-auto w-full max-w-[400px]">
              <img src={designPrinciple3.src} />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl">
        <div className="py-3" />
        <div>
          <h4 className="font-quicksand text-slate-800 font-semibold">
            Contrast
          </h4>
          <p className="py-2 font-medium text-slate-600">
            Contrast helps highlight differences between elements, like light
            vs. dark, large vs. small, or bold vs. thin
          </p>
          <p className="py-2 font-medium text-slate-600">
            Imagine designing a sale announcement poster. If everything was in
            the same color and size, nothing would stand out! But by using bold,
            bright colors for the “50% Off” and a smaller, more subtle font for
            the rest of the details, you make sure the discount grabs the
            viewer’s attention. This contrast guides their eyes to the most
            important information first.
          </p>
        </div>

        <div className="w-full">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <div className="mx-auto w-full max-w-[400px]">
              <img src={designPrinciple4.src} />
            </div>
            <div className="mx-auto w-full max-w-[400px]">
              <img src={designPrinciple5.src} />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl">
        <div className="py-3" />
        <div>
          <h4 className="font-quicksand text-slate-800 font-semibold">
            Spacing & Proximity
          </h4>
          <p className="py-2 font-medium text-slate-600">
            Spacing is about the amount of space between elements, while
            proximity refers to how close or far elements are from each other.
          </p>
          <p className="py-2 font-medium text-slate-600">
            Imagine you’re designing a flyer for a restaurant. If the contact
            details, opening hours, and menu items are all crammed together with
            no space between them, the design feels cluttered and confusing. By
            spacing things out properly, each section gets room to breathe,
            making it easier for viewers to find the information they need. When
            elements are placed near each other, like the restaurant's address
            and phone number, they feel more connected and related.
          </p>
        </div>

        <div className="w-full">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <div className="mx-auto w-full max-w-[400px]">
              <img src={designPrinciple6.src} />
            </div>
            <div className="mx-auto w-full max-w-[400px]">
              <img src={designPrinciple7.src} />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl">
        <div className="py-3" />
        <div>
          <h4 className="font-quicksand text-slate-800 font-semibold">
            Hierarchy
          </h4>
          <p className="py-2 font-medium text-slate-600">
            Hierarchy helps organize elements by importance, guiding viewers
            through the design in the right order.
          </p>
          <p className="py-2 font-medium text-slate-600">
            Imagine designing a movie poster. The movie title should be the
            biggest and boldest, followed by the release date, and finally the
            smaller cast names. If everything were the same size, viewers
            wouldn’t know what to focus on. But by giving the title the most
            emphasis, you guide them through the poster in a clear, logical way.
          </p>
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl">
        <div className="py-3" />
        <div>
          <h4 className="font-quicksand text-slate-800 font-semibold">
            Emphasis
          </h4>
          <p className="py-2 font-medium text-slate-600">
            Emphasis directs attention to the most important part of a design.
          </p>
          <p className="py-2 font-medium text-slate-600">
            Imagine creating a banner ad for a new product. If the product image
            and text were all the same size and color, nothing would stand out.
            But by making the product name bold and using a bright color, you
            create a focal point that immediately draws attention. Emphasis
            ensures that the most crucial part of your design—the product—is the
            first thing people see.
          </p>
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl">
        <div className="py-3" />
        <div>
          <h4 className="font-quicksand text-slate-800 font-semibold">
            Repetition
          </h4>
          <p className="py-2 font-medium text-slate-600">
            Repetition is about using the same element throughout your design to
            create consistency.
          </p>
          <p className="py-2 font-medium text-slate-600">
            Imagine designing a website for a brand. If each page uses different
            fonts, colors, and button styles, the site will feel disjointed. But
            by repeating the same font, color scheme, and button design across
            all pages, you create a cohesive experience. Repetition builds
            familiarity, so the user always knows what to expect and where to
            look for important elements like navigation links.
          </p>
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl">
        <div className="py-3" />
        <div>
          <h4 className="font-quicksand text-slate-800 font-semibold">Scale</h4>
          <p className="py-2 font-medium text-slate-600">
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
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl">
        <div className="py-3" />
        <div>
          <h4 className="font-quicksand text-slate-800 font-semibold"></h4>
          <p className="py-2 font-medium text-slate-600"></p>
          <p className="py-2 font-medium text-slate-600"></p>
          <p className="py-2 font-medium text-slate-600"></p>
        </div>
      </div>
    </section>
  );
};

export default DesignPrinciples;

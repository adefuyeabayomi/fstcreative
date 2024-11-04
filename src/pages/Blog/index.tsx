import React, { useEffect } from "react";
import "./style.css";
import BlogCardMain, {
  BlogCardProp,
} from "../../components/BlogCard/BlogCardMain";
import { animateScroll as scroll } from "react-scroll";
import img1 from "../../assets/images/blog-img.png";
import dP from "../../assets/images/dprinciples.png";
import colorTheory from "../../assets/images/color-theory.png";

const blogCards: BlogCardProp[] = [
  {
    title: "Introduction to Visual Design (I) - Design Elements",
    linkPath: "/blog/visual-design-elements",
    highlightText:
      "Learn the basic elements of design and how they can be used in any visual medium to achieve the desired effect.",
    img: <img src={img1} className="blog-card-image" />,
  },
  {
    title: "Introduction to Visual Design (II) - Design Principles",
    linkPath: "/blog/visual-design-principles",
    highlightText:
      "Explore design principles and how they are applied in the creating effective visual media.",
    img: <img src={dP} className="blog-card-image" />,
  },
  {
    title: "Color Theory in design.",
    linkPath: "/blog/color-theory",
    highlightText:
      "Discover the impact of color and how it shapes mood, emotion, and visual harmony in design.",
    img: <img src={colorTheory} className="blog-card-image" />,
  },
];

export const other = [
  {
    title: "User-Centered Design: Best Practices",
    linkPath: "/blog/user-centered-design",
    highlightText:
      "Discover the essentials of putting users first in UI/UX design.",
    img: <img className="blog-card-image" />,
  },
  {
    title: "Effective Code Review Practices in Software Engineering",
    linkPath: "/blog/code-review-practices",
    highlightText:
      "Improve code quality with these code review best practices.",
    img: <img className="blog-card-image" />,
  },
  {
    title: "Creative Branding through Visual Design",
    linkPath: "/blog/creative-branding-visual-design",
    highlightText:
      "Learn how to create strong brand identities through visual design.",
    img: <img className="blog-card-image" />,
  },
  {
    title: "UI/UX Design for Mobile Apps: Key Strategies",
    linkPath: "/blog/ui-ux-mobile-design",
    highlightText:
      "Discover strategies for designing intuitive and engaging mobile app experiences.",
    img: <img className="blog-card-image" />,
  },
  {
    title: "Software Engineering: The Future of Microservices",
    linkPath: "/blog/software-engineering-microservices",
    highlightText:
      "Explore how microservices are shaping the future of software development.",
    img: <img className="blog-card-image" />,
  },
  {
    title: "Creative Web Design: Balancing Aesthetics and Usability",
    linkPath: "/blog/creative-web-design",
    highlightText:
      "Achieve the perfect balance between creativity and functionality in web design.",
    img: <img className="blog-card-image" />,
  },
  {
    title: "UI Patterns That Enhance User Experience",
    linkPath: "/blog/ui-patterns-enhance-experience",
    highlightText:
      "Utilize effective UI patterns to create seamless and intuitive user journeys.",
    img: <img className="blog-card-image" />,
  },
];

const Blog = (): React.JSX.Element => {
  useEffect(() => {
    // Scroll to top when the component mounts
    scroll.scrollToTop({
      duration: 1000, // duration of the scrolling animation in milliseconds
      smooth: "easeInOutQuart", // the type of easing
    });
  }, []);

  return (
    <section id="blog" className="blog-container">
      <div className="main-spacing-x">
        <div className="py-3" />
        <div></div>
        <div className="py-2" />
        <div className="highlight-container">
          <div></div>
        </div>
        <div className="featured-container">
          <div>
            <h3 className="px-2 text-main font-family-quicksand text-semibold">
              <span className="text-main">FEATURED</span>{" "}
              <span className="gray-4">POSTS</span>
            </h3>
            <div className="py-" />
          </div>
        </div>
        <div className="category-1-container">
          <div className="container-fluid no-space">
            <div className="row no-space g-3 align-items-top">
              {blogCards.map((x, index) => {
                return (
                  <div key={index} className="col-12 col-md-6">
                    <BlogCardMain
                      highlightText={x.highlightText}
                      title={x.title}
                      img={x.img}
                      linkPath={x.linkPath}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

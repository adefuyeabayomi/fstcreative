import React from "react";
import "./style.css";
import BlogCardMain, {
  BlogCardProp,
} from "../../components/BlogCard/BlogCardMain";

import img1 from "../../assets/images/blog-img.png";

const blogCards: BlogCardProp[] = [
  {
    title: "Introduction to Visual Design - Design Elements",
    linkPath: "/blog/visual-design-elements",
    highlightText:
      "Learn the basic elements of design and how they can be used in any visual medium to achieve the desired effect.",
    img: <img src={img1} className="blog-card-image" />,
  },
  {
    title: "Introduction to Visual Design - Design Principles",
    linkPath: "/blog/visual-design-principles",
    highlightText:
      "Explore advanced methodologies and patterns in modern software engineering.",
    img: <img className="blog-card-image" />,
  },
  {
    title: "Creative Design Inspirations for Your Next Project",
    linkPath: "/blog/creative-design-inspirations",
    highlightText:
      "Get inspired by top creative design trends and elevate your work.",
    img: <img className="blog-card-image" />,
  },
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
            <div className="row no-space g-3 align-items-top justify-content-center">
              {blogCards.map((x) => {
                return (
                  <div className="col-12 col-md-6">
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

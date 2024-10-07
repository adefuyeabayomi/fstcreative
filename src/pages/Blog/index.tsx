import React from "react";
import "./style.css";
import BlogCardMain, {
  BlogCardProp,
} from "../../components/BlogCard/BlogCardMain";

const blogCards: BlogCardProp[] = [
  {
    title: "Mastering UI/UX Design Principles",
    linkPath: "/blog/ui-ux-design-principles",
    highlightText:
      "Learn the key principles of effective UI/UX design for a seamless user experience.",
    img: "https://example.com/images/ui-ux-design.jpg",
  },
  {
    title: "Advanced Software Engineering Techniques",
    linkPath: "/blog/advanced-software-engineering",
    highlightText:
      "Explore advanced methodologies and patterns in modern software engineering.",
    img: "https://example.com/images/software-engineering.jpg",
  },
  {
    title: "Creative Design Inspirations for Your Next Project",
    linkPath: "/blog/creative-design-inspirations",
    highlightText:
      "Get inspired by top creative design trends and elevate your work.",
    img: "https://example.com/images/creative-design.jpg",
  },
  {
    title: "User-Centered Design: Best Practices",
    linkPath: "/blog/user-centered-design",
    highlightText:
      "Discover the essentials of putting users first in UI/UX design.",
    img: "https://example.com/images/user-centered-design.jpg",
  },
  {
    title: "Effective Code Review Practices in Software Engineering",
    linkPath: "/blog/code-review-practices",
    highlightText:
      "Improve code quality with these code review best practices.",
    img: "https://example.com/images/code-review.jpg",
  },
  {
    title: "Creative Branding through Visual Design",
    linkPath: "/blog/creative-branding-visual-design",
    highlightText:
      "Learn how to create strong brand identities through visual design.",
    img: "https://example.com/images/branding.jpg",
  },
  {
    title: "UI/UX Design for Mobile Apps: Key Strategies",
    linkPath: "/blog/ui-ux-mobile-design",
    highlightText:
      "Discover strategies for designing intuitive and engaging mobile app experiences.",
    img: "https://example.com/images/mobile-design.jpg",
  },
  {
    title: "Software Engineering: The Future of Microservices",
    linkPath: "/blog/software-engineering-microservices",
    highlightText:
      "Explore how microservices are shaping the future of software development.",
    img: "https://example.com/images/microservices.jpg",
  },
  {
    title: "Creative Web Design: Balancing Aesthetics and Usability",
    linkPath: "/blog/creative-web-design",
    highlightText:
      "Achieve the perfect balance between creativity and functionality in web design.",
    img: "https://example.com/images/web-design.jpg",
  },
  {
    title: "UI Patterns That Enhance User Experience",
    linkPath: "/blog/ui-patterns-enhance-experience",
    highlightText:
      "Utilize effective UI patterns to create seamless and intuitive user journeys.",
    img: "https://example.com/images/ui-patterns.jpg",
  },
];

const Blog = (): React.JSX.Element => {
  return (
    <section id="blog" className="blog-container">
      <div className="main-spacing-x">
        <div className="py-3" />
        <div>
          <h2 className="text-main text-center text-regular">
            Five and Six Technologies Blog
          </h2>
        </div>
        <div className="py-2" />
        <div className="highlight-container">
          <div></div>
        </div>
        <div className="featured-container">
          <div>
            <h5 className="text-main text-center font-family-quicksand text-medium">
              FEATURED
            </h5>
            <div className="py-2" />
          </div>
        </div>
        <div className="category-1-container">
          <div className="container-fluid no-space">
            <div className="row no-space g-3 align-items-top justify-content-center">
              {blogCards.map((x) => {
                return (
                  <div className="w-max-content px-2">
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

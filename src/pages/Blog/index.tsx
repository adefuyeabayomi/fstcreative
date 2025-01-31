import React, { useEffect, useState } from "react";
import "./style.css";
import {
  BlogCardProp,
  FeaturedCard,
} from "../../components/BlogCard/BlogCardMain";
import blogImgTemp from "../../assets/images/Leonardo_Kino_XL_Picture_the_Mona_Lisa_as_a_cyberpunk_hacker_i_4 1.png";
import { animateScroll as scroll } from "react-scroll";
import img1 from "../../assets/images/blog-img.png";
import dP from "../../assets/images/dprinciples.png";
import colorTheory from "../../assets/images/color-theory.png";
import figmaIntro from "../../assets/images/figma-intro.png";
import typography from "../../assets/images/typography.png";
import FButtonMain from "../../components/Button/Main";
import { useDash } from "../../contexts/DashContext";
import { useNavigate } from "react-router-dom";

const blogCards: BlogCardProp[] = [
  {
    title: "Introduction to Visual Design (I) - Design Elements",
    linkPath: "/blog/visual-design-elements",
    highlightText: `The term design is used in many contexts. From architecture and structural design, to fashion, to information technology, infographics, presentation, branding and strategy, Product, Advertising, Layout design.
Some things can be picked out as common to all these areas listed. Design is created for a purpose. Every design is made to fulfill a goal. Architectural designs would one day be a majestic buildings, `,
    img: <img src={img1} className="blog-card-image" />,
  },
  {
    title: "Introduction to Visual Design (II) - Design Principles",
    linkPath: "/blog/visual-design-principles",
    highlightText: `Design principles help designers create useful designs that are effective and cohesive and pass information to the viewers properly.
There are Many different design principles, Let's dive straight into the list

Unity and Variety
Unity ensures all elements in a design work together harmoniously, creating a sense of cohesion.`,
    img: <img src={dP} className="blog-card-image" />,
  },
  {
    title: "Color Theory in design.",
    linkPath: "/blog/color-theory",
    highlightText: `Color theory is the study of how colors work together and how they affect our emotions and perceptions. It's like a toolbox for artists, designers, and creators to help them choose the right colors for their projects.

Color theory enables you to pick colors that go well together and convey the right mood`,
    img: <img src={colorTheory} className="blog-card-image" />,
  },
  {
    title: "Mastering Typography: The Power of Fonts in Design",
    linkPath: "/blog/typography",
    highlightText:
      "Explore typography’s role in creating readable, impactful, and visually compelling designs.",
    img: <img src={typography} className="blog-card-image" />,
  },
  {
    title: "Introduction to Figma",
    linkPath: "/blog/figma-intro",
    highlightText:
      "Learn the essentials of Figma for creating intuitive and polished user interfaces from scratch.",
    img: <img src={figmaIntro} className="blog-card-image" />,
  },
];

const Blog = (): React.JSX.Element => {
  let [activeCat, setActiveCat] = useState("all");
  let navigate = useNavigate();

  let { updateDashStatus } = useDash();
  useEffect(() => {
    updateDashStatus(false);
    // Scroll to top when the component mounts
    scroll.scrollToTop({
      duration: 1000, // duration of the scrolling animation in milliseconds
      smooth: "easeInOutQuart", // the type of easing
    });
  }, []);

  return (
    <section id="blog" className="blog-container royal-shade-5">
      <div className="main-spacing-x">
        <div className="py-3 w-100" />
        <div className="py-3 w-100" />
        <div>
          <h1 className="text-bold text-center royal-shade-5 font-family-quicksand">
            Get Exciting Updates in the Creative world!
          </h1>

          <div className="py-3 w-100" />
          <p className="text-center text-medium col-md-10 col-lg-8 col-xl-6 center">
            Delve in spaces of creative design, tech innovations, software
            development, physics, entrepreneurship and life.
          </p>
        </div>
        <div className="py-3 w-100" />
        <div id="category-container" className="blog-category-container">
          <div className="d-divider-half gray-11-bg"></div>
          <div className="py-1"></div>
          <div className="cat-container-div">
            <ul className="blog-cat-list center text-center">
              <li
                onClick={() => setActiveCat("all")}
                className={`${activeCat == "all" ? "active" : ""} text-medium pointer`}
              >
                All
              </li>
              <li
                onClick={() => setActiveCat("featured")}
                className={`${activeCat == "featured" ? "active" : ""} text-medium pointer`}
              >
                Featured
              </li>
              <li
                onClick={() => setActiveCat("tech")}
                className={`${activeCat == "tech" ? "active" : ""} text-medium pointer`}
              >
                Tech Innovations
              </li>
              <li
                onClick={() => setActiveCat("content")}
                className={`${activeCat == "content" ? "active" : ""} text-medium pointer`}
              >
                Content Creation
              </li>
              <li
                onClick={() => setActiveCat("design")}
                className={`${activeCat == "design" ? "active" : ""} text-medium pointer`}
              >
                Design & Creativity
              </li>
              <li
                onClick={() => setActiveCat("inspiration")}
                className={`${activeCat == "inspiration" ? "active" : ""} text-medium pointer`}
              >
                Inspiration
              </li>
              <li
                onClick={() => setActiveCat("life")}
                className={`${activeCat == "life" ? "active" : ""} text-medium pointer`}
              >
                Life
              </li>
              <li
                onClick={() => setActiveCat("stories")}
                className={`${activeCat == "stories" ? "active" : ""} text-medium pointer`}
              >
                Short Stories
              </li>
            </ul>
          </div>
          <div className="py-1"></div>
          <div className="d-divider-half gray-11-bg"></div>
        </div>

        <div className="py-4"></div>
        <div className="featured-container">
          <h6 className="royal-shade-4">Featured Updates</h6>
          <div className="py-2"></div>
          <FeaturedCard
            duration={"2mins"}
            cat={"TECH INNOVATION"}
            image={blogCards[0].img}
            highlightText={blogCards[0].highlightText}
            title={blogCards[0].title}
            linkPath={blogCards[0].linkPath}
            feature={true}
          />
        </div>

        <div className="py-3"></div>
        <div className="py-4"></div>
        <div className="featured-container">
          <h6 className="royal-shade-4">Latest Updates</h6>
          <div className="py-2"></div>
          <div className="container-fluid no-space">
            <div className="row no-space">
              <div className="col-12 col-md-6 col-lg-8">
                <div className="container-fluid no-space">
                  <div className="row gx-2">
                    <div className="featured-item-container no-space">
                      <FeaturedCard
                        duration={"3mins"}
                        cat={"TECH INNOVATION"}
                        image={blogCards[1].img}
                        highlightText={blogCards[1].highlightText}
                        title={blogCards[1].title}
                        linkPath={blogCards[1].linkPath}
                        feature={false}
                      />
                    </div>
                    <div className="featured-item-container no-space">
                      <FeaturedCard
                        duration={"2mins"}
                        cat={"TECH INNOVATION"}
                        image={blogCards[2].img}
                        highlightText={blogCards[2].highlightText}
                        title={blogCards[2].title}
                        linkPath={blogCards[2].linkPath}
                        feature={false}
                      />
                    </div>
                    <div className="featured-item-container no-space">
                      <FeaturedCard
                        duration={"5mins"}
                        cat={"TECH INNOVATION"}
                        image={blogCards[3].img}
                        highlightText={blogCards[3].highlightText}
                        title={blogCards[3].title}
                        linkPath={blogCards[3].linkPath}
                        feature={false}
                      />
                    </div>
                    <div className="featured-item-container no-space">
                      <FeaturedCard
                        duration={"1mins"}
                        cat={"TECH INNOVATION"}
                        image={blogCards[4].img}
                        highlightText={blogCards[4].highlightText}
                        title={blogCards[4].title}
                        linkPath={blogCards[4].linkPath}
                        feature={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-5 col-xl-4 px-1">
                <div className="fade-border p-3 r-10">
                  <div className="py-2"></div>
                  <div className="container-fluid no-space">
                    <div className="row no-space align-items-center">
                      <div className="w-max-content no-space">
                        {" "}
                        <FButtonMain
                          actionFn={() => navigate("/bootcamp-registration")}
                          iconLeft={false}
                        >
                          <span className="text-none text-semibold">
                            REGISTER
                          </span>
                        </FButtonMain>
                      </div>
                      <div className="col"></div>
                      <div className="w-max-content no-space">
                        <div className="container-fluid no-space">
                          <div className="row no-space align-items-center">
                            <div className="w-max-content no-space">
                              <div className="p-2 fade-border text-center time-value r-5">
                                31
                              </div>
                            </div>
                            <div className="w-max-content no-space"></div>
                            <div className="w-max-content no-space">
                              <div className="text-semibold px-1">Days</div>
                            </div>
                            <div className="w-max-content no-space">
                              <div className="p-2 fade-border text-center time-value r-5">
                                45
                              </div>
                            </div>
                            <div className="w-max-content no-space"></div>
                            <div className="w-max-content no-space">
                              <div className="text-semibold px-1">Mins</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-2" />
                  <div>
                    <h6 className="text-semibold ad-heading">
                      Register For Our 3 month Product Design Bootcamp! (
                      Beginner to Advanced )
                    </h6>
                  </div>
                  <div className="py-1" />
                  <div>
                    <p className="royal text-semibold">
                      STARTS 14TH MARCH, 2025
                    </p>
                  </div>
                  <div className="py-1" />
                  <div>
                    <p
                      className={`${activeCat == "" ? "active" : ""} text-medium pointer`}
                    >
                      Go From Total Beginner to Advanced Level With This
                      Simplified and Practical Oriented Course.
                    </p>
                  </div>
                  <div className="py-1" />
                  <div>
                    <img src={blogImgTemp} className="blog-ad-img" />
                  </div>

                  <div className="py-2" />
                  <div>
                    <h6 className="text-semibold">What You'll Cover</h6>
                  </div>
                  <div>
                    <ul className="font-family-quicksand text-medium text-p ad-list-container">
                      <li>Basics of Visual Design</li>
                      <li>Logo Design & Vector Editing ( Inkscape )</li>
                      <li>Fundamentals of UI/UX Design ( Figma )</li>
                      <li>Design Systems and Library</li>
                      <li>Advanced UI Design</li>
                    </ul>
                  </div>
                  <div className="py-2" />
                  <div>
                    <h6 className="text-semibold royal">
                      With Live Sessions, Practicals and Portfolio Building!
                    </h6>
                  </div>
                  <div className="py-1" />
                  <div>
                    <p
                      className={`${activeCat == "" ? "active" : ""} text-medium pointer`}
                    >
                      Finish The Bootcamp and Begin Building / Collaborating on
                      Exciting Projects that would be on your portfolio.
                    </p>
                  </div>

                  <div className="py-1" />
                  <div>
                    <FButtonMain style={{ width: "100%" }} iconLeft={false}>
                      <span className="text-none text-semibold">REGISTER</span>
                    </FButtonMain>
                  </div>

                  <div className="py-2"></div>
                  <div className="container-fluid no-space">
                    <div className="row no-space">
                      <div className="col-12 no-space"></div>
                      <div className="col-12  no-space"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

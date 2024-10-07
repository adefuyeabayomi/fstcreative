import { Link } from "react-router-dom";

import blogImg from "../../assets/images/blog-img.png";

export interface BlogCardProp {
  title: string;
  linkPath: string;
  highlightText: string;
  img: string;
}

import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons/faChevronCircleRight";

const BlogCardMain = ({
  title,
  linkPath,
  highlightText,
  img,
}: BlogCardProp) => {
  return (
    <div
      id="blog-card"
      className="blog-card-container border-debug gray-1 w-max-content"
    >
      <div className="blog-card-image-container">
        <img src={blogImg} className="blog-card-image" />
      </div>
      <div className="py-1"></div>
      <div className="text-small">
        <div className="blog-text-container text-main">
          <h6 className="text-medium font-family-quicksand ">{title}</h6>
        </div>
        <div className="blog-text-container" style={{ fontWeight: "550" }}>
          <p>{highlightText}</p>
        </div>
        <div className="py-1"></div>
        <Link className="text-none gray-1" to={linkPath}>
          <div className="blog-text-container">
            <div className="container-fluid no-space">
              <div className="row no-space align-items-center">
                <div className="no-space w-max-content">
                  <span className="text-semibold">Read More</span>
                </div>
                <div className="no-space" style={{ width: "5px" }} />
                <div className="w-max-content no-space">
                  <div>
                    <FontAwesomeIcon icon={faChevronCircleRight} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogCardMain;

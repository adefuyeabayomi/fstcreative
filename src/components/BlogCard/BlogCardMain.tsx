import { Link } from "react-router-dom";

export interface BlogCardProp {
  title: string;
  linkPath: string;
  highlightText: string;
  img: React.JSX.Element;
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
      className="blog-card-container gray-3"
    >
      <div className="blog-card-image-container">
        {img}
      </div>
      <div className="py-1"></div>
      <div className="px-2">
        <div className="blog-text-container text-main">
          <h6 className="text-medium font-family-quicksand ">{title}</h6>
        </div>
        <div className="blog-text-container" style={{ fontWeight: "550" }}>
          <p className="word-break gray-4">{highlightText}</p>
        </div>
        <div className="py-1"></div>
        <Link className="text-none gray-1" to={linkPath}>
          <div className="blog-text-container text-p">
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

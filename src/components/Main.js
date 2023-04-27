import React from "react";
import "../styles/index.css";

const Main = () => (
  <section className="featured-article-side-links">
    <div className="row collapse">
      {/* Big feature */}
      <div className="small-12 medium-6 columns">
        <a href="#">
          <article className="featured-article-big">
            <div className="featured-article-tag">
              <span className="label">News</span>
            </div>
            <div className="featured-article-text">
              <h3 className="featured-article-title">
                Title Here <span className="author">by Joe Bloggs</span>
              </h3>
              <p>Latin text</p>
              <a href="#"> Read More</a>
            </div>
          </article>
        </a>
      </div>
      {/* Small feature */}
      <div className="medium-2 columns hide-for-small-only ">
        <div className="featured-article-small-container">
          <a href="#">
            <article className="featured-article-small">
              <div className="featured-article-tag">
                <span className="label">News</span>
              </div>
              <div className="featured-article-text">
                <h4 className="featured-article-title">
                  Title Here <span className="author">by Joe Bloggs</span>
                </h4>
                <a href="#"> Read More</a>
              </div>
            </article>
          </a>
          <a href="#">
            <article className="featured-article-small">
              <div className="featured-article-tag">
                <span className="label">News</span>
              </div>
              <div className="featured-article-text">
                <h4 className="featured-article-title">
                  Title Here <span className="author">by Joe Bloggs</span>
                </h4>
                <a href="#"> Read More</a>
              </div>
            </article>
          </a>
          <a href="#">
            <article className="featured-article-small">
              <div className="featured-article-tag">
                <span className="label">News</span>
              </div>
              <div className="featured-article-text">
                <h4 className="featured-article-title">
                  Title Here <span className="author">by Joe Bloggs</span>
                </h4>
                <a href="#"> Read More</a>
              </div>
            </article>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Main;

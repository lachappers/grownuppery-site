import React from "react";
import "../styles/index.css";

const Main = () => (
  <section className="featured-articles">
    {/* Big feature */}
    <div className="featured-article-big-container">
      <a href="#">
        <article className="featured-article-big">
          <div className="featured-article-tag">
            <span className="label">News</span>
          </div>
          <div className="featured-article-text">
            <h3 className="featured-article-title">
              Title Here <span className="author">by Joe Bloggs</span>
            </h3>
            <p>
              Latin text Latin text Latin text Latin text Latin text Latin text
              Latin text Latin text Latin text Latin text Latin text Latin text
              Latin text Latin text
            </p>
            <a href="#"> Read More > </a>
          </div>
        </article>
      </a>
    </div>
    <hr />
    <div className="featured-articles-side">
      {/* Small feature */}
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
      </div>
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
      </div>
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
      </div>
    </div>
  </section>
);

export default Main;

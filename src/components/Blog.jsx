import React from 'react';

const Blog = () => {
  return (
    <section className="blog-section" id="blog">
      <div className="container">
        <div className="blog-grid">
          <div className="featured-intro">
            <h1 className="subsection-title bottom-space-medium">
              Discover My Insights
            </h1>
            <p>
              Explore my YouTube videos and blog posts for a wealth of
              knowledge and inspiration in the world of embedded systems and
              technology.
            </p>
          </div>
          <div className="col flex-gap-small">
            <div className="col flex-gap-tiny blog-preview">
              <a className="blog-title" href="#">
                <h2>
                  Artificial Intelligence, Machine Learning, Deep Learning.
                  What's the difference?
                </h2>
              </a>
              <div className="row flex-gap-tiny grid-center-v">
                <p className="highlights">AI</p>
                <p className="highlights">Technology</p>

                <div className="row grid-center-v">
                  <ion-icon
                    className="time-icom"
                    name="stopwatch-outline"
                  ></ion-icon>
                  <p>10-minute video</p>
                </div>
                <p className="blog-date">5 Jan 2020</p>
              </div>
            </div>
            <div className="col flex-gap-tiny blog-preview">
              <a className="blog-title" href="#">
                <h2>
                  Fruit Classification in Arduino Using the KNN Algorithm.
                </h2>
              </a>
              <div className="row flex-gap-tiny grid-center-v">
                <p className="highlights">Embedded ML</p>
                <p className="highlights">Arduino</p>

                <div className="row grid-center-v">
                  <ion-icon
                    className="time-icom"
                    name="stopwatch-outline"
                  ></ion-icon>
                  <p>6-minute video</p>
                </div>
                <p className="blog-date">3 Feb 2023</p>
              </div>
            </div>
            <div className="col flex-gap-tiny blog-preview">
              <a className="blog-title" href="#">
                <h2>Arduino Lab for MicroPython</h2>
              </a>
              <div className="row flex-gap-tiny grid-center-v">
                <p className="highlights">MicroPython</p>
                <p className="highlights">Arduino</p>

                <div className="row grid-center-v">
                  <ion-icon
                    className="time-icom"
                    name="stopwatch-outline"
                  ></ion-icon>
                  <p>5-minute video</p>
                </div>
                <p className="blog-date">11 Months ago</p>
              </div>
            </div>
            <div className="col flex-gap-tiny blog-preview">
              <a className="blog-title" href="#">
                <h2>Introduction to Arduino</h2>
              </a>
              <div className="row flex-gap-tiny grid-center-v">
                <p className="highlights">Electronics</p>
                <p className="highlights">Arduino</p>

                <div className="row grid-center-v">
                  <ion-icon
                    className="time-icom"
                    name="stopwatch-outline"
                  ></ion-icon>
                  <p>20-minute video</p>
                </div>
                <p className="blog-date">3 Years ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

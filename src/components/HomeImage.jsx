import React from "react";

const HomeImage = () => {
  return (
    <div
      className="hero-wrap js-fullheight"
      style={{ backgroundImage: 'url("images/bg_5.jpg")' }}
    >
      <div className="overlay" />
      <div className="container">
        <div
          className="row no-gutters slider-text js-fullheight align-items-center"
          data-scrollax-parent="true"
        >
          <div className="col-md-7 ftco-animate">
            <span className="subheading">Welcome to Pacific</span>
            <h1 className="mb-4">Discover Your Favorite Place with Us</h1>
            <p className="caps">
              Travel to the any corner of the world, without going around in
              circles
            </p>
          </div>
          <a
            href="https://vimeo.com/45830194"
            className="icon-video popup-vimeo d-flex align-items-center justify-content-center mb-4"
          >
            <span className="fa fa-play" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeImage;

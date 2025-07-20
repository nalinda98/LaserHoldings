import React from "react";

const Destination = () => {
  return (
    <div>
      <section
        className="ftco-section img ftco-select-destination"
        style={{ backgroundImage: "url(images/bg_3.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center pb-4">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <span className="subheading">Pacific Provide Places</span>
              <h2 className="mb-4">Select Your Destination</h2>
            </div>
          </div>
        </div>
        <div className="container container-2">
          <div className="row">
            <div className="col-md-12">
              <div className="carousel-destination owl-carousel ftco-animate">
                <div className="item">
                  <div className="project-destination">
                    <a
                      href="#"
                      className="img"
                      style={{ backgroundImage: "url(images/place-1.jpg)" }}
                    >
                      <div className="text">
                        <h3>Philippines</h3>
                        <span>8 Tours</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="project-destination">
                    <a
                      href="#"
                      className="img"
                      style={{ backgroundImage: "url(images/place-2.jpg)" }}
                    >
                      <div className="text">
                        <h3>Canada</h3>
                        <span>2 Tours</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="project-destination">
                    <a
                      href="#"
                      className="img"
                      style={{ backgroundImage: "url(images/place-3.jpg)" }}
                    >
                      <div className="text">
                        <h3>Thailand</h3>
                        <span>5 Tours</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="project-destination">
                    <a
                      href="#"
                      className="img"
                      style={{ backgroundImage: "url(images/place-4.jpg)" }}
                    >
                      <div className="text">
                        <h3>Autralia</h3>
                        <span>5 Tours</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="project-destination">
                    <a
                      href="#"
                      className="img"
                      style={{ backgroundImage: "url(images/place-5.jpg)" }}
                    >
                      <div className="text">
                        <h3>Greece</h3>
                        <span>7 Tours</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destination;

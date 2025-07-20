import React from "react";

const AboutUs = () => {
  return (
    <div>
      <>
        <section
          className="ftco-section ftco-about img"
          style={{ backgroundImage: "url(images/bg_4.jpg)" }}
        >
          <div className="overlay" />
          <div className="container py-md-5">
            <div className="row py-md-5">
              <div className="col-md d-flex align-items-center justify-content-center">
                <a
                  href="https://vimeo.com/45830194"
                  className="icon-video popup-vimeo d-flex align-items-center justify-content-center mb-4"
                >
                  <span className="fa fa-play" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-about ftco-no-pt img">
          <div className="container">
            <div className="row d-flex">
              <div className="col-md-12 about-intro">
                <div className="row">
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div
                      className="img d-flex w-100 align-items-center justify-content-center"
                      style={{ backgroundImage: "url(images/about-1.jpg)" }}
                    ></div>
                  </div>
                  <div className="col-md-6 pl-md-5 py-5">
                    <div className="row justify-content-start pb-3">
                      <div className="col-md-12 heading-section ftco-animate">
                        <span className="subheading">About Us</span>
                        <h2 className="mb-4">
                          Make Your Tour Memorable and Safe With Us
                        </h2>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts. Separated they live in Bookmarksgrove
                          right at the coast of the Semantics, a large language
                          ocean.
                        </p>
                        <p>
                          <a href="#" className="btn btn-primary">
                            Book Your Destination
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default AboutUs;

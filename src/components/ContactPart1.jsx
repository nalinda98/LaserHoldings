import React from 'react'

const ContactPart1 = () => {
  return (
    <div>
        <section className="ftco-section ftco-no-pb contact-section mb-4">
  <div className="container">
    <div className="row d-flex contact-info">
      <div className="col-md-3 d-flex">
        <div className="align-self-stretch box p-4 text-center">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="fa fa-map-marker" />
          </div>
          <h3 className="mb-2">Address</h3>
          <p>198 West 21th Street, Suite 721 New York NY 10016</p>
        </div>
      </div>
      <div className="col-md-3 d-flex">
        <div className="align-self-stretch box p-4 text-center">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="fa fa-phone" />
          </div>
          <h3 className="mb-2">Contact Number</h3>
          <p>
            <a href="tel://1234567920">+ 1235 2355 98</a>
          </p>
        </div>
      </div>
      <div className="col-md-3 d-flex">
        <div className="align-self-stretch box p-4 text-center">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="fa fa-paper-plane" />
          </div>
          <h3 className="mb-2">Email Address</h3>
          <p>
            <a href="mailto:info@yoursite.com">info@yoursite.com</a>
          </p>
        </div>
      </div>
      <div className="col-md-3 d-flex">
        <div className="align-self-stretch box p-4 text-center">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="fa fa-globe" />
          </div>
          <h3 className="mb-2">Website</h3>
          <p>
            <a href="#">yoursite.com</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default ContactPart1
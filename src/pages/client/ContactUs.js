import React from "react";
import letChart from "../../assets/lets_Chart.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbPhone } from "react-icons/tb";
import { PiBuildingsBold } from "react-icons/pi";

function ContactUs() {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Form Section */}
        <div className="col-md-6 border-1 rounded-5 bg-white p-5">
          <span className="fw-medium" style={{ color: "#ff6907" }}>
            Get in Touch
          </span>
          <h2 className="my-2" style={{ wordSpacing: "3px" }}>
            Let's Chat, Reach Out <br /> to Us
          </h2>
          <p>
            Have questions or feedback? We're here to help. Send us a message,
            and we'll respond within 24 hours.
          </p>
          <hr />
          <form>
            <div className="form-row d-flex my-3">
              <div className="form-group col-md-6">
                <label htmlFor="firstName" className="my-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control bg-light"
                  id="firstName"
                  placeholder="First name"
                />
              </div>
              &nbsp;
              <div className="form-group col-md-6">
                <label htmlFor="lastName" className="my-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control bg-light"
                  id="lastName"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="form-group my-3">
              <label htmlFor="email" className="my-2">
                Email Address
              </label>
              <input
                type="email"
                className="form-control bg-light"
                id="email"
                placeholder="Email address"
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="message" className="my-2">
                Message
              </label>
              <textarea
                className="form-control bg-light"
                id="message"
                rows="6"
                placeholder="Leave us a message"
              ></textarea>
            </div>
            <div className="form-group form-check my-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="privacyPolicy"
              />
              <label className="form-check-label" htmlFor="privacyPolicy">
                I agree to our friendly privacy policy
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-100 my-3">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="col-md-6 text-center">
          <div className="row">
            <img src={letChart} alt="Contact" className="img-fluid mb-3 mx-1" />
          </div>

          <div className="container">
            <div className="card p-3 border-0 rounded-5">
              <div className="row bg-light rounded-4 p-3 m-2">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="col-3 text-center ">
                    <p className="rounded-circle text-bg-primary bg-opacity-10  me-4 py-3">
                      <MdOutlineMailOutline className="text-center text-primary fs-1" 
                      />
                    </p>
                  </div>
                  <div className="col-9 text-start">
                    <h5>Email</h5>
                    <p>techteam@kawruh.com</p>
                  </div>
                </div>
              </div>

              <div className="row bg-light rounded-4 p-3 m-2">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="col-3 text-center">
                    <p className="rounded-circle text-bg-primary bg-opacity-10  me-4 py-3">
                      <TbPhone className="text-center text-primary fs-1"/>
                    </p>
                  </div>

                  <div className="col-9 text-start">
                    <h5>Phone</h5>
                    <p>(0252) 8324 9231</p>
                  </div>
                </div>
              </div>

              <div className="row bg-light rounded-4 p-3 m-2">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="col-3 text-center">
                    <p className="rounded-circle text-bg-primary bg-opacity-10  me-4 py-3">
                      <PiBuildingsBold className="text-center text-primary fs-1" />
                    </p>
                  </div>

                  <div className="col-9 text-start">
                    <h5>Address</h5>
                    <p>Jl Hormoni No.12,Kelurahan Tanah Abang</p>
                  </div>
                </div>
              </div>
              {/* <div className="row bg-light rounded-4 p-3 m-2">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="col-3">
                    <p className="text-center">
                      <span className="circle-icon">
                        <PiBuildingsBold className="fs-1" />
                      </span>
                    </p>
                  </div>

                  <div className="col-9 text-start">
                    <h5>Address</h5>
                    <p>Jl Hormoni No.12, Kelurahan Tanah Abang</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

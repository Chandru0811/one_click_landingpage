import React, { useState } from "react";
import bgImg from "../../../assets/Rectangle 37.png";
import formBgImg from "../../../assets/Orange Cream Modern Cargo Services Instagram Story (1) 1.png";
import ContainerImg1 from "../../../assets/Image 1.png";
import ContainerImg2 from "../../../assets/Image 3.png";
import ContainerImg3 from "../../../assets/Image 2.png";
import key from "../../../assets/Icon.png";
import clock from "../../../assets/Icon2.png";
import Monitor from "../../../assets/Icon3.png";
import ContainerBg1 from "../../../assets/Rectangle 35.png";
import videoImg from "../../../assets/Blue Simple Business Roadmap Presentation.svg";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("*Name is Required"),
  email: Yup.string()
    .email("*Invalid email format")
    .required("*Email is Required"),
  mobile: Yup.string().required("*Mobile Number is Required"),
  message: Yup.string().required("*Message is Required"),
});

function SalePitch() {
  const [showIframe, setShowIframe] = useState(false);

  const handlePlayVideo = () => {
    setShowIframe(true);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form data", values);
      // Handle form submission here
    },
  });

  return (
    <div className="container-fluid mt-3 sale-pitch">
      <div className="row">
        <div className="col-12 d-flex justify-content-center flex-column align-items-center position-relative">
          <img
            src={bgImg}
            alt="..."
            className="img-fluid position-absolute sale-pitch-bg-img"
            style={{ right: 0, top: 0, maxWidth: "50%" }}
          />
          <h4 className="fw-bold mt-3" style={{ color: "#0f3287", zIndex: 1 }}>
            SEO Services , Social Media Marketing , CRM.
          </h4>
          <div className="container">
            <p
              className="text-muted text-center mt-md-3 "
              style={{ zIndex: 1 }}
            >
              Everything you need under one umbrella, Take your business to the
              next level. 3D Company Profile that helps you win clients. Make
              use of Google and Social Media to grow your business. No stress,
              no technical knowledge required, we handle them all. LinkedIn,
              Facebook, Instagram, YouTube, TikTok, X - we cover them all
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-4 position-relative">
          <div className="position-absolute form-bg-img">
            <img src={formBgImg} className="img-fluid" alt="Background" />
          </div>

          {/* <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex align-items-center justify-content-center">
            <iframe
              width="80%"
              height="315"
              src="https://www.youtube.com/embed/fq1ceqOU2x4?si=f6J_14FGclt0Y9RM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div> */}
          <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex align-items-center justify-content-center">
            <div className="video-container position-relative">
              {!showIframe && (
                <img
                  src={videoImg}
                  alt="Video Cover"
                  className="img-fluid cover-image"
                  onClick={handlePlayVideo}
                  style={{ cursor: "pointer" }}
                />
              )}

              {showIframe && (
                <iframe
                  width="80%"
                  height="315"
                  src="https://www.youtube.com/embed/fq1ceqOU2x4?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="iframe-video"
                ></iframe>
              )}
            </div>
          </div>

          <div className="col-12 col-md-6 d-flex flex-column align-items-center">
            <div className="text-start w-100">
              <h4
                className="fw-bold mt-3 mb-2 text-start "
                style={{ color: "#006db7" }}
              >
                Ready to take the next step, Contact Us Now
              </h4>
            </div>

            <div className="sale-pitch-container w-100 text-start mt-2">
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name *"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    className={`sale-pitch-input form-control rounded-3 ${
                      formik.touched.name && formik.errors.name
                        ? "is-invalid"
                        : ""
                    }`}
                  />
                  {formik.errors.name && formik.touched.name && (
                    <div className="invalid-feedback mt-0">
                      {formik.errors.name}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Work Mail *"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={`sale-pitch-input form-control rounded-3 ${
                      formik.touched.email && formik.errors.email
                        ? "is-invalid"
                        : ""
                    }`}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <div className="invalid-feedback mt-0">
                      {formik.errors.email}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile *"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.mobile}
                    className={`sale-pitch-input form-control rounded-3 ${
                      formik.touched.mobile && formik.errors.mobile
                        ? "is-invalid"
                        : ""
                    }`}
                  />
                  {formik.errors.mobile && formik.touched.mobile && (
                    <div className="invalid-feedback mt-0">
                      {formik.errors.mobile}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <textarea
                    name="message"
                    placeholder="Message *"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    className={`sale-pitch-textarea form-control rounded-3 ${
                      formik.touched.message && formik.errors.message
                        ? "is-invalid"
                        : ""
                    }`}
                  />
                  {formik.errors.message && formik.touched.message && (
                    <div className="invalid-feedback mt-0">
                      {formik.errors.message}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="sale-pitch-button btn btn-primary "
                  style={{ padding: "12px 48px" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="row my-5" id="Promo1">
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <img src={ContainerImg1} alt="..." className="img-fluid" />
          </div>
          <div className="col-12 col-md-6 mt-md-3 mb-2 mb-lg-0 mb-md-0 d-flex justify-content-center align-items-center">
            <div className="">
              <img src={key} alt="..." className="img-fluid mb-2" style={{width:"47px"}}/>
              <div>
                <h1 className="mainHeading">Make Google your friend!</h1>
                <h3 style={{ color: "#006db7" }} className="fw-semibold">
                  Double your profit, get new customers
                </h3>
                {/* <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque
                   penatibus et magnis dis parturient montes, nascetur
                </p> */}
                <ul className="heroList">
                  <li className=" pb-1">
                    All your Social Media posts live, in just one click.
                  </li>
                  <li className="pb-1">Through our Advanced SEO Services</li>
                  <li className="pb-1">
                    More traffic, more sales, More profit
                  </li>
                  <li className="pb-1">
                    Use your business website as the front end Let Google do the
                    work for you
                  </li>
                  <li className="pb-1">SEO = Search Engine Optimisation</li>
                  <li className="pb-1">
                    Get the right people do it for you, talk to us today!
                  </li>
                  <li className="pb-1">CTA </li>
                </ul>
                {/* <button
                  type="submit"
                  className="sale-pitch-button btn btn-primary px-4 py-2 rounded-2"
                >
                  Learn More
                </button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5" id="Promo2">
          <div className="col-12 col-md-6 mt-sm-4 mt-md-3 mt-lg-0 d-flex justify-content-center align-items-center ">
            <div className="position-relative">
              <div
                className="position-absolute"
                style={{ top: "5rem", left: "-1rem" }}
              >
                <img
                  src={ContainerBg1}
                  className="img-fluid"
                  alt="Background"
                />
              </div>
              <img src={clock} alt="..." className="img-fluid mb-2" style={{width:"47px"}}/>
              <div>
                <h1 className="mainHeading">Take social media seriously</h1>
                <h3 style={{ color: "#006db7" }} className="fw-semibold">
                  Act today! Get more customers and orders for free
                </h3>
                <ul className="heroList">
                  <li className=" pb-1">
                    There are 5 billion + social media users worldwide
                  </li>
                  <li className="pb-1">
                    Are you missing out on such a potential source of customers?
                  </li>
                  <li className="pb-1">Tap into the power of social media</li>
                  <li className="pb-1">
                    Get the best people work on it for you
                  </li>
                  <li className="pb-1">Talk to us today!</li>
                  <li className="pb-1">CTA </li>
                </ul>
                {/* <button
                  type="submit"
                  className="sale-pitch-button btn btn-primary px-4 py-2 rounded-2"
                >
                  Learn More
                </button> */}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <img src={ContainerImg2} alt="..." className="img-fluid" />
          </div>
        </div>

        <div className="row my-5" id="Promo3">
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <img src={ContainerImg3} alt="..." className="img-fluid" />
          </div>

          <div className="col-12 col-md-6 mt-sm-4 mt-md-3 mt-lg-0 d-flex justify-content-center align-items-center">
            <div className="">
              <img src={Monitor} alt="..." className="img-fluid mb-2" style={{width:"47px"}}/>
              <div>
                <h1 className="mainHeading">
                  Social Media campaigns are tough
                </h1>
                <h3 style={{ color: "#006db7" }} className="fw-semibold">
                  Let us our All in One CRM simplify it for you
                </h3>
                <ul className="heroList">
                  <li className=" pb-1">
                    They give a lot of data, some useful, some not
                  </li>
                  <li className="pb-1">
                    Our CRM centralises data, analyses it and gives you data
                    that you can use
                  </li>
                  <li className="pb-1">
                    Data that can be used to make sales closures
                  </li>
                  <li className="pb-1">
                    Make life easier, try our All in One CRM today!
                  </li>
                  {/* {/ <li className="pb-1">Talk to us today!</li> /} */}
                  <li className="pb-1">CTA </li>
                </ul>
                {/* <button
                  type="submit"
                  className="sale-pitch-button btn btn-primary px-4 py-2 rounded-2"
                >
                  Learn More
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalePitch;

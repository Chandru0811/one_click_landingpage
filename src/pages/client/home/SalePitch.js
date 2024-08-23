import React from "react";
import bgImg from "../../../assets/Rectangle 37.png";
import formBgImg from "../../../assets/Orange Cream Modern Cargo Services Instagram Story (1) 1.png";
import ContainerImg1 from "../../../assets/Illustration.png";
import ContainerImg2 from "../../../assets/Illustration2.png";
import ContainerImg3 from "../../../assets/Illustration3.png";
import key from "../../../assets/Icon.png";
import clock from "../../../assets/Icon2.png";
import Monitor from "../../../assets/Icon3.png";
import ContainerBg1 from "../../../assets/Rectangle 35.png";
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
            Win Social Media in One <span className="fw-light">Click!</span>
          </h4>
          <p
            className="text-muted text-center mt-lg-5 mt-md-3 responsive-text"
            style={{ zIndex: 1 }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur{" "}
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row mt-4 position-relative">
          <div className="position-absolute form-bg-img">
            <img src={formBgImg} className="img-fluid" alt="Background" />
          </div>

          <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex align-items-center justify-content-center">
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
          </div>

          <div className="col-12 col-md-6 d-flex flex-column align-items-center">
            <div className="text-start w-100">
              <h4
                className="fw-bold mt-3 mb-2 text-start "
                style={{ color: "#006db7" }}
              >
                Business dull? Need help?
              </h4>
            </div>

            <div className="sale-pitch-container w-100 text-start mt-2">
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
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
                    placeholder="Email"
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
                    placeholder="Mobile"
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
                    placeholder="Message"
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
                  className="sale-pitch-button btn btn-primary px-5 py-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="col-12 col-md-6  d-flex align-items-center justify-content-center">
            <img src={ContainerImg1} alt="..." className="img-fluid" />
          </div>
          <div className="col-12 col-md-6 col-lg-5 mt-md-3 mb-2 mb-lg-0 mb-md-0 d-flex justify-content-center align-items-center">
            <div className="">
              <img src={key} alt="..." className="img-fluid mb-2" />
              <div>
                <h5 style={{ color: "#006db7" }}>
                  Save time, money and effort!
                </h5>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                </p>
                <button
                  type="submit"
                  className="sale-pitch-button btn btn-primary px-4 py-2 rounded-2"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-5 mt-sm-4 mt-md-3 mt-lg-0 d-flex justify-content-center align-items-center">
            <div className=" position-relative">
              <div
                className="position-absolute "
                style={{ top: "5rem", left: "-1rem" }}
              >
                <img
                  src={ContainerBg1}
                  className="img-fluid"
                  alt="Background"
                />
              </div>
              <img src={clock} alt="..." className="img-fluid mb-2" />
              <div>
                <h5 style={{ color: "#006db7" }}>
                  All your Social Media posts live, in just one click.
                </h5>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                </p>
                <button
                  type="submit"
                  className="sale-pitch-button btn btn-primary px-4 py-2 rounded-2"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <img src={ContainerImg2} alt="..." className="img-fluid" />
          </div>

          <div className="col-12 col-md-6  d-flex align-items-center justify-content-center">
            <img src={ContainerImg3} alt="..." className="img-fluid" />
          </div>

          <div className="col-12 col-md-6 col-lg-5 mt-sm-4 mt-md-3 mt-lg-0 d-flex justify-content-center align-items-center">
            <div className="">
              <img src={Monitor} alt="..." className="img-fluid mb-2" />
              <div>
                <h5 style={{ color: "#006db7" }}>
                  Zero hassle, one click and you are ready{" "}
                </h5>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                </p>
                <button
                  type="submit"
                  className="sale-pitch-button btn btn-primary px-4 py-2 rounded-2"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalePitch;

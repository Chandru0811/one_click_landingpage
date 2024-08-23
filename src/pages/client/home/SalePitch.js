import React from "react";
import bgImg from "../../../assets/Rectangle 37.png";
import formImg from "../../../assets/Illustration.png";
import formBgImg from "../../../assets/Orange Cream Modern Cargo Services Instagram Story (1) 1.png";
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
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 d-flex justify-content-center flex-column align-items-center position-relative">
          <img
            src={bgImg}
            alt="..."
            className="img-fluid position-absolute"
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
      <div className="row mt-4 position-relative">
        <div className="position-absolute form-bg-img" >
          <img src={formBgImg} className="img-fluid" alt="Background" />
        </div>

        <div className="col-12 col-md-6 d-flex justify-content-center flex-column align-items-center mb-4 mb-md-0">
          <img
            src={formImg}
            className="img-fluid "
            alt="Form Image"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        <div className="col-12 col-md-6 d-flex flex-column align-items-center">
          <h4
            className="fw-bold mt-3 mb-2 text-start  "
            style={{ color: "#006db7" }}
          >
            Business dull? Need help?
          </h4>

          <div
            className="sale-pitch-container w-100 text-start mt-2"
            // style={{ maxWidth: "400px" }}
          >
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="sale-pitch-input"
                />
                {formik.errors.name && formik.touched.name && (
                  <div className="sale-pitch-error">{formik.errors.name}</div>
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
                  className="sale-pitch-input"
                />
                {formik.errors.email && formik.touched.email && (
                  <div className="sale-pitch-error">{formik.errors.email}</div>
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
                  className="sale-pitch-input"
                />
                {formik.errors.mobile && formik.touched.mobile && (
                  <div className="sale-pitch-error">{formik.errors.mobile}</div>
                )}
              </div>

              <div className="mb-3">
                <textarea
                  name="message"
                  placeholder="Message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  className="sale-pitch-textarea"
                />
                {formik.errors.message && formik.touched.message && (
                  <div className="sale-pitch-error">
                    {formik.errors.message}
                  </div>
                )}
              </div>

              <button type="submit" className="sale-pitch-button px-5">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalePitch;

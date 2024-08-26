import React, { useState } from "react";
import letChart from "../../assets/letsChart.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbPhone } from "react-icons/tb";
import { PiBuildingsBold } from "react-icons/pi";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import toast from "react-hot-toast";
const validationSchema = yup.object().shape({
  first_name: yup.string().required("*First Name is required"),
  email: yup.string().email().required("*work Email is required"),
  description_info: yup.string().required("*Message is required"),
});

function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      company_id: 2,
      first_name: "",
      email: "",
      description_info: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (data) => {
      console.log("One lcik Lead Data:", data);
        setIsSubmitting(true);
      try {
        const response = await axios.post(
          `https://crmlah.com/ecscrm/api/newClient`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 201) {
          toast.success("Message Send Successfully");
        } else {
          toast.error("Message Not Send");
        }
      } catch (error) {
        toast.success("Message Not Send");
      }
      finally {
          setIsSubmitting(false); // Re-enable button after submission
        }
    },
  });
  return (
    <div className="container my-5">
      <div className="row">
        {/* Form Section */}
        <div className="col-md-6 border-1 rounded-5 bg-white p-5">
          <span className="fw-medium" style={{ color: "#FF7F2A" }}>
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
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group my-3">
              <label htmlFor="first_name" className="my-2">
                Name<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control bg-light"
                name="first_name"
                id="first_name"
                {...formik.getFieldProps("first_name")}
              />
              {formik.touched.first_name && formik.errors.first_name ? (
                <div className="text-danger">{formik.errors.first_name}</div>
              ) : null}
            </div>
            <div className="form-group my-3">
              <label htmlFor="email" className="my-2">
                Work Email<span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="form-control bg-light"
                name="email"
                id="email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="form-group my-3">
              <label htmlFor="description_info" className="my-2">
                Message<span className="text-danger">*</span>
              </label>
              <textarea
                className="form-control bg-light"
                rows="6"
                {...formik.getFieldProps("description_info")}
                name="description_info"
                id="description_info"
              ></textarea>
              {formik.touched.description_info &&
              formik.errors.description_info ? (
                <div className="text-danger">
                  {formik.errors.description_info}
                </div>
              ) : null}
            </div>
            <button
              type="submit"
              className="btn btn-primary bg-gradient w-100 my-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="col-md-6 text-center">
          <div className="row">
            <img src={letChart} alt="Contact" className="img-fluid mb-3 mx-1" style={{borderRadius:"35px"}} />
          </div>

          <div className="container">
            <div className="card p-3 border-0 rounded-5">
              <div className="row bg-light rounded-4 p-3 m-2">
                <a
                  href="mailTo:info@ecscloudinfotech.com"
                  className=" text-decoration-none text-black"
                  target="_blank"
                >
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="col-3 text-center ">
                      <p className="rounded-circle text-bg-primary bg-opacity-10  me-4 py-3">
                        <MdOutlineMailOutline className="text-center text-primary fs-1" />
                      </p>
                    </div>
                    <div className="col-9 text-start">
                      <h5 className="text-decoration-none text-black">Email</h5>
                      <p>info@ecscloudinfotech.com</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="row bg-light rounded-4 p-3 m-2">
                <a
                  href="tel:6588941306"
                  className="text-decoration-none text-black"
                >
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="col-3 text-center">
                      <p className="rounded-circle text-bg-primary bg-opacity-10  me-4 py-3">
                        <TbPhone className="text-center text-primary fs-1" />
                      </p>
                    </div>

                    <div className="col-9 text-start">
                      <h5>Phone</h5>
                      <p>+65 8894 1306</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="row bg-light rounded-4 p-3 m-2">
                <a
                  href="https://www.google.com/maps/place/The+Alexcier/@1.2916793,103.8137617,17z/data=!3m2!4b1!5s0x31da1a2cf1b2be13:0x7b0f9d88a36fdfbb!4m6!3m5!1s0x31da1bb95520771b:0xf2b9dfa378aa9a6e!8m2!3d1.2916793!4d103.8137617!16s%2Fg%2F11gyxjfkjk?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
                  className=" text-decoration-none text-black"
                  target="_blank"
                >
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="col-3 text-center">
                      <p className="rounded-circle text-bg-primary bg-opacity-10  me-4 py-3">
                        <PiBuildingsBold className="text-center text-primary fs-1" />
                      </p>
                    </div>

                    <div className="col-9 text-start">
                      <h5>Address</h5>
                      <p>
                        The Alexcier, 237 Alexandra Road, #04-10,
                        Singapore-159929.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

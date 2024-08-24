import React from "react";
import { TbWorld } from "react-icons/tb";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLocationArrow } from "react-icons/fa6";
import { LiaCopyrightSolid } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <section className="footerBg">
      <div className="container-fluid">
        <div className="row pt-5">
          <div className="col-md-4 col-12 mb-4">
            <h2 className="fw-bold">ECS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut
              id nisl tellus rhoncus, imperdiet.
            </p>
          </div>
          <div className="col-md-5 col-8 col-lg-3 mb-3">
            <h5 className="mb-3 fw-bold">Our Services</h5>
            <p>One Click Social Media Posting</p>
            <p>SEO Services</p>
            <p>Social Media Marketing</p>
            <p>CRM</p>
          </div>
          {/* <div className="col-md-4 col-6 col-lg-2  mb-3">
            <h5 className="mb-3 fw-bold">Pages</h5>
            <p>Contact Us</p>
            <p>Register</p>
            <p>Login</p>
            <p>Book Demo</p>
          </div> */}
          <div className="col-md-6 col-12 col-lg-4 mb-3">
            <h5 className="mb-3 fw-bold">Contact</h5>
            <a
              href="tel:6588941306"
              className=" text-decoration-none text-white"
            >
              <div className="d-flex mb-3 align-items-center">
                <span className="me-2 mediaIconBg">
                  <FaPhoneAlt />
                </span>
                <h3 className="fw-bold mb-0">+65 889 1306</h3>
              </div>
            </a>

            <a
              href="mailTo:info@ecscloudinfotech.com"
              className=" text-decoration-none text-white"
              target="_blank"
            >
              <div className="d-flex mb-3 align-items-center">
                <span className="mediaIconBg1 me-2">
                  <SiGmail />
                </span>
                <p className="mb-0">info@ecscloudinfotech.com</p>
              </div>
            </a>

            <a
              href="https://www.google.com/maps/place/The+Alexcier/@1.2916793,103.8137617,17z/data=!3m2!4b1!5s0x31da1a2cf1b2be13:0x7b0f9d88a36fdfbb!4m6!3m5!1s0x31da1bb95520771b:0xf2b9dfa378aa9a6e!8m2!3d1.2916793!4d103.8137617!16s%2Fg%2F11gyxjfkjk?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
              className=" text-decoration-none text-white"
              target="_blank"
            >
              <div className="d-flex align-items-start">
                <span className="mediaIconBg1 me-2">
                  <FaLocationArrow />
                </span>
                <p className="mb-0">The Alexcier, 237 Alexandra Road, #04-10</p>
              </div>
            </a>

            <div className="d-flex flex-wrap mt-3">
              <a href="https://ecscloudinfotech.com/ecs/" className="text-decoration-none text-white" target="_blank">
              <span className="mediaIconBg">
                <TbWorld />
              </span>
              </a>
              
              <a href="https://www.facebook.com/raaj.yuven.3/" className="ms-2 text-decoration-none text-white" target="_blank">
              <span className="mediaIconBg">
                <FaFacebookF />
              </span>
              </a>

              <a href="https://x.com/ecscloudinfote2" className="ms-2 text-decoration-none text-white" target="_blank">
              <span className="mediaIconBg">
              <FaXTwitter />
              </span>
              </a>

             <a href="https://www.google.co.in/" className="ms-2 text-decoration-none text-white" target="_blank">
              <span className="mediaIconBg">
              <FaGoogle />
              </span>
              </a>
              
              <a href="https://www.linkedin.com/in/ecscloudinfotech/" className="ms-2 text-decoration-none text-white" target="_blank">
              <span className="mediaIconBg">
              <FaLinkedinIn />
              </span>
              </a>
            </div>
          </div>

          <hr className="mb-0" />

          <div className="footer-copyright py-2 d-flex flex-column flex-md-row align-items-center justify-content-center">
            <LiaCopyrightSolid />
            <p className="mb-0 ms-2">
              2024 | All Rights Reserved at{" "}
              <span className="footerText">ECS Cloud Infotech</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

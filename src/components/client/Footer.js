import React from 'react';
import { TbWorld } from "react-icons/tb";
import { FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLocationArrow } from "react-icons/fa6";
import { LiaCopyrightSolid } from "react-icons/lia";

function Footer() {
  return (
    <section className="footerBg">
      <div className="container-fluid">
        <div className="row pt-5">

          <div className="col-md-3 col-12 mb-4">
            <h2 className="fw-bold">ECS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut id nisl tellus rhoncus, imperdiet.</p>
          </div>
          <div className="col-md-4 col-8 col-lg-3 mb-3">
            <h5 className="mb-3 fw-bold">Our Services</h5>
            <p>One Click Social Media Posting</p>
            <p>SEO Services</p>
            <p>Social Media Marketing</p>
            <p>CRM</p>
          </div>
          <div className="col-md-4 col-6 col-lg-2  mb-3">
            <h5 className="mb-3 fw-bold">Pages</h5>
            <p>Contact Us</p>
            <p>Register</p>
            <p>Login</p>
            <p>Book Demo</p>
          </div>
          <div className="col-md-5 col-12 col-lg-4 mb-3">
            <h5 className="mb-3 fw-bold">Contact</h5>
            <div className="d-flex mb-3 align-items-center">
              <span className="me-2 mediaIconBg"><FaPhoneAlt /></span>
              <h3 className="fw-bold mb-0">+65 889 1306</h3>
            </div>
            <div className="d-flex mb-3 align-items-center">
              <span className="mediaIconBg1 me-2"><SiGmail /></span>
              <p className="mb-0">info@ecscloudinfotech.com</p>
            </div>
            <div className="d-flex align-items-start">
              <span className="mediaIconBg1 me-2"><FaLocationArrow /></span>
              <p className="mb-0">The Alexcier, 237 Alexandra Road, #04-10</p>
            </div>
            <div className="d-flex flex-wrap mt-3">
              <span className="mediaIconBg">
                <TbWorld />
              </span>
              <span className="mediaIconBg mx-3">
                <FaFacebookF />
              </span>
              <span className="mediaIconBg">
                <FaTwitter />
              </span>
              <span className="mediaIconBg mx-3">
                <FaGoogle />
              </span>
              <span className="mediaIconBg">
                <FaLinkedinIn />
              </span>
            </div>
          </div>

          <hr className="mb-0" />

          <div className="footer-copyright py-2 d-flex flex-column flex-md-row align-items-center justify-content-center">
            <LiaCopyrightSolid />
            <p className="mb-0 ms-2">2024 | All Rights Reserved at <span className="footerText">ECS Cloud Infotech</span></p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Footer;

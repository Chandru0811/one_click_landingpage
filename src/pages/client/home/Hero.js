import React from "react";
import Decoration from "../../../assets/decoration.svg";
import HeroImage from "../../../assets/Purple Pink Gradient Colorful Social media marketing Instagram Post (5).png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container-fluid heroBackground py-5" id="Hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 d-flex flex-column justify-content-center ">
            <h1 className="mainHeading">
              Digital Marketing Services in Singapore
            </h1>
            <div className="">
              <h1 className="oneClick mb-0">
                One Click
                <span className="imageText">
                  <img
                    className="img-fluid"
                    alt="decoration_image"
                    width={35}
                    height={35}
                    src={Decoration}
                  />
                </span>
              </h1>
              <h5 className="m-0 text-end liveTag fw-bold pe-2" style={{ color: "#0061fe" }}>
                & Live
              </h5>
            </div>
            <h2 className="subHeadingHero">
              Social Media <br />
              Posting Package
            </h2>

            <ul className="heroList">
              <li className="pt-4 pb-2">
                All your Social Media posts live, in just one click.
              </li>
              <li className="pb-2">Save time, money and effort!</li>
              <li className="pb-2">Zero hassle, one click and you are ready</li>
              <li className="pb-2">Specially designed, home-grown tool</li>
              <li className="pb-2">
                Designed to make life easier for small and medium business
                owners
              </li>
              <li className="pb-2">
                Helps you achieve More Sales, More profit!
              </li>
            </ul>
            <Link to={"/contactUs"}>
              <button className="btn btn-primary primaryButton">
                Let's Talk
              </button>
            </Link>
          </div>
          <div className="col-md-6 col-12 d-flex align-items-center justify-content-center">
            <img className="img-fluid" src={HeroImage} alt="hero_Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

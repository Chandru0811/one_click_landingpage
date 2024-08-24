import React from "react";
import Decoration from "../../../assets/decoration.svg";
import HeroImage from "../../../assets/heroImage.svg";

function Hero() {
  return (
    <div className="container-fluid heroBackground py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 d-flex flex-column justify-content-center">
            <h1 className="mainHeading">
              Digital Marketing Services in Singapore
            </h1>
            <h1 className="oneClick">
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
              <li className="pb-2">Designed to make life easier for small and medium business owners</li>
              <li className="pb-2">Helps you achieve More Sales, More profit!</li>
            </ul>
            <button className="btn btn-primary primaryButton" >
              Get Started
            </button>
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

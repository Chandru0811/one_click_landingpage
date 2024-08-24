import React from "react";
import { Link } from "react-router-dom";
function FinalAttempt() {
  return (
    <div
      className="container-fluid pb-5 finalAttemptBackground"
      style={{ backgroundColor: "#EBF7FF" }}
    >
      <div className="row py-3 ">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div className="text-center mt-5">
            <h2 className="fw-fw-semibold" style={{ color: "#0f3287" }}>
              Business dull? Need help?
            </h2>
            <h2 className="fw-bold" style={{ color: "#0f3287" }}>
              Are you looking for a fresh start?
            </h2>
            <p>
              Don’t want to invest too much? Let us help you!,
              <br /> Get new customers, new orders, better sales figures. <br />
              Zero hassles, zero technical knowledge required, <br />
              100% stress free, Use of Google & Social Media to succeed
            </p>
            <div className="d-flex justify-content-center gap-4 align-items-center mt-5">
              <Link to={`/contactUs`}>
                <button
                  type="button"
                  className="sale-pitch-button btn btn-primary px-4 py-2 rounded-2"
                >
                  Talk to us!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinalAttempt;

import React from "react";
function FinalAttempt() {
  return (
    <div
      className="container-fluid pb-5 finalAttemptBackground"
      style={{ backgroundColor: "#EBF7FF" }}
    >
      <div className="row py-3 ">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div className="text-center mt-5">
            <h2 className="fw-bold" style={{ color: "#0f3287" }}>
              Let's start growing your business
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Diam ut id nisl tellus rhoncus, imperdiet
            </p>
            <div className="d-flex justify-content-center gap-4 align-items-center mt-5">
              <button
                type="submit"
                className="sale-pitch-button btn btn-primary px-4 py-2 rounded-2"
              >
                Register
              </button>
              <button
                type="submit"
                className=" btn btn-outline-primary px-4 py-2 rounded-2"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinalAttempt;

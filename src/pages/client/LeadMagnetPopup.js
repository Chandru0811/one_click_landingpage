import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const LeadMagnetPopup = () => {
  // Initialize state based on localStorage value
  const [showPopup, setShowPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(
    localStorage.getItem("hasVisited") === "true"
  );

  useEffect(() => {
    if (!hasVisited) {
      const handleMouseLeave = (e) => {
        if (e.clientY < 0) {
          setShowPopup(true);
          setHasVisited(true);
          localStorage.setItem("hasVisited", "true"); // Store as string
        }
      };

      document.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        document.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [hasVisited]);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <Modal
          show={showPopup}
          onHide={closePopup}
          centered
          className="modelContent"
        >
          <Modal.Header closeButton>
            <Modal.Title className="leadMagnetHeading">
              Let us help you.
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="pt-0">
            <p className="mb-0 leadMagnetSubHeading">
              Business dull? Need more orders?
            </p>
            <p className="leadMagnetParagraph">
              Traffic that you can convert into new customers, orders, improved
              sales figures and profit.
            </p>
            <div class="mb-3">
              <label
                for="exampleFormControlInput1"
                className="form-label leadMagenetLable"
              >
                Email
              </label>
              <input
                type="email"
                className="form-control leadMagenetInput"
                placeholder="What's your email?"
              />
            </div>
            <p className="leadMagnetParagraph">
              By Submiting my personal data, I agree the Terms & Conditions of
              ECS Cloud Infotech Pvt Ltd
            </p>
            <Button
              variant="primary"
              className="leadMagnetButton"
              onClick={closePopup}
            >
              Submit
            </Button>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default LeadMagnetPopup;

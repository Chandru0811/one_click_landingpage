import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import success from "../../assets/Success.mp4";
import { IoArrowBack } from "react-icons/io5";

const Success = () => {
  const [showPopup, setShowPopup] = useState(false);

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
          className="modelContent text-center"
        >
          <Modal.Header closeButton className="successHeading">
            <Modal.Title style={{ fontSize: "28px" }}>
              That's all required
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="pt-0">
            <video
              src={success}
              alt="success"
              autoPlay
              loop
              muted
              style={{ width: "300px", height: "200px" }}
            />
            <p className="mb-0 SuccessMagnetSubHeading pb-4">
              We will get back you soon!
            </p>

            <Button
              variant="success"
              className="successMagnetButton"
              onClick={closePopup}
            >
              <IoArrowBack /> Back to Home
            </Button>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default Success;

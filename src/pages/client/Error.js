import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import error from "../../assets/error.mp4";
import { IoArrowBack } from "react-icons/io5";

const Error = () => {
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
          <Modal.Header closeButton className="errorHeading">
            <Modal.Title style={{ fontSize: "28px" }}>
              There was an error
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="pt-0">
            <video
              src={error}
              alt="error"
              autoPlay
              loop
              muted
              style={{ width: "300px", height: "200px" }}
            />
            <p className="mb-0 errorMagnetSubHeading pb-4">We are sorry !</p>
            <p className="mb-0 errorMagnetSubHeading pb-2">
              You can reach us on
            </p>
            <p className="mb-0 errorMobile pb-4">+65 1234 1234</p>

            <Button
              variant="danger"
              className="errorMagnetButton"
              onClick={closePopup}
            >
              <IoArrowBack /> Contact Page
            </Button>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default Error;

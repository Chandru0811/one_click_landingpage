import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ErrorMsg from "../../assets/ErrorMsg.png";
import { IoArrowBack } from "react-icons/io5";
import { MdOutlineError } from "react-icons/md";
import { Link } from "react-router-dom";

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
          <Modal.Header closeButton className="errorHeading shadow-none ">
            <Modal.Title style={{ fontSize: "28px" }}>
              There was an error
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="pt-0">
            {/* <img src={ErrorMsg} alt="..." className="img-fluid my-2" width={"100px"}/> */}
            <MdOutlineError style={{ color: "rgb(255, 80, 80)", fontSize: "100px" }} />
            <p className="mb-0 errorMagnetSubHeading pb-4">We are sorry !</p>
            <p className="mb-0 errorMagnetSubHeading pb-2">
              You can reach us on
            </p>
            <p className="mb-0 errorMobile pb-4">+65 8894 1306</p>

            <Link to={"/contactUs"}>
              <button
                className="btn btn-primary rounded-5"
                onClick={closePopup}
                style={{ background: "" }}
              >
                <IoArrowBack /> Contact Page
              </button>
            </Link>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default Error;

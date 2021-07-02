import React, { useState } from "react";
import { Button, Form, Image, Modal } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import popupimg from "../assets/welcome.jpg";
import "./Popup.css";
function Popup() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  window.addEventListener("load", () => {
    setTimeout(function () {
      handleShow(true);
    }, 10000);
  });

  return (
    <div>
      {
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton className="bg-primary">
            <Modal.Title className="text-white">
              <h5>Hello, Subscribe To Our Newsletter </h5>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label className="text-justify">
                  Join our subscribers list to get the latest news, updates and
                  special offers delivered directly in your inbox.
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Image
                src={popupimg}
                height="300px"
                width="370px"
                className="rounded-circle ml-lg-5"
              />
              <Button type="submit" className="mb-2">
                Subscribe
                <AiOutlineMail className="ml-3" />
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      }
      <div className="btn-feedback">
        <Button variant="info" className="rotate" onClick={handleShow}>
          Newsletter
        </Button>
      </div>
    </div>
  );
}

export default Popup;

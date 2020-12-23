import React, { useState } from "react";
import { Button, Form, Modal, Col } from "react-bootstrap";
import "./Popup.css";
function Popup() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      {
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Subscribe To Our Newsletter</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row className="align-items-center">
                <Form.Group>
                  <Form.Label>
                    Join our subscribers list to get the latest news, updates
                    and special offers delivered directly in your inbox.
                  </Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Button type="submit" className="mb-2">
                  Subscribe
                </Button>
              </Form.Row>
            </Form>
          </Modal.Body>
        </Modal>
      }
      <div className="btn-feedback">
        <Button variant="primary" className="rotate" onClick={handleShow}>
          Feedback
        </Button>
      </div>
    </div>
  );
}

export default Popup;

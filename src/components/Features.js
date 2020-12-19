import React, { useState } from "react";
import { Card, Button, Modal, Form, Col } from "react-bootstrap";
import "./Features.css";
import basic from "../assets/basic.JPG";
import standard from "../assets/standard.JPG";
import premium from "../assets/premium.JPG";
function Features() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      {
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={modalShow}
          onHide={() => setModalShow(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Connect us regarding our services
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Full Name" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Organization Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Organization Name"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label
                    className="mr-2"
                    htmlFor="inlineFormCustomSelectPref"
                  >
                    Preference
                  </Form.Label>
                  <Form.Control
                    as="select"
                    className="mr-2"
                    id="inlineFormCustomSelectPref"
                    custom
                  >
                    <option value="0">--Purpose--</option>
                    <option value="1">Enquiry</option>
                    <option value="2">Partner with us</option>
                    <option value="4">Support</option>
                    <option value="5">Feedback</option>
                    <option value="6">Others</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Telephone Number</Form.Label>
                  <Form.Control type="tel" placeholder="Telephone Number" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" placeholder="Message" />
                </Form.Group>
              </Form.Row>
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setModalShow(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
      }
      <div className="bg-img p-5">
        <div>
          <h1 className="text-center w-100 mt-5 text-uppercase">
            Our Offerings
          </h1>
        </div>
      </div>
      <div className="grid-3 container my-5">
        <div className="bg-white shadow-lg rounded features">
          <Card border="success">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#24AE21"
                fill-opacity="1"
                d="M0,192L48,197.3C96,203,192,213,288,234.7C384,256,480,288,576,298.7C672,309,768,299,864,277.3C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
            <Card.Img
              variant="top"
              src={basic}
              className="rounded-circle p-4 m-1"
              height="100%"
              width="100%"
            />
            <Card.Body>
              <Card.Title className="text-center text-success">
                <h3>Basic</h3>
              </Card.Title>
              <Card.Text>
                <ul className="container">
                  <li>Purchase/Sale Order </li>
                  <li>Job card</li>
                  <li>BOM Items Purchase Order</li>
                  <li>Dispatch- Challans</li>
                </ul>
              </Card.Text>
              <Button
                className="buynow"
                variant="success"
                onClick={() => setModalShow(true)}
              >
                Buy Now
              </Button>
            </Card.Body>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
              <path
                fill="#24AE21"
                fill-opacity="1"
                d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </Card>
        </div>
        <div className="bg-white shadow-lg rounded features">
          <Card border="warning">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#ffd700"
                fill-opacity="1"
                d="M0,192L48,197.3C96,203,192,213,288,234.7C384,256,480,288,576,298.7C672,309,768,299,864,277.3C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
            <Card.Img
              variant="top"
              src={standard}
              className="rounded-circle p-4 m-1"
              height="100%"
              width="100%"
            />
            <Card.Body>
              <Card.Title className="text-center text-warning">
                <h3>Standard</h3>
              </Card.Title>
              <Card.Text>
                <ul className="container py-2">
                  <li>Paper Requisition.</li>
                  <li>Paper Purchase Order.</li>
                </ul>
              </Card.Text>
              <Button
                variant="warning"
                className="buynow text-white mt-5"
                onClick={() => setModalShow(true)}
              >
                Buy Now
              </Button>
            </Card.Body>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
              <path
                fill="#ffd700"
                fill-opacity="1"
                d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </Card>
        </div>
        <div className="bg-white shadow-lg rounded features">
          <Card border="danger">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#F32013"
                fill-opacity="1"
                d="M0,192L48,197.3C96,203,192,213,288,234.7C384,256,480,288,576,298.7C672,309,768,299,864,277.3C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
            <Card.Img
              variant="top"
              src={premium}
              className="rounded-circle p-4 m-1"
              height="100%"
              width="100%"
            />
            <Card.Body>
              <Card.Title className="text-center text-danger">
                <h3>Premium</h3>
              </Card.Title>
              <Card.Text>
                <ul className="container">
                  <li>Quotations,Costing & Estimation</li>
                  <li>Job Tracking & Scheduling.</li>
                  <li>Performa Invoice</li>
                  <li>Purchase & Sale Return.</li>
                </ul>
              </Card.Text>
              <Button
                variant="danger buynow"
                onClick={() => setModalShow(true)}
              >
                Buy Now
              </Button>
            </Card.Body>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
              <path
                fill="#F32013"
                fill-opacity="1"
                d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Features;

import React, { useState } from "react";
import { Card, Button, Modal, Form, Col, Table } from "react-bootstrap";
import "./Features.css";
import basic from "../assets/basic.png";
import standard from "../assets/standard.png";
import premium from "../assets/premium.png";
function Features() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      {
        <Modal
          size="lg"
          className="modal"
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
      <div className="bg-img py-5">
        <div className="grid-3 container my-5">
          <div className="bg-white shadow-lg rounded features b-f">
            <Card className="card">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  //
                  className="basic"
                  fill-opacity="1"
                  d="M0,192L48,197.3C96,203,192,213,288,234.7C384,256,480,288,576,298.7C672,309,768,299,864,277.3C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                ></path>
              </svg>
              <Card.Img
                variant="top"
                src={basic}
                className="rounded-circle icon-3"
              />
              <Card.Body>
                <Card.Title className="text-center">
                  <h3 style={{ color: "#43b9f3" }}>Basic</h3>
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
                  className="buynow buynow-basic"
                  onClick={() => setModalShow(true)}
                >
                  Buy Now
                </Button>
              </Card.Body>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
                <path
                  // fill="#24AE21"
                  className="basic"
                  fill-opacity="1"
                  d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </Card>
          </div>
          <div className="bg-white shadow-lg rounded features s-f">
            <Card className="card">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  className="standard"
                  // fill="#ffd700"
                  fill-opacity="1"
                  d="M0,192L48,197.3C96,203,192,213,288,234.7C384,256,480,288,576,298.7C672,309,768,299,864,277.3C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                ></path>
              </svg>
              <Card.Img
                variant="top"
                src={standard}
                className="rounded-circle icon-3"
                height="100%"
                width="100%"
              />
              <Card.Body>
                <Card.Title className="text-center">
                  <h3 style={{ color: " #0276e1" }}>Standard</h3>
                </Card.Title>
                <Card.Text>
                  <ul className="container py-4">
                    <li>Paper Requisition.</li>
                    <li>Paper Purchase Order.</li>
                  </ul>
                </Card.Text>
                <Button
                  className="buynow text-white buynow-standard"
                  onClick={() => setModalShow(true)}
                >
                  Buy Now
                </Button>
              </Card.Body>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
                <path
                  // fill="#ffd700"
                  className="standard"
                  fill-opacity="1"
                  d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </Card>
          </div>
          <div className="bg-white shadow-lg rounded features p-f">
            <Card className="card">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  // fill="#F32013"
                  className="premium"
                  fill-opacity="1"
                  d="M0,192L48,197.3C96,203,192,213,288,234.7C384,256,480,288,576,298.7C672,309,768,299,864,277.3C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                ></path>
              </svg>
              <Card.Img
                variant="top"
                src={premium}
                className="rounded-circle icon-3"
                height="100%"
                width="100%"
              />
              <Card.Body>
                <Card.Title className="text-center">
                  <h3 style={{ color: "#064c8a" }}>Premium</h3>
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
                  className="buynow buynow-premium"
                  onClick={() => setModalShow(true)}
                >
                  Buy Now
                </Button>
              </Card.Body>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
                <path
                  // fill="#F32013"
                  className="premium"
                  fill-opacity="1"
                  d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </Card>
          </div>
        </div>
        <div className="container my-5 py-2">
          <h4 className="text-center">Prices</h4>
          <Table striped bordered hover size="sm" className="table">
            <thead>
              <tr>
                <th colspan={4}>Choose Additional Featues If Required</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Customization per feature</td>
                <td>Rs. 9999</td>
                <td>Single to Multiuser Upgrade(4 User Free)</td>
                <td>Rs. 12000</td>
              </tr>
              <tr>
                <td>Costing Module</td>
                <td>Rs. 9999</td>
                <td>Additional User</td>
                <td>Rs. 3999</td>
              </tr>
              <tr>
                <td>
                  Forecasting and Supplement order planning management
                  (Intergrated with Busy)
                </td>
                <td>Rs. 19999</td>
                <td>Additional 4 User pack for Multi-user operations</td>
                <td>Rs. 11999</td>
              </tr>
              <tr>
                <td>Work flow approval</td>
                <td>Rs. 4999</td>
                <td>Additional Company</td>
                <td>Rs. 4999</td>
              </tr>
              <tr>
                <td>Editorial status Tracker</td>
                <td>Rs. 39999</td>
                <td>
                  Annual subscription for user version upgrade including
                  support(Basic Price)
                </td>
                <td>25%</td>
              </tr>
              <tr>
                <td>Email/SMS Integration</td>
                <td>Rs. 9999</td>
                <td>
                  Branch/Reference discount applicable from 2nd branch onwards
                </td>
                <td>20%</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="container my-5 py-2">
          <h4 className="text-center">Prices</h4>
          <Table striped bordered hover size="sm" className="table">
            <thead>
              <tr>
                <th colspan={4}>Additional Modules and Plugins</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Remote SQL Server Hosting as peractual</td>
                <td>As per Actual</td>
                <td>Basic Installation(Single & Multi user)</td>
                <td>Rs. 10000</td>
              </tr>
              <tr>
                <td>Busy Software</td>
                <td>AS per Actual</td>
                <td>Subscription module (single user annual)</td>
                <td>Rs. 18000</td>
              </tr>
              <tr>
                <td>Busy Intergration module</td>
                <td>Rs. 19999</td>
                <td>Subscription module (multi user annual)</td>
                <td>Rs. 30000</td>
              </tr>
              <tr>
                <td>
                  Branch Management (Remote Connectibity) Automatic
                  Synchronization of data & availability based on user rights
                </td>
                <td>Rs. 19999</td>
                <td>Dipatch Management</td>
                <td>Rs. 75000</td>
              </tr>
              <tr>
                <td colSpan={2}>CRM Management</td>
                <td colSpan={2}>Rs. 30000</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Features;

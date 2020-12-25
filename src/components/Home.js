import React, { useState, useEffect, useRef } from "react";
import lottie from "lottie-web";
import {
  Button,
  Image,
  Modal,
  Col,
  Form,
  Carousel,
  Card,
} from "react-bootstrap";
import Fade from "react-reveal/Fade";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import avatar5 from "../assets/avatar5.png";
import avatar6 from "../assets/avatar6.png";
import avatar7 from "../assets/avatar7.png";
import avatar8 from "../assets/avatar8.png";
import customer1 from "../assets/customer1.jpg";
import customer2 from "../assets/customer2.jpg";
import customer3 from "../assets/customer3.jpg";
import customer4 from "../assets/customer4.jpg";
import customer5 from "../assets/image008.jpg";
import customer6 from "../assets/image017.jpg";
import customer7 from "../assets/image009.jpg";
import customer8 from "../assets/image010.jpg";
import customer9 from "../assets/image011.jpg";
import customer10 from "../assets/image012.jpg";
import customer11 from "../assets/image013.jpg";
import customer12 from "../assets/image014.jpg";
import customer13 from "../assets/image015.jpg";
import customer14 from "../assets/image016.jpg";
import customer15 from "../assets/image025.jpg";
import customer16 from "../assets/image026.jpg";
import customer17 from "../assets/image041.jpg";
import "./Footer";
import {
  FcAcceptDatabase,
  FcApproval,
  FcCallback,
  FcDebt,
  FcFlowChart,
  FcProcess,
  FcRatings,
  FcSalesPerformance,
  FcSms,
  FcSurvey,
  FcTemplate,
  FcTodoList,
  FcWorkflow,
} from "react-icons/fc";
import home from "../assets/home.jpg";
import modules from "../assets/modules.jpg";
import testimonals from "../assets/4393.jpg";
import section from "../assets/showcase.svg";
import "./Home.css";
import MyMapComponent from "./Map";
function Home(props) {
  const [smShow, setSmShow] = useState(false);
  const container = useRef(null);
  // console.log(props);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/team.json"),
    });
  }, []);
  return (
    <div>
      <div className="grid-2 mt-5">
        <div className="container text-center mt-5">
          <h1 className="container mt-5">Easy Info Solutions International</h1>
          <p className="container">
            <i className="text-info">
              (Printing & Publishing MIS Software Expert)
            </i>
          </p>
          <p className="container text-primary">
            <q>Printing & Publishing</q>
          </p>
          <p className="container">
            <i className="text-primary">
              Needs Much More than A Standard Accounting Software
            </i>
          </p>
          <Button className="button" onClick={() => setSmShow(true)}>
            <h5 className="mt-1">Contact Us</h5>
          </Button>
        </div>
        {
          <Modal
            size="sm"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Contact Number
                <FcCallback className="ml-4" />
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>Helpline no : +91 11-71862265</Modal.Body>
          </Modal>
        }
        <div className="container my-5">
          <div ref={container}></div>
        </div>
      </div>

      <section className="p-4 grid-2 bg-section">
        <div className="container">
          <Image src={section} className="home2" alt="Section" />
        </div>
        <div className="container mt-5 text-white p-5">
          <Fade right>
            <h3 className="container mt-2">
              The Printer & Publisher Complete Management Solution for Printing
              Press & Publishing Industry
            </h3>
            <p className="container mt-5">
              Easy Publish (MIS) Software is an effective tool to organize,
              evaluate and manage departments within an organization. Deals as
              Printing & Publication Software Experts. This software resolves
              your daily routine problems with in the fraction of seconds.
            </p>
          </Fade>
        </div>
      </section>

      <div className="container text-center mt-5 heading">
        <h1>Modules</h1>
      </div>
      <div className="container grid-2">
        <Fade left>
          <div className="container work">
            <Image src={modules} className="home3" />
          </div>
        </Fade>
        <Fade right>
          <div className="container work">
            <Image src={testimonals} className="home3" />
          </div>
        </Fade>
      </div>
      <Fade bottom>
        <section className="container grid-6 mt-5">
          <div className="bg-white shadow-lg rounded  text-center modules">
            <FcSurvey className="container m-logo" />
            <h5>Masters & Cataloging</h5>
          </div>
          <div className="bg-white shadow-lg rounded  text-center modules">
            <FcSms className="container m-logo" />
            <h5>Quotation/Estimation</h5>
          </div>
          <div className="bg-white shadow-lg rounded  text-center modules">
            <FcFlowChart className="container m-logo" />
            <h5>Order Management</h5>
          </div>
          <div className="bg-white shadow-lg rounded  text-center modules">
            <FcDebt className="container m-logo" />
            <h5>Job-card/Sale/ Purchase Order</h5>
          </div>
          <div className="bg-white shadow-lg rounded  text-center modules">
            <FcApproval className="container m-logo" />
            <h5>Approval Memo</h5>
          </div>
          <div className="bg-white shadow-lg rounded  text-center modules">
            <FcSalesPerformance className="container m-logo" />
            <h5>Sale/Purchase</h5>
          </div>
          <div className="bg-white shadow-lg rounded  text-center modules">
            <FcAcceptDatabase className="container m-logo" />
            <h5>Dispatch</h5>
          </div>
          <div className="bg-white shadow-lg rounded  text-center modules">
            <FcWorkflow className="container m-logo" />
            <h5> Automate Invoicing</h5>
          </div>
          <div className="bg-white shadow-lg rounded  text-center modules">
            <FcProcess className="container m-logo" />
            <h5>Inventory Management (MIS)</h5>
          </div>
          <div className="bg-white shadow-lg rounded  text-center modules">
            <FcRatings className="container m-logo" />
            <h5>Paper Stock Ledger</h5>
          </div>
          <div className="bg-white shadow-lg rounded  text-center modules">
            <FcTemplate className="container m-logo" />
            <h5>Accounting</h5>
          </div>
          <div className="bg-white shadow-lg rounded  text-center modules">
            <FcTodoList className="container m-logo" />
            <h5>Statements</h5>
          </div>
        </section>
      </Fade>
      <section className="testimonals mt-5">
        <div className="container" id="testimonials">
          <h1>Testimonials</h1>
          <p>See what our client's says..</p>
          <div className="carousel-center">
            <Carousel className="carousel">
              <Carousel.Item interval={1000}>
                <Card className="card">
                  <Card.Img
                    variant="top"
                    src={avatar1}
                    className="rounded-circle p-5"
                  />
                  <Card.Body>
                    <Card.Title className="text-center">
                      MD,Avinash Thakur
                    </Card.Title>
                    <Card.Text className="p-1 my-1 tm-p">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <Card className="card">
                  <Card.Img
                    variant="top"
                    src={avatar2}
                    className="rounded-circle p-5"
                  />
                  <Card.Body>
                    <Card.Title className="text-center">
                      MD,Avinash Thakur
                    </Card.Title>
                    <Card.Text className="p-1 my-1 tm-p">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <Card className="card">
                  <Card.Img
                    variant="top"
                    src={avatar3}
                    className="rounded-circle p-5"
                  />
                  <Card.Body>
                    <Card.Title className="text-center">
                      MD,Avinash Thakur
                    </Card.Title>
                    <Card.Text className="p-1 my-1 tm-p">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <Card className="card">
                  <Card.Img
                    variant="top"
                    src={avatar4}
                    className="rounded-circle p-5"
                  />
                  <Card.Body>
                    <Card.Title className="text-center">
                      MD,Avinash Thakur
                    </Card.Title>
                    <Card.Text className="p-1 my-1 tm-p">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <Card className="card">
                  <Card.Img
                    variant="top"
                    src={avatar5}
                    className="rounded-circle p-5"
                  />
                  <Card.Body>
                    <Card.Title className="text-center">
                      MD,Avinash Thakur
                    </Card.Title>
                    <Card.Text className="p-1 my-1 tm-p">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <Card className="card">
                  <Card.Img
                    variant="top"
                    src={avatar6}
                    className="rounded-circle p-5"
                  />
                  <Card.Body>
                    <Card.Title className="text-center">
                      MD,Avinash Thakur
                    </Card.Title>
                    <Card.Text className="p-1 my-1 tm-p">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <Card className="card">
                  <Card.Img
                    variant="top"
                    src={avatar7}
                    className="rounded-circle p-5"
                  />
                  <Card.Body>
                    <Card.Title className="text-center">
                      MD,Avinash Thakur
                    </Card.Title>
                    <Card.Text className="p-1 my-1 tm-p">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <Card className="card">
                  <Card.Img
                    variant="top"
                    src={avatar8}
                    className="rounded-circle p-5"
                  />
                  <Card.Body>
                    <Card.Title className="text-center">
                      MD,Avinash Thakur
                    </Card.Title>
                    <Card.Text className="p-1 my-1 tm-p">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>
      <div className="container">
        <Image src={home} alt="home" className="home1" />
      </div>
      <h3 className="text-center container my-5" id="clients">
        Our Valuable Clients
      </h3>
      <div className="container customers">
        <div className="container">
          <Image src={customer1} className="mr-2" />
        </div>
        <div className="container">
          <Image src={customer2} className="mr-2" />
        </div>
        <div className="container">
          <Image src={customer4} className="mr-2" />
        </div>
        <div className="container">
          <Image src={customer5} className="mr-2" />
        </div>
        <div className="container">
          <Image src={customer6} className="mr-2" />
        </div>
        <div className="container">
          <Image src={customer7} className="mr-2" />
        </div>
        <div className="container">
          <Image src={customer8} className="mr-2" />
        </div>
        <div className="container">
          <Image src={customer9} className="mr-2" />
        </div>
        <div className="container">
          <Image src={customer10} className="mr-2" />
        </div>
        <div className="container">
          <Image src={customer11} className="mr-2" />
        </div>
        <div className="container">
          <Image src={customer12} className="mr-2" />
        </div>
        <div className="container">
          <Image src={customer13} className="mr-2" />
        </div>
        <div className="container">
          <Image src={customer14} className="mr-2" />
        </div>
        <div className="container">
          <Image src={customer3} className="mr-2" />
        </div>
        <div className="container">
          <Image src={customer15} className="mr-2" />
        </div>
        <div className="container">
          <Image src={customer16} className="mr-2" />
        </div>
        <div className="container">
          <Image src={customer17} className="mr-2" />
        </div>
      </div>
      <section className="container my-5 grid-2">
        <div className="container map">
          <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBfYAM90l09e7XhASykUkhZh0t-54dpGWQ&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <div className="container feedback">
          <Form>
            <h5>Connect With Us</h5>
            <em>
              <h6>Contact regarding our services</h6>
            </em>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label className="label">Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Full Name" />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label className="label">Organization Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Organization Name"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label className="label">Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label
                  className="mr-2 label"
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
              <Form.Group as={Col} className="tel">
                <Form.Label className="label">Telephone Number</Form.Label>
                <Form.Control type="tel" placeholder="Telephone Number" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} className="msg">
                <Form.Label className="label">Message</Form.Label>
                <Form.Control as="textarea" placeholder="Message" />
              </Form.Group>
            </Form.Row>
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </section>
    </div>
  );
}

export default Home;

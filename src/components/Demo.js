import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import "./Demo.css";
function Demo() {
  return (
    <div id="demo">
      <div className="v-bg">
        <div className="container grid-2">
          <div className="container video">
            <iframe
              src="https://www.youtube.com/embed/lJWnwGAjzQQ"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true"
              title="Create Sale Order"
            ></iframe>
          </div>
          <div className="container video">
            <iframe
              src="https://www.youtube.com/embed/bjMelKAA5xw"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true"
              title="Create Purchase Order"
            ></iframe>
          </div>
          <div className="container video">
            <iframe
              src="https://www.youtube.com/embed/BML8nJuVOyA"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true"
              title="Cost Estimation"
            ></iframe>
          </div>
          <div className="container video">
            <iframe
              src="https://www.youtube.com/embed/DrFeoTaqA-Y"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true"
              title="Paper Masters"
            ></iframe>
          </div>
          <div className="container video">
            <iframe
              src="https://www.youtube.com/embed/AVu3rfA_9SU"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true"
              title="Easy Publish Module"
            ></iframe>
          </div>
          <div className="container video">
            <iframe
              src="https://www.youtube.com/embed/8k4YiPyDy4M"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true"
              title="Account Group master"
            ></iframe>
          </div>
        </div>
        <div className="container">
          <h3 className="text-center">FAQ</h3>
          <Accordion className="accordion">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <AiOutlinePlus className="mr-3" />
                  For whom this software has been developed?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  These software’s are designed for small and medium Publishers
                  and Printing houses to guard them against lot of time
                  involvement, paper work, dependence of staff checking, and
                  maintaining stock reports for print production management by
                  replacing total paper practice.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  <AiOutlinePlus className="mr-3" />
                  Is it multi user and how many modules are available ?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  “Easy Publish” is available in Desktop,Networking and
                  Web-Cloud Server modules. Yes, it is multi user and can be
                  upgrade to more users.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  <AiOutlinePlus className="mr-3" />
                  Can I See Demo or Buy “Easy Publish” ?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  Our Support department is always ready to show on-site or
                  online Demonstration with the help of{" "}
                  <a href="https://meet.google.com/gcb-vxfr-tqp">Google Meet</a>
                  . Easy info solutions sells directly and has no
                  franchise/middle man or agent. You can buy by contacting us
                  directly.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  <AiOutlinePlus className="mr-3" />
                  How can I get License Activation Key ?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  Easy info solutions team take care of your installations and
                  shall generate your activation Key and send by e-mail.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  <AiOutlinePlus className="mr-3" />
                  Hardware Requirements
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  <ul className="list-unstyled">
                    <li>
                      Processor : Intel(R) Core(TM) i3-4005U CPU @1.70GHz
                      1.70GHz
                    </li>
                    <li>Installled memory : 8.00 GB</li>
                    <li>Operating System : Windows 10</li>
                    <li>
                      System type : 64-bit Operating System,x64-based processor
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Demo;

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
        </div>
        <div className="container">
          <h3 className="text-center">FAQ</h3>
          <Accordion className="accordion">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <AiOutlinePlus className="mr-2" />
                  For whom this software has been developed?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  These software’s are designed for small and medium Publishers
                  and Print houses to guard them against lot of time
                  involvement, paper work, dependence of staff checking, and
                  maintaining stock reports for print production management by
                  replacing total paper practice.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  <AiOutlinePlus className="mr-2" />
                  Is it multi user and how many modules are available ?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  “Easy Publish” is available in Desktop and Networking modules.
                  Yes, it is multi user and can be upgrade to more users.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  <AiOutlinePlus className="mr-2" />
                  Can I See Demo or Buy “Easy Publish” ?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  Our Support department is always ready to show on-site or
                  online Demonstration with the help of Team Viewer software.
                  Easy info solutions sells directly and has no franchise/middle
                  man or agent. You can buy by contacting us directly.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  <AiOutlinePlus className="mr-2" />
                  How can I get License Activation Key ?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  Easy info solutions team take care your installations and
                  shall generate your activation Key and shall send by e-mail.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  <AiOutlinePlus className="mr-2" />
                  Hardware Requirements
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  <ul className="list-unstyled">
                    <li>
                      {" "}
                      Min. Processor type: Pentium III-compatible processor or
                      faster
                    </li>
                    <li>Processor speed: Minimum: 1.0 GHz</li>
                    <li>Recommended: 2.0 GHz or faster</li>
                    <li>Operating System : Windows XP Onwards</li>
                    <li>Memory RAM: Minimum: 512 MB</li>
                    <li>Recommended: 2.048 GB or more</li>
                    Maximum: Operating system maximum
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

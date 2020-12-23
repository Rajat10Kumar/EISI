import React from "react";
import { Image, Card, Accordion, Button, Table } from "react-bootstrap";
import "./About.css";
import { Fade } from "react-reveal";
import software from "../assets/software.jpg";
import about from "../assets/about.svg";
import features from "../assets/29938.jpg";
function About() {
  return (
    <div>
      <div className="showcase bg-primary grid-2">
        <div className="container-lg mt-5">
          <Image src={about} className="about-img mt-5" />
        </div>
        <div className="container mt-5 py-5">
          <Fade right>
            <p className="text-white p-4 mt-5">
              <q className="mt-5">
                Having come across the frustration and delay, mistakes,
                irregularities, losses due to common Manual way to handling the
                jobs and working on software developed by the outside of the
                trade, the developers then decided to develop “Easy Publish” to
                get rid of problems like much time involved in estimating
                manually, internal challenges of training of staff, to achieve
                the uniform results.
              </q>
            </p>
            <p className="text-white p-4">
              <q>
                With more than the two decades of experiences of Printing and
                Publishing Industry, the developer is well versed with the need
                and procedures of printing and publishing process. Having come
                across the frustration and delay, mistakes, irregularities,
                losses due to common Manual way to handling the jobs and working
                on software developed by the outside of the trade, the
                developers then decided to develop “Easy Publish” ,”Easy Print”
                and “Easy Despatch” to get rid of problems like much time
                involvement in estimating manually, internal challenges of
                training of staff, to achieve the uniform results.
              </q>
            </p>
          </Fade>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 319"
        style={{ marginTop: "-32px" }}
      >
        <path
          fill="#007bff"
          fill-opacity="1"
          id="basic"
          d="M0,32L120,53.3C240,75,480,117,720,138.7C960,160,1200,160,1320,160L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
      <section className="mt-5 grid-2">
        <div className="mt-5">
          <Fade left>
            <h3 className="text-center text-primary p-2 m-5">
              For whom this software has been developed?
            </h3>
            <p className="text-primary p-5 m-5">
              <q>
                These software’s are designed for small and medium Publishers
                and Print houses to guard them against a lot of time
                involvement, paperwork, the dependence of staff checking, and
                maintaining stock reports for print production management by
                replacing total paper practice.
              </q>
            </p>
          </Fade>
        </div>
        <div className="ml-5">
          <Image src={software} className="about-us" alt="software" />
        </div>
      </section>
      <div className="container flex flex-column">
        <div className="container">
          <h2 className="text-center p-5">Key Features</h2>
        </div>
        <div className="ml-5">
          <Image src={features} alt="software" className="container-sm" />
        </div>
      </div>
      <section className="container">
        <Accordion className="container p-5 accordion">
          <Card className="card-bg">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Auto Calculation
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                One time Data feeding of Item Masters (Details) for Auto
                calculation Like Ptg. and Binding forms Calculation with Finish
                Size Selection only, GSM Calculation with Ream Weight, Paper
                Size conversion Cm. to Inches.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="card-bg">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Rates & Wastage Control
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ul className="ml-5">
                  <li>
                    Party-wise Job work Rate control by using “Size Group”
                    system to minimize the rate feeding instead of size-wise.
                  </li>
                  <li>Order Quantity-wise Paper Wastage control.</li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="card-bg">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Sale & Purchase
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                JOB Work & Unit Rate Sale & Purchase. with GST Management. Order
                Booking Also.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="card-bg">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                Reprint
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <ul className="ml-5">
                  <li>Reprint–Plate Record Tracker.</li>
                  <li>Item ISBN/HSN/Alias code Management.</li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="card-bg">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="4">
                Ledger
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                Party-wise and Paper-wise paper account management.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="card-bg">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="5">
                Estimation,Costing & Pricing
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                Item Costing and pricing management.Item issue/ receipt
                management
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="card-bg">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="6">
                Stock Journal
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="6">
              <Card.Body>
                Stock Journal Management for Paper, Bill of material, Title, FG
                & UFG through superior approval system.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="card-bg">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="7">
                Forecasting
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="7">
              <Card.Body>
                <ul className="ml-5">
                  <li>
                    Forecasting and supplement order planning management
                    (Integrated With Busy).
                  </li>
                  <li>In case of Short supply debit/Credit note management.</li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="card-bg">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="8">
                Inventory
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="8">
              <Card.Body>
                Paper purchase kg-wise rate and inventory control of Paper.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="card-bg">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="9">
                Movements
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="9">
              <Card.Body>
                <ul className="ml-5">
                  <li>
                    Paper Movements control (One Party to another Party).
                    Material like.
                  </li>
                  <li>
                    Bill of material, Title & UFG issue and movements control
                    (One Party to another Party) with complete accounting.
                  </li>
                  <li>
                    Physical Paper stock difference adjustment through debit
                    note system.
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="card-bg">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="10">
                BOM
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="10">
              <Card.Body>
                Bill of material purchase rate control and job to job accounting
                management.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="card-bg">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="11">
                Order Process
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="11">
              <Card.Body>
                Pending order and open order reports for execution, short &
                delay supply control.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="card-bg">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="12">
                User Control
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="12">
              <Card.Body>
                User transaction control through approval system.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </section>
      <div className="container my-5">
        <h1 className="text-center">Business Hours</h1>
        <Table
          striped
          bordered
          hover
          variant="light"
          size="sm"
          className="table"
        >
          <thead>
            <tr>
              <th>Day</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>10:00 AM - 6:00 PM</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>10:00 AM - 6:00 PM</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>10:00 AM - 6:00 PM</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>10:00 AM - 6:00 PM</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>10:00 AM - 6:00 PM</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>10:00 AM - 6:00 PM</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default About;

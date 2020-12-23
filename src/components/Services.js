import React from "react";
import { Image, ListGroup, ListGroupItem } from "react-bootstrap";
import services from "../assets/services.jpg";
import "./Services.css";
import { Table } from "react-bootstrap";
import { Slide } from "react-reveal";
function Services() {
  return (
    <div>
      <div className="grid-2 my-5">
        <div className="container" id="services">
          <h1 className="text-center mt-5">Services</h1>
          <Slide left>
            <ListGroup className="list">
              <ListGroupItem action href="#link1">
                Inventory Management (MIS)
              </ListGroupItem>
              <ListGroupItem action href="#link2">
                Online Editorial Management-Status Tracker of Team & Work.
              </ListGroupItem>
              <ListGroupItem action href="#link3">
                Web Site Design & Development.
              </ListGroupItem>
              <ListGroupItem action href="#link4">
                IT Consulting & Analysis.
              </ListGroupItem>
              <ListGroupItem action href="#link5">
                Customized ERP Software & Development.
              </ListGroupItem>
              <ListGroupItem action href="#link6">
                Pre-Production Management.
              </ListGroupItem>
            </ListGroup>
          </Slide>
        </div>
        <div className="container">
          <Image src={services} className="service-img" alt="services" />
        </div>
      </div>
      <div className="container">
        <h5>
          Services in our <b>AMC</b> includes the following :{" "}
        </h5>
        <ul className="ml-3">
          <li>
            You will be timely updated about the Latest Release Information
            Through SMS/Email.
          </li>
          <li>
            Priority Promt Response To All Your Complaints You Being A Premium
            Customer.
          </li>
          <li>Training Webinars On Specific Relevant Topics.</li>
          <li>Online Support On Discord/Anydesk.</li>
          <li>Telephonic Support.</li>
        </ul>
      </div>
      <div className="container my-5 py-2" id="prices">
        <h4 className="text-center">Prices</h4>
        <Table striped bordered hover size="sm" className="table">
          <thead>
            <tr>
              <th>Software</th>
              <th>Version</th>
              <th>Release</th>
              <th>Single User Price</th>
              <th>Multi User Price</th>
              <th>No. of User</th>
              <th>Extra User Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Easy Publish Basic</td>
              <td>21</td>
              <td>1.01</td>
              <td> INR 9,999 </td>
              <td> INR 25,000 </td>
              <td>2</td>
              <td> INR 9,999</td>
            </tr>
            <tr>
              <td>Easy Publish Standard</td>
              <td>21</td>
              <td>1.01</td>
              <td> INR 15,000 </td>
              <td> INR 60,000 </td>
              <td>4</td>
              <td> INR 15,000 </td>
            </tr>
            <tr>
              <td>Easy Publish Enterprise</td>
              <td>21</td>
              <td>1.01</td>
              <td> INR 9,999 </td>
              <td> INR 25,000 </td>
              <td>4</td>
              <td> INR 25,000 </td>
            </tr>
            <tr>
              <td>Easy Publish Basic</td>
              <td>21</td>
              <td>1.01</td>
              <td> INR 12,500 </td>
              <td> INR 25,000</td>
              <td>2</td>
              <td> INR 12,500 </td>
            </tr>
            <tr>
              <td>Easy Publish Standard</td>
              <td>21</td>
              <td>1.01</td>
              <td> INR 15,000 </td>
              <td> INR 60,000 </td>
              <td>4</td>
              <td> INR 15,000 </td>
            </tr>
            <tr>
              <td>Easy Publish Enterprise</td>
              <td>21</td>
              <td>1.01</td>
              <td> INR 25,000 </td>
              <td> INR 1,00,000 </td>
              <td>4</td>
              <td> INR 25,000 </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="container my-5 py-2">
        <h4 className="text-center">AMC</h4>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Software</th>
              <th>Version</th>
              <th>Release</th>
              <th>Single User AMC Price</th>
              <th>Multi User Five AMC Price</th>
              <th>Free Trial</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Easy Publish Basic</td>
              <td>21</td>
              <td>1.01</td>
              <td> INR 2,200 </td>
              <td> INR 5,500 </td>
              <td>3 months</td>
            </tr>
            <tr>
              <td>Easy Publish Standard</td>
              <td>21</td>
              <td>1.01</td>
              <td> INR 3,300 </td>
              <td> INR 13,200 </td>
              <td>3 months</td>
            </tr>
            <tr>
              <td>Easy Publish Enterprise</td>
              <td>21</td>
              <td>1.01</td>
              <td> INR 5,500 </td>
              <td> INR 22,000 </td>
              <td>3 months</td>
            </tr>
            <tr>
              <td>Easy Publish Basic</td>
              <td>21</td>
              <td>1.01</td>
              <td> INR 2,750 </td>
              <td> INR 5,500 </td>
              <td>3 months</td>
            </tr>
            <tr>
              <td>Easy Publish Standard</td>
              <td>21</td>
              <td>1.01</td>
              <td> INR 3,300 </td>
              <td> INR 13,200 </td>
              <td>3 months</td>
            </tr>
            <tr>
              <td>Easy Publish Enterprise</td>
              <td>21</td>
              <td>1.01</td>
              <td> INR 5,500 </td>
              <td> INR 22,000 </td>
              <td>3 months</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Services;

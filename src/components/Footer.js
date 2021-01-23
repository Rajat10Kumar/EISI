import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineSend,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import { VscLocation } from "react-icons/vsc";
import { Link } from "react-scroll";
import "./Footer.css";
function Footer() {
  return (
    <footer className="bg-footer text-white">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-2 mb-2 text-white social">
            <h6 className="text-white text-uppercase font-weight-bold">
              Follow Us
            </h6>
            <ul className="mt-4 text-white list-unstyled">
              <li className="mb-2">
                <a
                  href="https://www.linkedin.com/in/easy-info-solutions-international-552ba93a/"
                  target="_blank"
                  className="text-white ml-1 text-decoration-none"
                >
                  Linkedin
                  <AiOutlineLinkedin className="ml-2" />
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.youtube.com/channel/UCW5RVD8qIBTGzCSRM03U7Cw"
                  target="_blank"
                  className="text-white ml-1 text-decoration-none"
                >
                  Youtube
                  <AiOutlineYoutube className="ml-2" />
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://twitter.com/EasyInfoSoluti1#"
                  target="_blank"
                  className="text-white ml-1 text-decoration-none"
                >
                  Twitter
                  <AiOutlineTwitter className="ml-2" />
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.facebook.com/easyinfo.inter/"
                  target="_blank"
                  className="text-white ml-1 text-decoration-none"
                >
                  Facebook
                  <AiOutlineFacebook className="ml-2" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 mb-2 aboutus">
            <h6 className="text-uppercase font-weight-bold mb-4">About Us</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link
                  to="testimonials"
                  smooth={true}
                  duration={1000}
                  offset={-70}
                >
                  Testimonials
                </Link>
              </li>
              <li className="mb-2">
                <Link to="services" smooth={true} duration={1000} offset={-20}>
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to="prices" smooth={true} duration={1000} offset={-70}>
                  Prices
                </Link>
              </li>
              <li className="mb-2">
                <Link to="clients" smooth={true} duration={1000} offset={-70}>
                  Clients
                </Link>
              </li>
              <li className="mb-2">
                <Link to="demo" smooth={true} duration={1000}>
                  Demo
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 mb-2 contact">
            <h6 className="text-uppercase font-weight-bold mb-4">Contact Us</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <VscLocation className="icon" /> E-461 Ground Floor, Vijay Marg
                Jagjeet Nagar Delhi-53
              </li>
              <li className="mb-2">
                <AiOutlinePhone className="icon" /> +91 11-71862265
              </li>
              <li className="mb-2">
                <AiOutlineMail className="icon" /> easyinfosolutionsi@gmail.com
              </li>
            </ul>
          </div>
          <div className="col-lg-5 feedback">
            <h5 className="text-uppercase font-weight-bold ml-2">Feedback</h5>
            <h6 className="ml-2">Connect with us</h6>
            <div className="p-2 rounded">
              <form action="#">
                <div className="mb-1">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div className="mb-1">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="2"></textarea>
                </div>
                <div className="mb-1">
                  <button className="btn btn-success px-5 mt-1">
                    Send <AiOutlineSend className="ml-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <p className="text-center mb-0 mt-2">
          Copyright &copy; {new Date().getFullYear()} Created by EISI
        </p>
      </div>
    </footer>
  );
}

export default Footer;

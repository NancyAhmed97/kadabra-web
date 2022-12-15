import React, { useRef, useEffect, useState } from "react";
import landingImg from "../../../../Assets/Group 1415.png";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { GetDigitalServices } from "../../network";
import "./LandingPage.css";
function LandingPage({ active, getActive }) {
  const home = useRef(null);
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);

  const executeScroll = (ref) => ref.current.scrollIntoView();

  if (active === "home") {
    executeScroll(home);
  }

  useEffect(() => {
    GetDigitalServices(
      (success) => {
        console.log(success.data.pageContent);
        setTitle(success.data.title);
        setContent(success.data.pageContent);
      },
      (fail) => {}
    );
  }, []);
  return (
    <div className="landingPage" ref={home}>
      <Container>
        <Row>
          <Col sm>
            <div className="textLanding">
              <h1 className="s1">{title}</h1>
              <p className="s3">{content}</p>

              <Nav.Link
                href="#contactUs"
                className="btn"
                onClick={() => getActive("ContactUs")}
              >
                Contact Us
              </Nav.Link>
            </div>
          </Col>
          <Col sm>
            <div className="imgContainer">
              <img src={landingImg} alt="landingImg" className="landingImg" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;

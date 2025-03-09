import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import g1 from "../assets/img1/g1.png";
import g2 from "../assets/img1/g2.png";
import g3 from "../assets/img1/g3.png";
import g4 from "../assets/img1/g4.png";
import g5 from "../assets/img1/g5.png";
import g6 from "../assets/img1/g6.png";
import g7 from "../assets/img1/g7.png";
import g8 from "../assets/img1/g8.png";
import g9 from "../assets/img1/g9.png";

function Projects() {
  return (
    <div style={{ marginTop: "100px" }} className="gallery min-vh-100 d-flex align-items-center" id="Gallery">
                <Container>
    
                    <Row className="gallery">
                        <Col>
                            <h1 className=" animate__animated animate__fadeInUp">Gallery Project Saya</h1>
                            <p className="animate__animated animate__fadeInUp">Ini merupakan beberapa project yang sudah saya buat selama satu tahun terakhir.</p>
                        </Col>
                    </Row>
    
    
                    <Row className="row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4" >
                        <Col >
                            <img src={g1} alt="unsplash.com" className="w-100" data-aos="fade-up" />
                        </Col>
                        <Col>
                            <img src={g2} alt="unsplash.com" className="w-100" data-aos="fade-up" data-aos-delay="200"/>
                        </Col>
                        <Col>
                            <img src={g3} alt="unsplash.com" className="w-100" data-aos="fade-up" data-aos-delay="400"/>
                        </Col>
                        <Col>
                            <img src={g4} alt="unsplash.com" className="w-100" data-aos="fade-up" data-aos-delay="600"/>
                        </Col>
                        <Col>
                            <img src={g5} alt="unsplash.com" className="w-100" data-aos="fade-up" data-aos-delay="800"/>
                        </Col>
                        <Col>
                            <img src={g6} alt="unsplash.com" className="w-100"data-aos="fade-up" data-aos-delay="1000"/>
                        </Col>
                        <Col>
                            <img src={g7} alt="unsplash.com" className="w-100"data-aos="fade-up" data-aos-delay="1200"/>
                        </Col>
                        <Col>
                            <img src={g8} alt="unsplash.com" className="w-100"data-aos="fade-up" data-aos-delay="1400"/>
                        </Col>
                        <Col>
                            <img src={g9} alt="unsplash.com" className="w-100"data-aos="fade-up" data-aos-delay="1600"/>
                        </Col>
                    </Row>
                </Container>
            </div>
  );
}

export default Projects;
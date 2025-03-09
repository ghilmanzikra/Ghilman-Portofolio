import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import p1 from "../assets/gallery/p1.jpg";
import p2 from "../assets/gallery/p2.jpg";
import p3 from "../assets/gallery/p3.jpg";
import p4 from "../assets/gallery/p4.jpg";
import p5 from "../assets/gallery/p5.jpg";
import p6 from "../assets/gallery/p6.jpg";
import y1 from "../assets/gallery/y1.jpg";
import y2 from "../assets/gallery/y2.jpg";
import y3 from "../assets/gallery/y3.jpg";
import y4 from "../assets/gallery/y4.jpg";
import y5 from "../assets/gallery/y5.jpg";
import y6 from "../assets/gallery/y6.jpg";


function Gallery() {
  return (
    <div style={{ marginTop: "100px" }} className="gallery min-vh-100 d-flex align-items-center" id="Gallery">
            <Container>

                <Row className="gallery">
                    <Col>
                        <h1 className=" animate__animated animate__fadeInUp">Gallery Kepanitiaan Saya</h1>
                        <p className="animate__animated animate__fadeInUp">Ini merupakan beberapa portret kegiatan kepanitiaan yang sudah saya ikuti selama satu tahun terakhir.</p>
                    </Col>
                </Row>


                <Row className="row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4" >
                    <Col >
                        <img src={p1} alt="gallery" className="w-100" data-aos="fade-up" />
                    </Col>
                    <Col>
                        <img src={p2} alt="gallery" className="w-100" data-aos="fade-up" data-aos-delay="200"/>
                    </Col>
                    <Col>
                        <img src={p3} alt="gallery" className="w-100" data-aos="fade-up" data-aos-delay="400"/>
                    </Col>
                    <Col>
                        <img src={p4} alt="gallery" className="w-100" data-aos="fade-up" data-aos-delay="600"/>
                    </Col>
                    <Col>
                        <img src={p5} alt="gallery" className="w-100" data-aos="fade-up" data-aos-delay="800"/>
                    </Col>
                    <Col>
                        <img src={p6} alt="gallery" className="w-100"data-aos="fade-up" data-aos-delay="1000"/>
                    </Col>
                    <Col>
                        <img src={y1} alt="gallery" className="w-100"data-aos="fade-up" data-aos-delay="1200"/>
                    </Col>
                    <Col>
                        <img src={y2} alt="gallery" className="w-100"data-aos="fade-up" data-aos-delay="1400"/>
                    </Col>
                    <Col>
                        <img src={y3} alt="gallery" className="w-100"data-aos="fade-up" data-aos-delay="1600"/>
                    </Col>
                    <Col>
                        <img src={y4} alt="gallery" className="w-100"data-aos="fade-up" data-aos-delay="1600"/>
                    </Col>
                    <Col>
                        <img src={y5} alt="gallery" className="w-100"data-aos="fade-up" data-aos-delay="1600"/>
                    </Col>
                    <Col>
                        <img src={y6} alt="gallery" className="w-100"data-aos="fade-up" data-aos-delay="1600"/>
                    </Col>
                </Row>
            </Container>
        </div>
  );
}

export default Gallery;
import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

function Skills() {
  return (
    <div style={{ marginTop: "50px" }} className="skills min-vh-100 d-flex align-items-center" id="Skills">
                <Container>
                    <Row className=" animate__animated animate__fadeInUp">
                        <Col>
                            <h1 className="text-center fw-bold">Hobi</h1>
                            <p className="text-center">Kegiatan yang sangat saya sukai</p>
                        </Col>
                    </Row>
                    
                    <Row className="mb-5 mt-3 p-3">
                        <Col>
                            <ListGroup>
                                <ListGroup.Item className="animate__animated animate__fadeInUp">Saya sangat menyukai gambar, hobi awal saya adalah dalam hal menggambar dan menikmati gambar.</ListGroup.Item>
                                <ListGroup.Item className="animate__animated animate__fadeInUp">Saya penikmat visual realistis dan fiksi, menyukai film fiksi dan anime.</ListGroup.Item>
                                <ListGroup.Item className="animate__animated animate__fadeInUp">Saya orang yang penasaran, dari penikmat film dan anime, saya merasa ingin membuatnya juga.</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>



                    <Row className="mb-5 mt-5 p-2 animate__animated animate__fadeInUp">
                        <Col>
                            <h1 className="text-center fw-bold">Skills</h1>
                            <p className="text-center">Skill yang saya tekuni selama 5 tahun belakangan ini</p>
                        </Col>
                    </Row>

                    <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center animate__animated animate__fadeInUp">
                        <Col className="text-center py-3 px-3 border">
                            <i class="fa-solid fa-laptop fs-2 mb-3"></i>
                            <h5 className="fw-bold">Desain Grafis</h5>
                            <p>Berpengalaman dalam bidang desain grafis menggunakan software profesional seperti Photosop dan CorelDraw</p>
                        </Col>
                        <Col className="text-center py-3 px-3 border">
                            <i class="fa-solid fa-camera fs-2 mb-3"></i>
                            <h5 className="fw-bold">Fotografi</h5>
                            <p>Berpengalaman dalam bidang fotografi menggunakan kamera mirrorless dan DSLR</p>
                        </Col>
                        <Col className="text-center py-3 px-3 border">
                            <i class="fa-solid fa-film fs-2 mb-3"></i>
                            <h5 className="fw-bold">Editor Video</h5>
                            <p>Berpengalaman dalam bidang editing video menggunakan software profesional seperti Adobe Premiere, After Effect, dan Da Vinci Resolve</p>
                        </Col>
                    </Row>
                </Container>
            </div>
  );
}

export default Skills;
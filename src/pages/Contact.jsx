import React from "react";
import { Container, Row, Col, Accordion, Form , Button } from "react-bootstrap";
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";


function Contact() {
  return (
    <div style={{ marginTop: "100px" }} className="faq min-vh-100 w-100 d-flex align-items-center ">
            <Container>
                <Row className="mb-5 pt-40px">
                    <Col>
                        <h2 className="text-center fw-bold pt-40px animate__animated animate__fadeInUp">Halaman Terakhir dari Portofolio Saya </h2>
                        <p className="text-center animate__animated animate__fadeInUp">Walaupun kunjungannya berakhir, tapi pertemuan sesaat kita takkan terlupakan. Terima kasih banyak telah berkunjung.</p>
                    </Col>
                </Row>

                <Row className="row-cols-lg-2 pt-40px animate__animated animate__fadeInUp">
                    <Col className="p-2">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                             <Accordion.Header className="text-center align-items-center animate__animated animate__fadeInUp">Mau memberi masukkan dan saran?</Accordion.Header>
                                <Accordion.Body className="animate__animated animate__fadeInUp">
                                    Hai, terima kasih telah mengunjungi web portofolio saya. Jika kamu mempunyai masukkan dan saran, kamu bisa langsung mengisinya pada form dibawah ini. Masukkan dan saranmu sangat berharga untuk saya, terima kasih.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>

                <Row className="form pt-50px animate__animated animate__fadeInUp">
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Tulis masukkan dan saran mu.</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>

                <Row className="pt-4 animate__animated animate__fadeInUp">
                  <Col className="text-center">
                    <h5 className="fw-bold mb-3">Hubungi Saya</h5>
                    <div className="d-flex flex-column align-items-center">
                      <p><FaEnvelope className="me-2" /> Email: ghilmanzikraoke@gmail.com</p>
                      <p><FaFacebook className="me-2 text-primary" /> Facebook: Ghilman Zikra</p>
                      <p><FaInstagram className="me-2 text-danger" /> Instagram: ghil_z8</p>
                      <p><FaTwitter className="me-2 text-dark" /> X (Twitter): ghil_z8</p>
                      <p><FaLinkedin className="me-2 text-primary" /> LinkedIn: Ghilman Zikra</p>
                      <p><FaYoutube className="me-2 text-danger" /> YouTube: Ghilman Zikra</p>
                    </div>
                  </Col>
                </Row>
            </Container> 
        </div>
  );
}

export default Contact;
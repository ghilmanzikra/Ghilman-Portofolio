import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() { 
  return (
    <div className="home min-vh-100 w-100 mt-5">
      <Container className="d-flex align-items-center justify-content-center">
        <Row>
          <Col>
            <h1 className="h1 text-white text-center fs-1 animate__animated animate__fadeInUp">
              Welcome to My Portfolio
            </h1>
            <p className="row-cols-2 text-white text-center text-white-50 animate__animated animate__fadeInUp animate__delay-0.9s">
              Saya adalah seorang mahasiswa dari UIN SUSKA Riau jurusan Teknik
              Informatika. Ini merupakan hasil web portofolio saya. Silahkan tekan
              tulisan pada Navigasi Bar saya untuk memulai eksplorasi. Selamat
              mengunjungi.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;

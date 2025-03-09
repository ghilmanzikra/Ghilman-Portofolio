import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function FooterComp() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <Container>
        <Row>
          <Col>
            <h4 className="fw-bold text-white">Ghilman Zikra</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>&copy; 2025 My Portfolio. All rights reserved.</p>
          </Col>
        </Row>
        
      </Container>
    </footer>
  );
}

export default FooterComp;

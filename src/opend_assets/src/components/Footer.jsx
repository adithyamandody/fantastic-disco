import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div id='footer'>
      <footer>
        <Container fluid='md'>
          <Row>
            <Col>
              <p>
                The blockchain is a fascinating technology that holds a lot of
                possibilities. These possibilities can be applied to a wide
                variety of industries and one of the biggest of those is
                ecommerce.
              </p>
            </Col>
            <Col>
              <p>Copyright ⓒ {year}</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;

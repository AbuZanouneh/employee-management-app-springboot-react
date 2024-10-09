import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutUs: React.FC = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center m-4">
                About Employee Management System
              </Card.Title>
              <Card.Text>
                <p>
                  Welcome to the <strong>Employee Management System</strong>!
                  This system is designed to help organizations manage their
                  workforce efficiently. With features like employee tracking,
                  department management, role assignments, and more, our
                  application streamlines HR processes, ensuring that your team
                  operates smoothly and effectively.
                </p>
                <p>
                  Our mission is to provide a user-friendly platform that
                  simplifies the complexities of employee management, enabling
                  businesses to focus on growth and success. Whether you're a
                  small startup or a large enterprise, our system scales to meet
                  your needs, offering robust solutions tailored to your
                  requirements.
                </p>
                <p>
                  Thank you for choosing our Employee Management System. We're
                  committed to supporting your business and helping you achieve
                  your goals.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Link to="/" className="btn btn-secondary mb-4 mt-4">
            Back to HomePage
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;

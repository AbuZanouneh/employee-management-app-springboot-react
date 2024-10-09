import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ContactUs: React.FC = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center m-4">Contact Us</Card.Title>
              <Card.Text>
                <p>
                  <strong>Address:</strong>
                  <br />
                  1234 Main Street,
                  <br />
                  Suite 500,
                  <br />
                  Anytown, USA 12345
                </p>
                <p>
                  <strong>Phone:</strong>
                  <br />
                  +1 (555) 123-4567
                </p>
                <p>
                  <strong>Email:</strong>
                  <br />
                  <a href="mailto:support@employee-management.com">
                    support@employee-management.com
                  </a>
                </p>
                <p>
                  <strong>Office Hours:</strong>
                  <br />
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday - Sunday: Closed
                </p>
                <p>
                  <strong>Follow Us:</strong>
                  <br />
                  <a
                    href="https://www.linkedin.com/company/employee-management"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>{" "}
                  |
                  <a
                    href="https://twitter.com/employee_manage"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>{" "}
                  |
                  <a
                    href="https://www.facebook.com/employee.management"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
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

export default ContactUs;

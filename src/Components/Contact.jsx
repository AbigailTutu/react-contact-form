/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Card, Col } from "react-bootstrap";

const Contact = (props) => {
  return (
    <Col md="3" style={{marginBottom: "1rem", width: "17rem", marginTop: "2rem"}}>
      <Card>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            Contacts
          </Card.Subtitle>
          <Card.Title>{props.contactInfo.name}</Card.Title>
          <Card.Text>
            <p>Email: {props.contactInfo.email}</p>
            <p>Telephone: {props.contactInfo.telephone}</p>
          </Card.Text>
          <Card.Link href="#">Edit</Card.Link>
          <Card.Link href="#">Delete</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Contact;

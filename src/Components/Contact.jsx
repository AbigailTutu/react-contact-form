/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Card, Col, Button, Modal, Form } from "react-bootstrap";
import EditContactForm from "./EditContactForm";

const Contact = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteContact(props.contactInfo.id);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditContactForm
            contactInfo={props.contactInfo}
            editContact={props.editContact}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>

      <Col
        md="3"
        style={{ marginBottom: "1rem", width: "17rem", marginTop: "2rem" }}
      >
        <Card>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">Contacts</Card.Subtitle>
            <Card.Title>{props.contactInfo.name}</Card.Title>
            <Card.Text>
              <p>Email: {props.contactInfo.email}</p>
              <p>Telephone: {props.contactInfo.telephone}</p>
            </Card.Text>
            <Card.Link href="#">
              <Button variant="primary" size="sm" onClick={handleShow}>
                Edit
              </Button>
            </Card.Link>
            <Card.Link href="#">
              <Button variant="danger" size="sm" onClick={handleDelete}>
                Delete
              </Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Contact;

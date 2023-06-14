/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row } from "react-bootstrap";
import Contact from "./Contact";

const Contacts = (props) => {
  return (
    <div>
      <Container>
        <Row>
          {props.contactsData.map((contact) => {
            return (
              <Contact
                contactInfo={contact}
                key={contact.id}
                deleteContact={props.deleteContact}
                editContact={props.editContact}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Contacts;

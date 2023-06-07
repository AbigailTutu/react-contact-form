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
          {
            props.contactsData.map((contact, index) => {
               return <Contact contactInfo={contact} key={index}/>
            })
          }
        </Row>
      </Container>
    </div>
  );
};

export default Contacts;

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Form from "./Components/Form";
import Contacts from "./Components/Contacts";

function App() {
  const [contact, setContact] = useState({
    persons: [
      {
        name: "Enam",
        email: "enam@gmail.com",
        telephone: "0247765653",
        id: "2566778",
      },

      {
        name: "Vivian",
        email: "vivian@gmail.com",
        telephone: "0547765653",
        id: "9764789",
      },

      {
        name: "Joyce",
        email: "joyce@gmail.com",
        telephone: "0557765653",
        id: "2348976",
      },
    ],
  });

  const addNewContact = (newContact) => {
    newContact.id = Math.random().toString();
    setContact({
      persons: [...contact.persons, newContact],
    });
  };

  const deleteContact = (id) => {
    let deletedContacts = contact.persons.filter(
      (newContact) => newContact.id !== id
    );
    setContact({
      persons: deletedContacts,
    });
  };

  const editContact = (id, updatedContact) => {
    setContact({
      persons: contact.persons.map((persons) =>
        persons.id === id ? updatedContact : persons
      ),
    });
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="4">
            <Form addContact={addNewContact} />
          </Col>
          <Col>
            <Contacts
              contactsData={contact.persons}
              deleteContact={deleteContact}
              editContact={editContact}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

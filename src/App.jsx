/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import Form from './Components/Form';
import Contacts from './Components/Contacts';

function App() {
  const [contact, setContact] = useState({
    persons:[
        {
            name: "Enam",
            email: "enam@gmail.com",
            telephone: "0247765653"
        },

        {
            name: "Vivian",
            email: "vivian@gmail.com",
            telephone: "0547765653"
        },

        {
            name: "Joyce",
            email: "joyce@gmail.com",
            telephone: "0557765653"
        },

],
})

 const addNewContact = (newContact) => {
   setContact({
    persons: [...contact.persons, newContact]
   })
}
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="4">
            <Form addContact={addNewContact}/>
          </Col>
          <Col>
            <Contacts contactsData = {contact.persons}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// 


import React, { Component } from 'react'

export class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
        name:"",
        email:"",
        telephone:""
    }
}

handleChange = (e) => {
    e.preventDefault();
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault()
    this.props.addContact(this.state)
    this.setState({
        name:"",
        email:"",
        telephone:""
    })
}
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit} style={{marginTop: "2rem"}}>
      <label>Name</label>
      <br />
      <input type="text" placeholder="Enter Name" name="name" value={this.state.name} onChange={this.handleChange} style={{width: "20rem", height: "2.5rem"}} required/>
      <br></br>
      <br></br>
      <label>Email</label>
      <br />
      <input type="email" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleChange} style={{width: "20rem", height: "2.5rem"}} required/>
      <br></br>
      <br></br>
      <label>Telephone</label>
      <br />
      <input type="text" placeholder="Enter telephone" name="telephone" value={this.state.telephone} onChange={this.handleChange} style={{width: "20rem", height: "2.5rem"}} required/>
      <br></br>
      <br></br>
  
      <button type="submit">Submit</button>
    </form>
      </div>
    )
  }
}

export default Form









// <Modal.Dialog>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal title</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           <p>Modal body text goes here.</p>
//         </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary">Close</Button>
//           <Button variant="primary">Save changes</Button>
//         </Modal.Footer>
//       </Modal.Dialog>

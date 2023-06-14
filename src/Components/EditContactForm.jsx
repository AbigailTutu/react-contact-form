/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

export class EditContactForm extends Component {
  constructor(props){
    super(props);
    this.state = {
        name: props.contactInfo.name,
        email: props.contactInfo.email,
        telephone: props.contactInfo.telephone,
        id: props.contactInfo.id
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
    this.props.editContact(this.state.id, this.state)
    this.setState({
        name:"",
        email:"",
        telephone:""
    })
    this.props.closeModal()
}
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
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

export default EditContactForm

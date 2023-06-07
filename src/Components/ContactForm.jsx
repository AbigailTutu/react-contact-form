/* eslint-disable no-unused-vars */
import React, {useState} from 'react'

const ContactForm = () => {
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

    name: "",
    email: "",
    telephone: "",
}
)

    const handleChange = (e) => {
     e.preventDefault();
     setContact({
        ...contact,
        [e.target.name]: e.target.value,
     });
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      const newPerson = {
        name: contact.name,
        email: contact.email,
        telephone: contact.telephone
      }
      setContact({
        persons: [...contact.persons, newPerson],
        name: "",
        email: "",
        telephone: ""
      })
   }
  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={contact.name} onChange={handleChange}/>
        <br></br>
        <br></br>
        <label>Email</label>
        <input type="email" name="email" value={contact.email} onChange={handleChange}/>
        <br></br>
        <br></br>
        <label>Telephone</label>
        <input type="text" name="telephone" value={contact.telephone} onChange={handleChange}/>
        <br></br>
        <br></br>

        <button type="submit">Submit</button>
      </form>

        
        
        {contact.persons.map((item, index) => {
            return(
              <div className="col-md-4" key={index}>
                <h4>Name: {item.name}</h4>
                <h4>Email: {item.email}</h4>
                <h4>Telephone: {item.telephone}</h4>
                <hr />
              </div>
            )
        })}
      
    </div>
  )
}

export default ContactForm

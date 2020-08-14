import React, { useState } from "react"
import _ from "lodash";

const PetAdoptionsForm = props => {
  const [adoptionForm, setAdoptionForm] = useState({
      name: '',
      phone_number: '',
      email: '',
      home_status: '',
  })

  let requiredFields = {
    name : "Name",
    phone_number : "Phone number",
    email : "Email",
    home_status : "Home status",
  }
  const [errors, setErrors] = useState({})

  const handleChange=(event) => {
    setAdoptionForm({
      ...adoptionForm, 
      [event.target.name] : event.target.value
    })
  }

  const handleClose = () => {
    props.setDisplayForm(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let formErrors = {}
    for (let field of Object.keys(requiredFields)) {
      if (adoptionForm[field].trim() === "") {
        formErrors = {
          ...formErrors,
          [field] : `${requiredFields[field]} cannot be blank.`
        }
      }
    }
    setErrors(formErrors)
    if (_.isEmpty(errors)) {
      fetch(`/api/v1/petadoptions/${props.pet_id}`, {
        method:"POST",
        body: JSON.stringify(adoptionForm),
        headers: {"Content-Type" : "application/json"}
      })
      .then(result => {
        setAdoptionForm({
          name: '',
          phone_number: '',
          email: '',
          home_status: '',
      })
      props.setApplicationStatus("pending")
      })
    } 
  }

  return(
    <div className="form-container">
      <button className="close-button" onClick={handleClose}>Close</button>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label className="form-label">Name
          <p className="error">{errors.name}</p>
          <input className="form-field" type="text" name="name" id="name" value={adoptionForm.name} />
        </label>
        <label className="form-label">Phone Number
          <p className="error">{errors.phone_number}</p>
          <input className="form-field" type="text" name="phone_number" id="phone_number" value={adoptionForm.phone_number} />
        </label>
        <label className="form-label">Email
          <p className="error">{errors.email}</p>
          <input className="form-field" type="text" name="email" id="email" value={adoptionForm.email} />
        </label>
        <label className="form-label">Home Status
          <p className="error">{errors.home_status}</p>
          <select className="form-field" type="text" name="home_status" id="home_status" value={adoptionForm.home_status}>
            <option value=""></option>
            <option value="Rent">Rent</option>
            <option value="Own">Own</option>
          </select>
        </label>
        <input id="adopt-submit" className="dope-ass-button" type="submit" value="submit" />
      </form>
    </div>
  )
}

export default PetAdoptionsForm
import React, { useState, useEffect } from 'react'
import _ from 'lodash'

const PetSurrenderForm = (props) => {
  const [surrenderForm, setSurrenderForm] = useState({
    name: "",
    phone_number: "",
    email: "",
    pet_name: "",
    pet_age: "",
    pet_type_id: "",
    pet_image_url: "",
    vaccination_status: ""
  })
  
  let requiredFields = {
    name: "Name",
    phone_number: "Phone number",
    email: "Email",
    pet_name: "Pet name",
    pet_type_id: "Pet type",
    pet_image_url: "Link to image",
    vaccination_status: "Is this critter vaccinated?"
  }

  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    setSurrenderForm({
      ...surrenderForm,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let formErrors = {}
    for (let field of Object.keys(requiredFields)) {
      if (surrenderForm[field].trim() === "") {
        formErrors = {
          ...formErrors,
          [field]: `${requiredFields[field]} cannot be blank.`
        }
      }
    }
    setErrors(formErrors)
    if (_.isEmpty(errors)) {
      fetch(`/api/v1/adoptions/new`, {
        method: "POST",
        body: JSON.stringify(surrenderForm),
        headers: { "Content-Type": "application/json" }
      })
        .then(result => {
          // props.setApplicationStatus("Your request is in process")
          console.log("Your request is in process")
        })
    }
  }

//end paste in

  return (
    <div>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Name
          <p className="error">{errors.name}</p>
          <input type="text" name="name" id="name" value={surrenderForm.name} />
        </label>
        <label>Phone Number
          <p className="error">{errors.phone_number}</p>
          <input type="text" name="phone_number" id="phone_number" value={surrenderForm.phone_number} />
        </label>
        <label>Email
          <p className="error">{errors.email}</p>
          <input type="text" name="email" id="email" value={surrenderForm.email} />
        </label>
        <label>Pet type
          <p className="error">{errors.pet_type_id}</p>
          <select type="text" name="pet_type_id" id="pet_type" value={surrenderForm.pet_type}>
            <option value=""></option>
            <option value="1">Cat</option>
            <option value="2">Dog</option>
            <option value="3">Hampster</option>
            <option value="4">Other</option>
          </select>
        </label>
        <label>Age
          <p className="error">{errors.age}</p>
          <input type="text" name="age" id="age" value={surrenderForm.pet_age} />
        </label>
        <label>Pet name
          <p className="error">{errors.pet_name}</p>
          <input type="text" name="pet_name" id="name" value={surrenderForm.pet_name} />
        </label>
        <label>Image url
          <p className="error">{errors.image_url}</p>
          <input type="text" name="image_url" id="image_url" value={surrenderForm.pet_image_url} />
        </label>
        <label>Vaccination Status
          <p className="error">{errors.pet_type}</p>
          <select type="text" name="vaccination_status" id="vaccination_status" value={surrenderForm.pet_type}>
            <option value=""></option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default PetSurrenderForm



// The form should contain the following required fields
// Name
// Phone Number
// Email
// Pet Name
// Pet Age
// Pet Type
// This should be a drop down with options for each of the animal types your site supports
// Pet Image
// Vaccination Status

// The form cannot be submitted if the required fields are not filled out
    //Optional: validate format for Phone Number, Email, and Pet Age

// Upon submission request is persisted to pet_surrender_applications with an application_status of pending via a fetch request
    // This should be a separate table than the Adoption Request

// If the request is successful then the specific pet page should re-render without the form and a message stating Your request is in process.


// If the request is not successful the form should remain on the page
    // Optional: persist the information the user entered into the form and populate it for them
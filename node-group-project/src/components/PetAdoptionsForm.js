import React, { useState } from "react"
import _ from "lodash";
const PetAdoptionsForm = props => ({
    name: '',
    phone_number: '',
    email: '',
    home_status: '',
    application_status: false
  });

  const [errors, setErrors] = useState({})
  
  const handleChange=(event) => {
    setAdoptionForm({
      ...adoptionForm, 
      [event.target.name] : event.target.value
    })
  }

  const handleSubmit = (event) => {
    setErrors({});
    for (field of Object.keys(PetAdoptionsForm)) {
      if (PetAdoptionsForm[field].trim() === "") {
        setErrors({
          ...errors,
          [field] : `${field} cannot be blank!!`
        })
      }
    }
    if (_.isEmpty(errors)) {
      fetch(`api/v1/petadoptions/${props.pet_id}`)
    } 
  }

  return(
    <>
      <form onChange={handleChange}>
        <label>Name
          <p>{errors.name}</p>
          <input type="text" name="name" id="name" value={adoptionForm.name} />
        </label>
        <label>Phone Number
        <p>{errors.phone_number}</p>
          <input type="text" name="phone_number" id="phone_number" value={adoptionForm.phone_number} />
        </label>
        <label>Email
        <p>{errors.email}</p>
          <input type="text" name="email" id="email" value={adoptionForm.email} />
        </label>
        <label>Home Status
        <p>{errors.home_status}</p>
          <select type="text" name="home_status" id="home_status" value={adoptionForm.home_status}>
            <option value=""></option>
            <option value="Rent">Rent</option>
            <option value="Own">Own</option>
          </select>
        </label>
        <input type="submit" value="submit" />
      </form>
    </>
  )
}

export default PetAdoptionsForm
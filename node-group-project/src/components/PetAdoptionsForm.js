import React, { useState } from "react"

const PetAdoptionsForm = props => {
  const [adoptionForm,setAdoptionForm] = useState({
    name: '',
    phone_number: '',
    email: '',
    home_status: '',
    application_status: false
  });

  const handleChange=(event) => {
    setAdoptionForm({
      ...adoptionForm, 
      [event.target.name]:event.target.value
    })
    console.log(adoptionForm)
  }

  return(
    <>
      <form onChange={handleChange}>
        <label>Name
          <input type="text" name="name" id="name" value={adoptionForm.name} />
        </label>
        <label>Phone Number
          <input type="text" name="phone_number" id="phone_number" value={adoptionForm.phone_number} />
        </label>
        <label>Email
          <input type="text" name="email" id="email" value={adoptionForm.email} />
        </label>
        <label>Home Status
          <input type="text" name="home_status" id="home_status" value={adoptionForm.home_status} />
        </label>
        <input type="submit" value="submit" />
      </form>
    </>
  )
}

export default PetAdoptionsForm
import React, { useState, useEffect } from 'react'
import PetAdoptionsForm from './PetAdoptionsForm'

const PetShow = (props) => {
  let petId = props.match.params.id
  const [displayForm, setDisplayForm] = useState(false)
  const [pet, setPet] = useState([])

  let vaccinated = pet.vaccination_status === true? "Yes" : "No"
  
  useEffect(() => {
   fetch(`/api/v1/pets/pet_type/${petId}`)
    .then(result => result.json())
    .then(pet => {
      setPet(pet[0])
      console.log(pet)
    })
  }, []);
  
  const handleAdoptClick = () => {
    let formState = displayForm === true ? false : true
    setDisplayForm(formState)
  }
  
  let adoptForm = displayForm === true ? <PetAdoptionsForm /> : <button onClick={handleAdoptClick}>Adopt Me!</button>
  
  return (
    <div>
      <h1>Am I rendering?</h1>
      <h3>{pet.name}</h3>
      <p>{pet.age}</p>
      <p>Vaccinated: {vaccinated}</p>
      <p>{pet.adoption_story}</p>
      {adoptForm}
    </div>
  );
}

export default PetShow

import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

const PetTypeContainer = (props) => {
  const [adoptablePets, setAdoptablePets] = useState([])

  let petType = props.match.params.pet_type

  useEffect(() => {
    fetch(`/api/v1/pets/${petType}`)
      .then(result => result.json())
      .then(pets => {
        setAdoptablePets(pets);
      })
  }, []);

  let adoptablePetElements = adoptablePets.map((pet, index) => {
    return(
      <div key={index}>
        <Link to={`/pets/${petType}/${pet.id}`}>
          <h4>{pet.name}</h4>
        </Link>
        <p>{pet.img_url}</p>
        <p>{pet.age}</p>
        <p>Vaccinated: {pet.vaccination_status === false ? "No" : "Yes"}</p>
      </div>
    )
  })

  return (
    <div>
      {adoptablePetElements}
    </div>
  );
}

export default PetTypeContainer
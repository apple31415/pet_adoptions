import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const PetTypeContainer = (props) => {
  const [adoptablePets, setAdoptablePets] = useState([]);
  console.log("Pet type container")
  let petType = props.match.params.petType;
  console.log(petType)
  useEffect(() => {
    fetch(`/api/v1/pets/${petType}`)
      .then(result => result.json())
      .then(pets => {
        console.log("Pets in fetch", pets)
        setAdoptablePets(pets);
      })
      .catch(error => console.log(error))
  }, []);
  console.log(adoptablePets)
  let adoptablePetElements = adoptablePets.map(pet => {
    return(
      <div>
        <Link to={`/pets/${petType}/${pet.id}`}>
          <h4>{pet.name}</h4>
        </Link>
        <p>{pet.img_url}</p>
      </div>
    )
  })

  return (
    <div>
      {adoptablePetElements}
    </div>
  );
}

export default PetTypeContainer;

import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const PetTypeContainer = (props) => {
  const [adoptablePets, setAdoptablePets] = useState([]);
  let petType = props.match.params.petType;

  useEffect(() => {
    fetch(`/api/v1/pets/${petType}`)
      .then(result => result.json())
      .then(pets => {
        setAdoptablePets(pets);
      })
  }, []);
  
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
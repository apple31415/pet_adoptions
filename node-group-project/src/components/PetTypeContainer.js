import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const PetTypeContainer = (props) => {
  const [adoptablePets, setAdoptablePets] = useState([]);

  let petType = props.match.params.petType;

  // useEffect(() => {
  //   fetch(`http://localhost:3000/pets/${petType}`)
  //     .then(result => setAdoptablePets(result.rows))
  //     .catch(error => console.log(error))
  // }, []);

  let adoptablePetElements = adoptablePets.map(pet => {
    <div>
      <Link to={`/pets/${petType}/${pet.id}`}>
        <h4>{pet.name}</h4>
      </Link>
      <img src={`${pet.image_url}`} aria-label="image of an adoptable pet"/>
    </div>
  })

  return (
    <>
      {adoptablePetElements}
    </>
  );
}

export default PetTypeContainer;

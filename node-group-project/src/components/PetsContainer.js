import React, { useState, useEffect } from 'react';
import _ from "lodash"
import { Link } from "react-router-dom"

const PetsContainer = (props) => {
  const [petTypes, setPetTypes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/pettypes')
    .then(result => result.json())
    .then(petTypes => {
      setPetTypes(petTypes)
    })
  }, []);

  let mappedPetTypes
  if(petTypes) {
    mappedPetTypes = petTypes.map((petType, index) => {
     return(
      <div className="pet-type-item" key={index}>
        <Link to={`/pets/${petType.type}`} >{petType.type}</Link>
        <p>{petType.description}</p>
      </div>
     )
    });
  }

  return (
    <div className="pet-type-container">
      <h1>Pet Types</h1>
      {mappedPetTypes}
    </div>
  );
}

export default PetsContainer;

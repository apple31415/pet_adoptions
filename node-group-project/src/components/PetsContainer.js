import React from 'react';

const PetsContainer = (props) => {
  const [petTypes, setPetTypes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/pets')
      .then(result => setPetTypes(result.rows))
  }, []);

  let mappedPetTypes = petTypes.map((petType) => {
    <div>
      <Link to={`/pets/${petType.type}`} >{petType.type}</Link>
      <p>{petType.description}</p>
    </div>
  });
  
  return (
    <>
      {mappedPetTypes}
    </>
  );
}

export default PetsContainer;

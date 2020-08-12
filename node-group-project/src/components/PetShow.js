import React from 'react'
import PetAdoptionsForm from './PetAdoptionsForm'

const PetShow = (props) => {
  let vaccinated = props.pet.vaccination_status === true? "Yes" : "No";

  const [displayForm, setDisplayForm] = useState(false);
  const handleAdoptClick = () => {
    let adoptForm = displayForm === false ? <PetAdoptionsForm /> : <button onClick={handleAdoptClick}>Adopt Me</button>;
  }
  
  return (
    <div>
      <h3>{props.pet.name}</h3>
      <p>{props.pet.age}</p>
      <p>Vaccinated: {vaccinated}</p>
      <p>{props.pet.adoption_story}</p>
      {adoptForm} 
    </div>
  );
}

export default PetShow;

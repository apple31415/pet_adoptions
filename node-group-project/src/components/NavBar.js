import React, { useState, useEffect } from 'react'
import { Route, Switch, BrowserRouter, Link } from "react-router-dom"
import PetsContainer from "./PetsContainer"
import PetTypeContainer from "./PetTypeContainer"
import PetShow from './PetShow'

const NavBar = (props) => {
  const [petTypes, setPetTypes] = useState([]);
  
  useEffect(() => {
    fetch('/api/v1/pet_types')
    .then(result => result.json())
    .then(petTypes => {
      setPetTypes(petTypes)
    })
  }, []);

  const petLinks = petTypes.map((petType, index) => {
    return(
        <div key={index} className="nav-item">
          <Link to={`/pets/${petType.type}`}>{petType.type[0].toUpperCase() + petType.type.slice(1)}</Link>
        </div>
    )
  })
  
  return (
    <div >
      <div className="nav-bar">
        <div className="nav-item">
          <Link to="/pets">Home</Link>
        </div>
        {petLinks}
        <div className="nav-item">
          <Link to="/">Surrender Pets</Link>
        </div>
      </div>
      <Switch>
        <Route exact path="/pets" component={PetsContainer} />
        <Route exact path="/pets/:pet_type" component={PetTypeContainer} />
        <Route exact path="/pets/:pet_type/:id" component={PetShow} />
      </Switch>
    </div>
  )
}

export default NavBar

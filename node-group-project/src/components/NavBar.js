import React from 'react'
import { Route, Switch, BrowserRouter, Link } from "react-router-dom"
import PetsContainer from "./PetsContainer"
import PetTypeContainer from "./PetTypeContainer"
import PetShow from './PetShow'

const NavBar = (props) => {
  return (
    <div>
      <Link to="/pets">Home</Link>
      <Link to="/pets/cats">Cats</Link>
      <Link to="/pets"> Home</Link>
    </div>
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/pets" component={PetsContainer} />
          <Route exact path="/pets/:pet_type" component={PetTypeContainer} />
          <Route exact path="/pets/:pet_type/:id" component={PetShow} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default NavBar

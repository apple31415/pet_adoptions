import React from 'react'
import PetsContainer from "./PetsContainer"
import PetTypeContainer from "./PetTypeContainer"
import PetShow from './PetShow'

const NavBar = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/pets" component={PetsContainer} />
          <Route exact path="/pets/:petType" component={PetTypeContainer} />
          <Route exact path="/pets/pet_type/:id" component={PetShow} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default NavBar;

import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import PetsContainer from "./PetsContainer"
import PetTypeContainer from "./PetTypeContainer"
import PetShow from './PetShow'

const App = props => {
  return (
  	<BrowserRouter>
      <Switch>
        <Route exact path="/pets" component={PetsContainer} />
        <Route exact path="/pets/:petType" component={PetTypeContainer} />
        <Route exact path="/pets/pet_type/:id" component={PetShow} />
      </Switch>

    </BrowserRouter>
  )
}

export default App

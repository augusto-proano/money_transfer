import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import { BHD, Maxi } from './components'

const Routes = () => (
  <Switch>
    <Route path="/bhdleon" component={BHD} />
    <Route path="/maxipagos" component={Maxi} />
  </Switch>
)

export default withRouter(Routes)

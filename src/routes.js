import React from 'react'
import { withRouter, Router, Switch } from 'react-router-dom'
import { BHD, Maxi } from './components'

const Routes = () => (
    <Switch>
        <Router path="/bhdleon" component={BHD}/>
        <Router path="maxipagos" componet={Maxi} />
    </Switch>
)

export default withRouter(Routes)
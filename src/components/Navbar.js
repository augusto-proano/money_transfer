import React from 'react'
import store, { setBranch } from '../store'

const Navbar = () => {
    const handleBranch = event => {
        const { value } = event.target
        store.dispatch(setBranch(value))
    }
    return(
        <div id="navbar">
            <div id="navbar-logo">
                <img alt="" src="logo.png"/>
                <h1>Transfer to Branch</h1>
            </div>
            <select onChange={handleBranch} id="navbar-dropmenu">
                <option>BHDLeon</option>
                <option>Maxipagos</option>
            </select>
        </div>
    )
}

export default Navbar
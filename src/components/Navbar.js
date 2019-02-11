import React from 'react'

const Navbar = () => {
    return(
        <div id="navbar">
            <div id="navbar-logo">
                <img alt="" src="logo.png"/>
                <h1>Transfer to Branch</h1>
            </div>
            <select id="navbar-dropmenu">
                <option>BHDLeon</option>
                <option>Maxipagos</option>
            </select>
        </div>
    )
}

export default Navbar
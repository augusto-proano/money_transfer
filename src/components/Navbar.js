import React from 'react'
import store, { setBranch } from '../store'
import history from '../history'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const handleBranch = evt => {
        let { value } = evt.target
        value = value.toLowerCase()
        store.dispatch(setBranch(value))
        history.push(`/${value}`)
    }
    return (
        <div id="navbar">
            <div id="navbar-logo">
                <img alt="" src="logo.png" />
                <h1>Transfer to Branch</h1>
            </div>
            <Link to='/bhdleon'>
                <button>Branch</button>
            </Link>
            <select onChange={handleBranch} id="navbar-dropmenu">
                <option>BHDLeon</option>
                <option>Maxipagos</option>
            </select>
        </div>
    )
}

export default Navbar
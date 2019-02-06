import React, { Component } from 'react'

export default class Branch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "BHDLeon",
            minutes: 10
        }  
    }

    render(){
        return(
            <div id="branch">
                <div id="branch-title">
                    <h1>{this.state.title}</h1>
                </div>
                <div id="branch-content">
                    <div id="branch-content-server">
                        <h2>The server is being checked every {this.state.minutes}</h2>
                        <div>
                            <button>Change time</button>
                            <select>
                                <option>5</option>
                                <option>10</option>
                                <option>15</option>
                                <option>20</option>
                                <option>25</option>
                            </select>
                        </div>
                    </div>
                    <div id="branch-content-calendar">
                        <h2>Choose Date</h2>
                        <h1>Calendar</h1>
                    </div>
                </div>
                <button id="branch-button">Send All Transactions</button>
            </div>
        )
    }
}
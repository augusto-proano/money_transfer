import React, { Component } from 'react';
import { DayPicker as Calendar } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import store, { setDate, setBHDLeonServerTime, setMaxipagosServerTime } from '../store'
import { connect } from 'react-redux';

class Branch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            serverTime: ''
        }

        this.handleDate = this.handleDate.bind(this)
        this.handleServerTime = this.handleServerTime.bind(this)
        this.changeServerTime = this.changeServerTime.bind(this)
    }

    handleDate(date) {
        store.dispatch(setDate(date))
    }

    handleServerTime(event) {
        const { value } = event.target
        this.setState({ serverTime: value })
    }

    changeServerTime() {
        const { branch } = this.props
        const { serverTime } = this.state

        if (branch === "BHDLeon") {
            store.dispatch(setBHDLeonServerTime(serverTime))
        }
        else {
            store.dispatch(setMaxipagosServerTime(serverTime))
        }
    }

    render() {
        const { date, branch, serverTimeMaxipagos, serverTimeBHDLeon } = this.props
        let serverTime = branch === "BHDLeon" ? serverTimeBHDLeon : serverTimeMaxipagos
        console.log("SERVERTIME", serverTime)
        
        return (
            <div id="branch">
                <div id="branch-title">
                    <h1>{branch}</h1>
                </div>
                <div id="branch-content">
                    <div id="branch-content-server">
                        <h2>The server is being checked every {serverTime} minutes</h2>
                        <div id="branch-content-server-button">
                            <button onClick={this.changeServerTime}>Change time</button>
                            <select
                                name={serverTime}
                                onChange={this.handleServerTime}
                            >
                                <option>5</option>
                                <option>10</option>
                                <option>15</option>
                                <option>20</option>
                                <option>25</option>
                                <option>30</option>
                            </select>
                        </div>
                    </div>
                    <div id="branch-content-calendar">
                        <h2>Choose Date</h2>
                        <Calendar
                            onDayClick={this.handleDate}
                            selectedDays={date}
                        />
                    </div>
                </div>
                <button>Send All Transactions</button>
            </div>
        )
    }
}

const mapState = state => ({
    date: state.branch.date,
    branch: state.branch.branch,
    serverTimeBHDLeon: state.branch.serverTimeBHDLeon,
    serverTimeMaxipagos: state.branch.serverTimeMaxipagos
})

export default connect(mapState)(Branch)
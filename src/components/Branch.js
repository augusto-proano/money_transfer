import React, { Component } from 'react';
import { DayPicker as Calendar } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class Branch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "BHDLeon",
            minutes: 10,
            date: new Date()
        }

        this.handleDate = this.handleDate.bind(this)
    }

    handleDate(date) {
        // console.log("DATE", date)
        this.setState({date})
    }

    render() {
        return (
            <div id="branch">
                <div id="branch-title">
                    <h1>{this.state.title}</h1>
                </div>
                <div id="branch-content">
                    <div id="branch-content-server">
                        <h2>The server is being checked every {this.state.minutes} minutes</h2>
                        <div id="branch-content-server-button">
                            <button>Change time</button>
                            <select>
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
                            selectedDays={this.state.date}
                        />
                    </div>
                </div>
                <button>Send All Transactions</button>
            </div>
        )
    }
}
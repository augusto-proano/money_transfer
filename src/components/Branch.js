import React, { Component } from 'react'
import { DayPicker as Calendar } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import store, { setDate, setBHDServerTime, setMaxiServerTime } from '../store'
import { connect } from 'react-redux'

class Branch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      serverTime: ''
    }

    this.handleSelection = this.handleSelection.bind(this)
    this.triggerSetServerTime = this.triggerSetServerTime.bind(this)
  }

  handleSelection(evt) {
    const { value } = evt.target
    this.setState({ serverTime: value })
  }

  triggerSetServerTime() {
    const { setServerTime } = this.props
    const { serverTime } = this.state
    setServerTime(serverTime)
  }
  render() {
    const { date, branch, serverTime } = this.props
    const handleDate = date => {
      store.dispatch(setDate(date))
    }
    console.log('SERVERTIME', this.state.serverTime)
    return (
      <div id="branch">
        <div id="branch-title">
          <h1>{branch}</h1>
        </div>
        <div id="branch-content">
          <div id="branch-content-server">
            <h2>The server is being checked every {serverTime} minutes</h2>
            <div id="branch-content-server-button">
              <button onClick={this.triggerSetServerTime}>Change time</button>
              <select onChange={this.handleSelection} name={serverTime}>
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
            <Calendar onDayClick={handleDate} selectedDays={date} />
          </div>
        </div>
        <button>Send All Transactions</button>
      </div>
    )
  }
}

const mapStateBHD = state => ({
  date: state.branch.date,
  branch: state.branch.branch,
  serverTime: state.branch.serverTimeBHDLeon
})

const mapStateMaxi = state => ({
  date: state.branch.date,
  branch: state.branch.branch,
  serverTime: state.branch.serverTimeMaxipagos
})

const mapDispatchBHD = dispatch => ({
  setServerTime: time => {
    dispatch(setBHDServerTime(time))
  }
})

const mapDispatchMaxi = dispatch => ({
  setServerTime: time => {
    dispatch(setMaxiServerTime(time))
  }
})

export const BHD = connect(
  mapStateBHD,
  mapDispatchBHD
)(Branch)

export const Maxi = connect(
  mapStateMaxi,
  mapDispatchMaxi
)(Branch)

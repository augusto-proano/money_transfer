import React from 'react'
import { DayPicker as Calendar } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import store, { setDate, setBHDServerTime, setMaxiServerTime } from '../store'
import { connect } from 'react-redux'

const Branch = props => {
  const { date, branch, setServerTime, serverTime } = props
  const handleDate = date => {
    store.dispatch(setDate(date))
  }

  return (
    <div id="branch">
      <div id="branch-title">
        <h1>{branch}</h1>
      </div>
      <div id="branch-content">
        <div id="branch-content-server">
          <h2>The server is being checked every {serverTime} minutes</h2>
          <div id="branch-content-server-button">
            <button onClick={setServerTime}>Change time</button>
            <select name={serverTime}>
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

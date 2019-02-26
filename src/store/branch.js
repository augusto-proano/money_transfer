import axios from 'axios'
import { getFullDate } from './utils'

// Action Types
const SET_DATE = 'SET_DATE'
const SET_BRANCH = 'SET_BRANCH'
const SET_BHD_SERVER_TIME = 'SET_BHD_SERVER_TIME'
const SET_MAXI_SERVER_TIME = 'SET_MAXI_SERVER_TIME'

// Initial State
const branchesState = {
  date: new Date(),
  branch: 'BHDLeon',
  serverTimeBHD: '10',
  serverTimeMaxi: '10'
}

// Action Creators
export const setDate = date => ({ type: SET_DATE, date })

export const setBranch = branch => ({ type: SET_BRANCH, branch })

export const setBHDServerTime = time => ({ type: SET_BHD_SERVER_TIME, time })

export const setMaxiServerTime = time => ({ type: SET_MAXI_SERVER_TIME, time })

//Thunk Creators
export const sendFilesBHD = date => async () => {
  const fullDate = getFullDate(date)
  try {
    const res = await axios.post('/api/bhdleon', { fullDate })
    console.log(res.data)
  } catch (err) {
    console.error(err)
  }
}

// Reducer
export default function(state = branchesState, action) {
  const { date, branch, time } = action
  switch (action.type) {
    case SET_DATE:
      return { ...state, date }
    case SET_BRANCH:
      return { ...state, branch }
    case SET_BHD_SERVER_TIME:
      return { ...state, serverTimeBHD: time }
    case SET_MAXI_SERVER_TIME:
      return { ...state, serverTimeMaxi: time }
    default:
      return state
  }
}

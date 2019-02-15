// Action Types
const SET_DATE = 'SET_DATE'
const SET_BRANCH = 'SET_BRANCH'
const SET_BHD_SERVER_TIME = 'SET_BHD_SERVER_TIME'
const SET_MAXI_SERVER_TIME = 'SET_MAXI_SERVER_TIME'

// Initial State
const defaultBranch = {
  date: new Date(),
  branch: 'BHDLeon',
  serverTimeBHDLeon: '10',
  serverTimeMaxipagos: '10'
}

// Action Creators

export const setDate = date => ({ type: SET_DATE, date })

export const setBranch = branch => ({ type: SET_BRANCH, branch })

export const setBHDServerTime = time => ({ type: SET_BHD_SERVER_TIME, time })

export const setMaxiServerTime = time => ({ type: SET_MAXI_SERVER_TIME, time })

// Reducer

export default function(state = defaultBranch, action) {
  switch (action.type) {
    case SET_DATE:
      return { ...state, date: action.date }
    case SET_BRANCH:
      return { ...state, branch: action.branch }
    case SET_BHD_SERVER_TIME:
      return { ...state, serverTimeBHDLeon: action.time }
    case SET_MAXI_SERVER_TIME:
      return { ...state, serverTimeMaxipagos: action.time }
    default:
      return state
  }
}

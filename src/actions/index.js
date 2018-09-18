const SET_SUN_DATA = 'SET_SUN_DATA';

import axios from 'axios';

const API_KEY = 'AIzaSyA0-qvrd1FgBP9Vhe-D8kiFDij0Gm1NmDY'
const LOCAL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json
  ?location=-33.8670522,151.1957362
  &radius=500
  &types=food
  &name=harbour
  &key=AIzaSyA0-qvrd1FgBP9Vhe-D8kiFDij0Gm1NmDY`
const SUNDATA = `http://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400`

const setSunData = (data) => {
  return {
    type: SET_SUN_DATA,
    payload: data
  }
}

export const getSunData = () => {
  return (dispatch) => {
    fetch(SUNDATA)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      const data = {
        sunrise: json.results.sunrise,
        sunset: json.results.sunset
      }
      dispatch(setSunData(data))
    })
  }
};

export const getLocalInfo = () => {
  return (dispatch) => {
    axios.get(LOCAL)
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }
}

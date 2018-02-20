//ACTION CREATOR
import axios from 'axios';

//this is the API_KEY that we'ra going to make use of when we
//make the actual request
const API_KEY = 'ce39d0a598b829bef4bbda504a7cdccf';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//ZAMIAST samples napisał api
export const FETCH_WEATHER = 'FETCH_WEATHER';
//Action creator - that's going to responsible for making API request
// to fetch our weather data
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);//request=promise, jest odpowiedzialny za tworzenie AJAX request

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

//REDUCER
import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
    return [ action.payload.data, ...state];  //do istniejącej tablicy dodajemy nową tablicę
    // to samo, co wyżej -    return state.concat([action.payload.data]);
  }
  return state;
}

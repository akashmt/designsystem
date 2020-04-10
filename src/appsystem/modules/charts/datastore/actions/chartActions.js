import { GET_CHARTDATA } from './chartConsts'
import axios from 'axios'

const SERVER = 'http://localhost:8001/charts';

export const getChartdata = () => async dispatch => {

  try {
    const res = await axios.get(`${SERVER}`);
    dispatch({
      type: GET_CHARTDATA,
      payload: res.data
    });
  } catch (e) {
    console.log(e);
  }

};
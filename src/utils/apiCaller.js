import axios from 'axios';
import * as ConFig from '../constants/ConFig';

export default function callApi(endpoint, method="GET", body){
    return axios({
        method: method,
        url: `${ConFig.API_URL}/${endpoint}`,
        data: body
      }).catch(err => {
        console.log(err);
      });
}; 
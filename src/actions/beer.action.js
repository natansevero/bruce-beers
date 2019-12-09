import axios from 'axios';
import { GET_BEERS, GET_ONE_BEER } from './types';
import API_URL from '../utils/api';

export function getBeersByPageNumber(pageNumber) {
    return (dispatchEvent, getState) => {
        axios.get(`${API_URL}?page=${pageNumber}&per_page=6`)
            .then(res => {
                let beers = JSON.parse(JSON.stringify(getState().beer.list))
                
                let concatedList = beers.concat(res.data);

                dispatchEvent({ type: GET_BEERS, payload: concatedList })
            })
    }
}

export function getOneBeerById(id) {
    return dispatchEvent => {
        axios.get(`${API_URL}/${id}`)
            .then(res => dispatchEvent({ type: GET_ONE_BEER, payload: res.data[0] }))
    }
}
import { ADD_DATA, FETCH_DATA } from './types';

export function fetchData() {
    return dispatchEvent => {
        const datas = [1, 2, 4, 5]
        dispatchEvent({ type: FETCH_DATA, payload: datas })
    }
}

export function addData(number) {
    return (dispatchEvent, getState) => {
        let datas = JSON.parse(JSON.stringify(getState().data.info));
        datas.push(number);

        dispatchEvent({ type: ADD_DATA, payload: datas })
    }
}
import axios from "axios";

import {
    GET_PASSEIOS_REQUEST,
    GET_PASSEIOS,
} from "../constants/passeio";

import { API_URL } from "../../globalVariables";

export const getPasseios = (token) => async (dispatch) => {
    dispatch({ type: GET_PASSEIOS_REQUEST });

    await axios.get(`${API_URL}/passeio`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            dispatch({
                type: GET_PASSEIOS,
                payload: {
                    passeios: response.data,
                },
            });
        })
        .catch(error => {
            console.log(error);
        });
}




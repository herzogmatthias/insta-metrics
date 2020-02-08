import { createAction } from "@reduxjs/toolkit";
import { FETCH_BASIC_INFORMATION } from "../types/sidebarTypes";
import axios from 'axios'

const URI = 'http://localhost:8080/basic-information'

export const fetchBasicInformation = createAction(FETCH_BASIC_INFORMATION)


export function getBasicInformation() {
    return (dispatch: any) => {
        axios.get(URI).then(res => {
            dispatch({type: FETCH_BASIC_INFORMATION, payload: res.data})
        })
    }
}
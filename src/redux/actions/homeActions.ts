import { HomeActionTypes, ADD_TODO } from "../types/homeTypes";
import {createAction} from '@reduxjs/toolkit'

export const add_todos = createAction(ADD_TODO)
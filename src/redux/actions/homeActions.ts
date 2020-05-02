import { createAction } from "@reduxjs/toolkit";
import { CHANGE_KEY } from "../types/homeTypes";

export const add_todos = createAction(CHANGE_KEY);

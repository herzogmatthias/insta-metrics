import { REINIT_ADMIN_STATE } from "../types/adminTypes";
import { createAction } from "@reduxjs/toolkit";

export const reinitAdminState = createAction(REINIT_ADMIN_STATE);

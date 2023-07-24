import { createSlice } from "@reduxjs/toolkit";
import { cookieName } from "../components/Constant";
import { setCookie, removeCookie } from 'ko-basic-cookie';


export const EmployeeSlice = createSlice({
  name: 'employee',
  initialState: { token: "" },
  reducers: {
    employeeLogin: (state, action) => {
      state.token = action.payload.token;
      setCookie(cookieName, state.token, 1);
    },
    employeeLogout: (state, action) => {
      state.token = '';
      removeCookie(cookieName);
    },
  },
})

export const { employeeLogin, employeeLogout } = EmployeeSlice.actions

export default EmployeeSlice.reducer
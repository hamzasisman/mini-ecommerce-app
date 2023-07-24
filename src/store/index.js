import { configureStore } from '@reduxjs/toolkit'
import { LocalizationSlice } from './LocalizationSlice'
import { EmployeeSlice } from './EmployeeSlice'

const store = configureStore({
  reducer: {
    localizationStore: LocalizationSlice.reducer,
    employeeStore: EmployeeSlice.reducer,
  },
})

export default store
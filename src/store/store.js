import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "../services/loginSlice";

export const store = configureStore({
    reducer: {
    
      login: loginReducer,
    },
  });
  
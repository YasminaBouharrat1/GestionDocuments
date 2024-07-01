import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";
import inscriptionReducer from "./slices/inscripSlice";
import documentReducer from "./slices/documentSlice"
const store = configureStore({
  reducer: {
    login: loginReducer,
    inscription: inscriptionReducer,
    document:documentReducer
   
 
  },
});

export default store;

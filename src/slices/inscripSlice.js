import { createSlice } from "@reduxjs/toolkit";
// import { users } from "../users";

const initialState = {
  idUser: null,
  nom: "Most",
  login: "mos@vg.com",
  password: "1234",
  role:"membre",
  comments: [],
};

const inscripSlice = createSlice({
  name: "inscription",
  initialState,
  reducers: {
    // addUser(state) {
    //   const usersLength = users.filter((u) => u.email === state.email).length;
    //   console.log(usersLength);
    //   if (usersLength) {
    //     state.idSportif = users[users.length - 1].idSportif + 1;
    //     users.push(state.user);
    //   }
    // },
    annuler(state) {
      state = initialState;
    },
    updateNom(state, action) {
      state.nom = action.payload;
    },
    updateLogin(state, action) {
      state.login = action.payload;
    },
    updatePwd(state, action) {
      state.password = action.payload;
    },
    updateId(state, action) {
      state.idUser = action.payload;
    },
  },
});

export const {
  updateLogin,
  updateNom,
  updatePwd,
  annuler,
  updateId,
} = inscripSlice.actions;

export default inscripSlice.reducer;

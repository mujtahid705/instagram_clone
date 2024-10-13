import { createSlice, current } from "@reduxjs/toolkit";
import { DUMMY_ACCOUNTS } from "../data/dummyData";

const initialState = {
  isLoggedin: false,
  accounts: DUMMY_ACCOUNTS,
  currentAccount: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLoggedin: (state, action) => {
      state.isLoggedin = action.payload;
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      const account = state.accounts.find(
        (account) => account.email === email && account.password === password
      );
      console.log(account);
      if (account) {
        state.isLoggedin = true;
        state.currentAccount = account;
        console.log("Logged In");
      } else {
        console.log("Wrong Email or Password");
      }
    },
    register: (state, action) => {
      const { name, email, password } = action.payload;

      const account = state.accounts.find((account) => account.email === email);

      if (!account) {
        state.accounts.push({ name, email, password });
        state.isLoggedin = true;
        state.currentAccount = { name, email, password };
        console.log("Account Created");
      } else {
        console.log("Account already exists");
      }
    },
    logout: (state) => {
      (state.isLoggedin = false), (state.currentAccount = null);
    },
  },
});

export const { setIsLoggedin, login, register, logout } = userSlice.actions;

export default userSlice.reducer;

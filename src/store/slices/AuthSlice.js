import { createSlice } from "@reduxjs/toolkit";

const loadAuth = () => {
  try {
    const auth = localStorage.getItem("auth");
    if (auth) {
      return JSON.parse(auth);
    } else {
      localStorage.setItem(
        "auth",
        JSON.stringify({ isLoggedIn: false, email: null })
      );
      return { isLoggedIn: false, email: null };
    }
  } catch (error) {
    console.error("Failed to read auth:", error);
    return { isLoggedIn: false, email: null };
  }
};

const initialState = {
  status: loadAuth(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //login the User
    userLogin: (state, action) => {
      state.status.isLoggedIn = true;
      state.status.email = action.payload.email;
    },
    //logout the user
    useLogOut: (state) => {
      state.status.isLoggedIn = false;
      state.status.email = null;
    },
  },
});

export const localStorageAuthMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type?.includes("auth")) {
    localStorage.setItem("auth", JSON.stringify(store.getState().auth.status));
  }

  return result;
};

export const { useLogOut, userLogin } = authSlice.actions;

export default authSlice.reducer;

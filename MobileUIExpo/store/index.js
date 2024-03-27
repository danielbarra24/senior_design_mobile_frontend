import { createStore } from "import { connect } from 'react-redux'";
import emailReducer from "./emailSlice";

const store = configureStore({
  reducer: {
    email: emailReducer,
  },
});

export default store;

import { checkRedux } from "../Actions/test-action";

const initialState = {
  reduxDisplayed: true,
};

const testReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case checkRedux:
      console.log("inside check redux reducer");
      return state;
    default:
      return state;
  }
};

export default testReducer;

import { actions } from "../actions/noticiasActions";

const noticiasReducer = (state, action) => {
  switch (action.type) {
    case actions.set_filter:
      return {
        ...state,
        filter: action.payload,
      };
    case actions.set_data:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default noticiasReducer;
import { CANGE_CATEGORY, CANGE_DIFFICULTY, CANGE_SCORE } from "./actions";

const initialState = {
  question_category: "",
  question_difficulty: "",
  amount_of_questions: 15,
  score: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CANGE_CATEGORY:
      return {
        ...state,
        question_category: action.payload,
      };
    case CANGE_DIFFICULTY:
      return {
        ...state,
        question_difficulty: action.payload,
      };
    case CANGE_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

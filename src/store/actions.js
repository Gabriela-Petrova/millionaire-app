export const CANGE_CATEGORY = "CANGE_CATEGORY";
export const CANGE_DIFFICULTY = "CANGE_DIFFICULTY";
export const CANGE_SCORE = "CANGE_SCORE";

export const handleCategoryChange = (payload) => ({
  type: CANGE_CATEGORY,
  payload,
});

export const handleDifficultyChange = (payload) => ({
  type: CANGE_DIFFICULTY,
  payload,
});

export const handleScoreChange = (payload) => ({
  type: CANGE_SCORE,
  payload,
});

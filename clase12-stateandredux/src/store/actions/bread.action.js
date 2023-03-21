export const SELECT_BREAD = "SELECT_BREAD";
export const FILTER_BREADS = "FILTER_BREADS";

export const selectBread = (id) => ({
  type: SELECT_BREAD,
  breadId: id,
});

export const filterBreads = (id) => ({
  type: FILTER_BREADS,
  categoryId: id,
});

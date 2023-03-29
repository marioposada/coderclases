import { URL_API } from "../../constant/database";

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CONFIRM_ORDER = "CONFIRM_ORDER";

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    item,
  };
};

export const removeItem = (itemId) => {
  return {
    type: REMOVE_ITEM,
    itemId,
  };
};

export const confirmOrder = (order) => ({
  type: CONFIRM_ORDER,
  order,
});

export const confirmCart = (items, total) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/orders.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: Date.now(),
          items,
          total,
        }),
      });

      const result = await response.json();

      dispatch({
        type: CONFIRM_ORDER,
        result: result,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

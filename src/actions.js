export const addItem = (item) => ({
  type: "ADD_ITEM",
  item,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  item,
});

export const updateItem = (id, quantity) => ({
  type: "UPDATE_ITEM",
  id,
  quantity
});


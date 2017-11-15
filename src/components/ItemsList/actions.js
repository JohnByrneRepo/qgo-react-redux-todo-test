const uid = () => Math.random().toString(34).slice(2);

export function addItem(text) {
  return {
    type: 'ADD_ITEM',
    payload: {
      id: uid(),
      isDone: false,
      text: text
    }
  };
}

export function toggleItem(id) {
  return {
    type: 'TOGGLE_ITEM',
    payload: id
  };
}
export const ADD_ITEM = 'qgo/assessment/ADD_ITEM';
export const REMOVE_ITEM = 'qgo/assessment/REMOVE_ITEM';
export const TOGGLE_ITEM = 'qgo/assessment/TOGGLE_ITEM';

export const addItem = content => {
  return { type: ADD_ITEM, content };
};

export const removeItem = id => {
  return { type: REMOVE_ITEM, id };
};

export const toggleItem = id => {
  return { type: TOGGLE_ITEM, id };
};

export const initialState = {
  items: [
    { id: 1, content: 'Call mum', completed: false },
    { id: 2, content: 'Buy cat food', completed: false },
    { id: 3, content: 'Water the plants', completed: false },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const nextId =
        state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1;
      const newItem = {
        id: nextId,
        content: action.content,
      };
      return {
        ...state,
        items: [...state.items, newItem],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => {
          return action.id !== item.id;
        })
      };
    case TOGGLE_ITEM:
      return {
        ...state,
        items: state.items.map(item => {
          if (action.id === item.id) {
            item.completed = !item.completed;
          }
          return item;
        })
      }
      //   debugger;
      // if (state.id !== action.id) {
      //   return state;
      // }
      
      // return {
      //   ...state,
      //   completed: !state.completed
      // }
      // };
    default:
      return state;
  }
};

export default reducer;

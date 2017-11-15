import { List, Map } from 'immutable';

const init = List([]);

export default function reducer(items=init, action) {
  switch(action.type) {
    case 'ADD_ITEM':
      return items.push(Map(action.payload));
    case 'TOGGLE_ITEM':
      return items.map(t => {
        if(t.get('id') === action.payload) {
          return t.update('isDone', isDone => !isDone);
        } else {
          return t;
        }
      });
    default:
      return items;
  }
}

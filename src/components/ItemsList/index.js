import React from 'react';

export function Item(props) {
  const { item } = props;

  if(item.isDone) {
    return <strike>{item.text}</strike>;
  } else {
    return <span>{item.text}</span>;
  }
}

export function ItemsList(props) {
  const { items, toggleItem, addItem } = props;

  const onSubmit = (event) => {
    const input = event.target;
    const text = input.value;
    const isEnterKey = (event.which == 13);
    const isLongEnough = text.length > 0;

    if(isEnterKey && isLongEnough) {
      input.value = '';
      addItem(text);
    }
  };

  const toggleClick = id => event => toggleItem(id);

  return (
    <div className='item'>
      <input type='text'
             className='item__entry'
             placeholder='Add item'
             onKeyDown={onSubmit} />
      <ul className='item__list'>
        {items.map(t => (
          <li key={t.get('id')}
              className='item__item'
              onClick={toggleClick(t.get('id'))}>
            <Item item={t.toJS()} />
          </li>
        ))}
      </ul>
    </div>
  );
}
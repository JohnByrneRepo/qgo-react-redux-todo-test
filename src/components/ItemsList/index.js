import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ItemCheckbox from '../ItemCheckbox';
import ItemRemover from '../ItemRemover';
import { toggleItem, removeItem } from '../../logic/todos';
import './styles.css';

export const ItemsList = ({ items, onRemove, onToggle }) => {
  return (
    <div>
      <ul className="itemsList-ul">
        {items.length < 1 && <p id="items-missing">Add some tasks above.</p>}
        {items.map(item =>
          <li key={item.id}>
            <ItemCheckbox onToggle={onToggle} id={item.id} label={item.content} />
            <ItemRemover onRemove={onRemove} id={item.id} />
          </li>
        )}
      </ul>
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return { items: state.todos.items };
};

const mapDispatchToProps = dispatch => ({
  onToggle: id => dispatch(toggleItem(id)),
  onRemove: id => dispatch(removeItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);

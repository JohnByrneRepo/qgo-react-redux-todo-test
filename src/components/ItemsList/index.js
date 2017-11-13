import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ItemCheckbox from '../ItemCheckbox';
import ItemRemover from '../ItemRemover';
import { toggleItem, removeItem, hideCompletedTodos } from '../../logic/todos';
import './styles.css';

class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false
    };
  }

// export const ItemsList = ({ items, onRemove, onToggle, onHideCompletedTodos }) => {
  render() {
    // debugger;
    return (
      <div>
        <ul className="itemsList-ul">
          {this.props.items.length < 1 && <p id="items-missing">Add some tasks above.</p>}
          {this.props.items.map(item =>
            <li key={item.id}>
              <ItemCheckbox
                completed={item.completed}
                hidden={item.hidden}
                onToggle={this.props.onToggle}
                id={item.id}
                label={item.content} />
              <ItemRemover
                completed={item.completed}
                hidden={item.hidden}
                onRemove={this.props.onRemove}
                id={item.id} />
            </li>
          )}
        </ul>
        <div className="hideCompletedCheckbox">
          <input type="checkbox"
            className="itemCheckbox"
            id="hideCompletedCheckbox"
            onClick={(e) => {
              this.setState({
                hidden: !this.state.hidden
              });
              this.props.onHideCompletedTodos(this.state.hidden)
          }} />
          <label className="hideCompletedCheckboxLabel" htmlFor="hideCompletedCheckbox">Hide completed?</label>
        </div>
      </div>
    );
  }
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  completedTodosHidden: PropTypes.bool.isRequired
};

ItemsList.defaultProps = {
  items: [],
  completedTodosHidden: false
};

const mapStateToProps = state => {
  return { completedTodosHidden: state.todos.completedTodosHidden, items: state.todos.items };
};

const mapDispatchToProps = dispatch => ({
  onToggle: id => dispatch(toggleItem(id)),
  onRemove: id => dispatch(removeItem(id)),
  onHideCompletedTodos: hidden => dispatch(hideCompletedTodos(hidden))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);

import { connect } from 'react-redux';
import { ItemsList } from '../components/ItemsList';
import { addItem, toggleItem } from '../components/ItemsList/actions';

export const ItemsListContainer = connect(
  function mapState(state) {
    return { items: state };
  },
  function mapDispatch(dispatch) {
    return {
      addItem: text => dispatch(addItem(text)),
      toggleItem: id => dispatch(toggleItem(id))
    };
  }
)(ItemsList);
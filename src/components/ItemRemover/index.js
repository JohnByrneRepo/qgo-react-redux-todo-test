import React, { Component, PropTypes } from 'react';
import './styles.css';

class ItemRemover extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      {!this.props.hidden &&
        <div className="itemRemover" onClick={(e) => {
          let id = this.props.id;
          this.props.onRemove(id);
        }}>
          X
        </div>}
    </div>)
  }
}

export default ItemRemover;

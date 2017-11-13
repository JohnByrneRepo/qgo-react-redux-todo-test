import React, { Component, PropTypes } from 'react';
import './styles.css';

class ItemCheckbox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      {!this.props.hidden &&
        <div className="md-checkbox">
          <input type="checkbox"
            className="itemCheckbox"
            defaultChecked={this.props.completed}
            id={this.props.id} onClick={(e) => {
              let id = this.props.id;
              this.props.onToggle(id);
          }} />
          <label className="itemCheckboxLabel" htmlFor={this.props.id}>{this.props.label}</label>
        </div>}
    </div>)
  }
}

export default ItemCheckbox;

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Consumer } from "../../context";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    showContantInfo: false
  };
  sf = e => {
    this.setState({ showContantInfo: !this.state.showContantInfo });
  };
  sf2 = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContantInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <FontAwesomeIcon
                  onClick={this.sf}
                  icon="sort-down"
                  style={{ cursor: "pointer" }}
                />
                <FontAwesomeIcon
                  onClick={this.sf2.bind(this, id, dispatch)}
                  icon="times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                />
              </h4>

              {showContantInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;

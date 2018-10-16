import React from "react";
import Input from "./Input";

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit() {}
  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>
        <Input />
      </form>
    );
  }
}

export default FormContainer;

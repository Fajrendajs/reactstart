import React from "react";

class Forma extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      message: "",
      editor: "",
      terms: false,
      test: "Yes"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  handleKeyUp(event) {
    // event.preventDefault();
    if (event.keyCode === 13) {
      this.setState({
        fullname: "kliknut enter"
      });
    }
  }

  handleSubmit(event) {
    this.setState({
      fullname: "kliknut enter"
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Full Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="fullname"
                value={this.state.fullname}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">What do you like about React</label>
            <div className="control">
              <textarea
                className="textArea"
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Pick your editor</label>
            <div className="control">
              <div className="select">
                <select
                  value={this.state.editor}
                  name="editor"
                  onChange={this.handleChange}
                >
                  <option value="vscode">VsCode</option>
                  <option value="atom">Atom</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input
                  name="terms"
                  type="checkbox"
                  checked={this.state.terms}
                  onChange={this.handleChange}
                />
                I agree to the{" "}
                <a href="https://google.com">terms and conditions</a>
              </label>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="label">Do you test your React code?</label>
              <label className="radio">
                <input
                  type="radio"
                  name="test"
                  onChange={this.handleChange}
                  value="Yes"
                  checked={this.state.test === "Yes"}
                />
                Yes
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="test"
                  onChange={this.handleChange}
                  value="No"
                  checked={this.state.test === "No"}
                />
                No
              </label>
            </div>
          </div>
        </form>
        <div>{this.state.fullname}</div>
        <div>{this.state.message}</div>
        <div>{this.state.editor}</div>
        <div>{this.state.terms.toString()}</div>
        <div>{this.state.test}</div>
      </div>
    );
  }
}

export default Forma;

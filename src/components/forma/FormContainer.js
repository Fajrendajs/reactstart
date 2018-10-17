import React from "react";
import Input from "./Input";
import Select from "./Select";
import CheckBox from "./Checkbox";
import TextArea from "./TextArea";
import Button from "./Button";

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        name: "",
        age: "",
        gender: "",
        skills: [],
        about: ""
      },
      genderOptions: ["Male", "Female", "Others"],
      skillOptions: ["Programming", "Development", "Design", "Testing"]
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSkillsCheckBox = this.handleSkillsCheckBox.bind(this);
    this.handleTextArea = this.handleTextArea.bind(this);
  }

  handleFullName(e) {
    let name = e.target.value;
    this.setState(prevState => ({
      newUser: { ...prevState.newUser, name }
    }));
  }

  handleAge(e) {
    let age = e.target.value;
    this.setState(prevState => ({
      newUser: { ...prevState.newUser, age }
    }));
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;

    this.setState(prevState => {
      return {
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      };
    });
  }

  handleSkillsCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newUser.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.skills.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.newUser.skills, newSelection];
    }

    this.setState(prevState => ({
      newUser: { ...prevState.newUser, skills: newSelectionArray }
    }));
  }

  handleTextArea(e) {
    let about = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        about
      }
    }));
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch("http://example.com", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        name: "",
        age: "",
        gender: "",
        skills: [],
        about: ""
      }
    });
  }

  render() {
    return (
      <div>
        <form className="container" onSubmit={this.handleFormSubmit}>
          <Input
            type={"text"}
            title={"Full Name"}
            name={"name"}
            value={this.state.newUser.name}
            placeholder={"Enter your name"}
            handleChange={this.handleInput}
          />
          <Input
            type={"text"}
            title={"Age"}
            name={"age"}
            value={this.state.newUser.age}
            placeholder={"Enter your age"}
            handleChange={this.handleInput}
          />
          <Select
            title={"Gender"}
            name={"gender"}
            options={this.state.genderOptions}
            value={this.state.newUser.gender}
            placeholder={"Select Gender"}
            handleChange={this.handleInput}
          />
          <CheckBox
            title={"Skills"}
            name={"skills"}
            options={this.state.skillOptions}
            selectedOptions={this.state.newUser.skills}
            handleChange={this.handleSkillsCheckBox}
          />
          <TextArea
            title={"About you."}
            rows={10}
            cols={10}
            value={this.state.newUser.about}
            name={"about"}
            handleChange={this.handleTextArea}
            placeholder={"Describe your past experience and skills"}
          />
          <Button
            action={this.handleFormSubmit}
            type={"primary"}
            title={"Submit"}
            style={buttonStyle}
          />
          <Button
            action={this.handleClearForm}
            type={"secondary"}
            title={"Clear"}
            style={buttonStyle}
          />
        </form>
        {this.state.newUser.name + " "}
        {this.state.newUser.age + " "}
        {this.state.newUser.gender + " "}
        {this.state.newUser.skills + " "}
        {this.state.newUser.about + " "}
      </div>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};
export default FormContainer;

import React, { Component } from "react";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faPlus,
  faSortDown,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import Forma from "./components/forma/Forma";
import FormContainer from "./components/forma/FormContainer";
import { Provider } from "./context";

library.add(fab, faCheckSquare, faCoffee, faPlus, faSortDown, faTimes);
/*
class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}
*/

class App extends Component {
  render() {
    return (
      <div className="container">
        <h3>React Form</h3>
        <FormContainer />
      </div>
    );
  }
}

export default App;

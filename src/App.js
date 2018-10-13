import React, { Component } from "react";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
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

import { Provider } from "./context";

library.add(fab, faCheckSquare, faCoffee, faPlus, faSortDown, faTimes);

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

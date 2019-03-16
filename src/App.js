import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Todo-App">
          <form>
            <input type="text" />
          </form>
          <div className="Todo-List">
            <ul>
              <li>
                <input type="checkbox" /> Create Static UI
              </li>
              <li>
                <input type="checkbox" /> Create Initial state
              </li>
              <li>
                <input type="checkbox" /> Create State to render UI
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

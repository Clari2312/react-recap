import { Component } from "react";
import { Character, Paragraph, Title } from "./components";

import "./App.css";

class App extends Component {
  state = {
    userList: ["Paperino", "Topolino", "Pluto", "Paperina", "Pippo"],
  };

  //arrow function
  changeList = (index, newValue, event) => {
    console.log("event ", event);
    this.setState((prev) => {
      let newList = [...prev.userList];
      newList[index] = newValue;
      return { userList: newList };
    });
  };

  //function with bind
  // changeList(index, newValue, event) {
  //   console.log("event ", event);
  //   console.log("this ", this);
  //   this.setState((prev) => {
  //     let newList = [...prev.userList];
  //     newList[index] = newValue;
  //     return { userList: newList };
  //   });
  // }

  render() {
    console.log("state ", this.state);
    const characterList = this.state.userList.map((value, i) => (
      <Character key={value + i} user={value} />
    ));

    return (
      <div className="App">
        <Title />
        {/* event in arrow function */}
        <button onClick={(e) => this.changeList(0, "Pluto", e)}>change</button>

        {/* event in binding */}
        {/* <button onClick={this.changeList.bind(this, 0, "Pluto")}>change</button> */}
        <Paragraph />

        {/* <Character user="Paperino" />
        <Character user="Topolino" />
        <Character user="Pluto" />
        <Character user="Paperina" />
        <Character user="Pippo" /> */}
        {characterList}
      </div>
    );
  }
}

export default App;

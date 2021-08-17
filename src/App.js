import { Component } from "react";
import { Character, Paragraph, Title, Dialog } from "./components";

import "./App.css";

class App extends Component {
  state = {
    userList: ["Paperino", "Topolino", "Pluto", "Paperina", "Pippo"],
    isOpen: false,
  };

  // Cambiamento di stato al click del bottone change
  openDialog = () => {
    //al cambiamento di stato gli passo l'aspetto nuovo dello stato
    // this.setState({
    //   isOpen: true,
    // });
    //al cambiamento di stato usa una funzione
    this.setState((prevState) => ({ isOpen: true }));
  };

  closeDialog = () => {
    this.setState((prevState) => ({ isOpen: false }));
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
        {/* {this.state.isOpen ? <Dialog /> : null} */}
        {this.state.isOpen && (
          <Dialog close={this.closeDialog} confirmed={this.changeList} />
        )}
        <Title />

        <button onClick={this.openDialog}>change</button>

        {/* event in arrow function */}
        {/* <button onClick={(e) => this.changeList(0, "Pluto", e)}>change</button> */}

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

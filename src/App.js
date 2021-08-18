import { Component } from "react";
import { Character, Paragraph, Title, Dialog, Form } from "./components";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("constructor is executed");
  }

  state = {
    userList: ["Paperino", "Topolino", "Pluto", "Paperina", "Pippo"],
    isOpen: false,
    form: {
      index: "",
      name: "",
    },
  };

  componentDidMount() {
    console.log("component did mount");
    // usato spesso per fare i fetch
  }

  // this.setState()
  shouldComponentUpdate() {
    console.log("should component update");
    return true;
  }

  componentDidUpdate() {
    console.log("component did update..");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  changeIndexHandler = (event) => {
    console.log("event ", event.target.value);
    // ES6 -> Destructuring
    const { value } = event.target;
    // se passo una funzione nel setState.
    // quella funzione cattura il precedente Stato e precedente Props
    this.setState((prevState, prevProps) => {
      return {
        form: {
          index: value,
          name: prevState.form.name,
        },
      };
    });
  };

  changeNameHandler = (event) => {
    const { value } = event.target;
    console.log("event ", event.target.value);
    this.setState((prevState, prevProps) => {
      return {
        form: {
          index: prevState.form.index,
          name: value,
        },
      };
    });
  };

  // Cambiamento di stato al click del bottone change
  openDialog = () => {
    //al cambiamento di stato gli passo l'aspetto nuovo dello stato
    // this.setState({
    //   isOpen: true,
    // });
    //al cambiamento di stato usa una funzione
    this.setState((prevState) => {
      // console.log("prevState ", prevState);
      return { isOpen: true };
    });
  };

  closeDialog = () => {
    this.setState((prevState) => ({ isOpen: false }));
  };

  //arrow function
  changeList = (event) => {
    console.log("event ", event);
    const newIndex = this.state.form.index;
    const newName = this.state.form.name;
    this.setState((prev) => {
      let newList = [...prev.userList];
      newList[newIndex] = newName;
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

  deleteCardHandler = (index) => {
    const newList = this.state.userList;
    newList.splice(index, 1);
    this.setState({
      userList: newList,
    });
  };

  render() {
    console.log("rendering...");
    // console.log("state ", this.state);
    const characterList = this.state.userList.map((value, i) => (
      <Character
        key={value + i}
        user={value}
        charIndex={i}
        onDelete={this.deleteCardHandler}
      />
    ));

    return (
      <div className="App">
        {/* {this.state.isOpen ? <Dialog /> : null} */}
        {this.state.isOpen && (
          <Dialog close={this.closeDialog} confirmed={this.changeList} />
        )}
        <Title />
        <Form
          open={this.openDialog}
          changeIndex={this.changeIndexHandler}
          changeName={this.changeNameHandler}
        />

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

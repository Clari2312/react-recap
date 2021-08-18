import { Component } from "react";
import "./Form.css";

class Form extends Component {
  // state = {
  //   form: {
  //     index: "",
  //     name: "",
  //   },
  // };

  // changeIndexHandler = (event) => {
  //   console.log("event ", event.target.value);
  //   const { value } = event.target;
  //   this.setState({
  //     form: {
  //       index: value,
  //     },
  //   });
  // };

  // changeNameHandler = (event) => {
  //   const { value } = event.target;
  //   console.log("event ", event.target.value);
  //   this.setState({
  //     form: {
  //       name: value,
  //     },
  //   });
  // };

  render() {
    const { open, changeIndex, changeName } = this.props;

    return (
      <form>
        <label>index:</label>
        <input type="number" onChange={(e) => changeIndex(e)}></input>
        <br />
        <label>name:</label>
        <input type="text" onChange={(e) => changeName(e)}></input>
        <br />
        <button
          onClick={(e) => {
            // console.log("event ", e);
            e.preventDefault();
            open();
          }}
        >
          change
        </button>
      </form>
    );
  }
}

export default Form;

import { Component } from "react";
import "./Character.css";

class Character extends Component {
  componentWillUnmount() {
    console.log("character will unmount....");
  }

  render() {
    const { onDelete, charIndex } = this.props;

    return (
      <div className="card" onClick={() => onDelete(charIndex)}>
        {this.props.user}
      </div>
    );
  }
}

export default Character;

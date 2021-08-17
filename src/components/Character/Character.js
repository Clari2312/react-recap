import { Component } from "react";
import "./Character.css";

class Paragraph extends Component {
  render() {
    return <div className="card">{this.props.user}</div>;
  }
}

export default Paragraph;

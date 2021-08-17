import { Component } from "react";
import "./Dialog.css";

class Dialog extends Component {
  render() {
    //console.log("Dialog: ", this.props);
    const { close, confirmed } = this.props;
    return (
      <div className="backdrop">
        <div className="dialog">
          <h4 className="dialog-title">Attention</h4>
          <p className="dialog-body">Are you sure?</p>
          <div className="dialog-actions">
            <button onClick={close}>Cancel</button>
            <button
              onClick={() => {
                confirmed(0, "Pippo");
                close();
              }}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Dialog;

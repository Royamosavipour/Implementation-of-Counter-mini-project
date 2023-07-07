import React, { Component } from "react";
import "./Container.css";
// Counter*********************************
export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };

    this.addcount = this.addcount.bind(this);
    this.lowoffcount = this.lowoffcount.bind(this);
  }

  addcount() {
    this.setState((prevstate) => {
      return { count: prevstate.count + 1 };
    });
  }

  lowoffcount() {
    this.setState(pervstate=>{
        return{count:pervstate.count -1}
    });
  }

  //   render*****************'
  render() {
    return (
      <div>
        <section>
          <div className="container-box">
            <h1>Container</h1>
            <h2 id="count">{this.state.count} </h2>
            <div className="btn-box">
              <button className="add-count" onClick={this.addcount}>
                Add
              </button>
              <button className="low-off-count" onClick={this.lowoffcount}>
                Mines
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

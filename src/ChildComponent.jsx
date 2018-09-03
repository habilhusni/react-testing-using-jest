import React, { Component } from "React";

export default class ChildComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "husni"
    };
  }

  handleNotJonny = () => {
    this.setState({
      name: "habil"
    });
  };

  handleClick = () => {
    this.setState({
      name: this.state.name === "jonny" ? "husni" : "habil"
    });
  };

  componentDidMount() {
    this.setState({
      name: "jonny"
    });
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <div onClick={this.handleClick}>
          {name === "jonny" ? (
            <span>Statenya jadi jonny: {name}</span>
          ) : (
            <span>Statenya jadi bukan jonny: {name}</span>
          )}
        </div>
        <div>Ini div kedua</div>
      </div>
    );
  }
}

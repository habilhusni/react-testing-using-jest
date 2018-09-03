import React from "react";

export default class DemoComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "husni"
    };
  }

  handleClick = () => {
    this.setState({
      name: "kevin"
    });
  };

  componentDidMount() {
    this.setState({
      name: "herry"
    });
  }

  render() {
    return <div onClick={this.handleClick}>Hello hai {this.state.name}</div>;
  }
}

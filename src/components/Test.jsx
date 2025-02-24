import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello Word",
    };
  }

  componentDidMount() {
    console.log("É EXECUTADO QUANDO O USUÁRIO ASSESSA PELA PRIMEIRA VEZ");
  }
  render() {
    return <h1>{this.state.message}</h1>;
  }
}

export default Test;

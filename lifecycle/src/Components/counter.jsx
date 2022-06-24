import React, { Component } from "react";

const ErrorComponent = () => <div>{props.ignore}</div>;

class Counter extends React.Component {
  constructor(props) {
    console.log("Constructor");
    super(props);

    this.state = {
      counter: 0,
    };

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  componentDidMount() {
    console.log("Component Did Mount");
    console.log("----------------------");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);
    console.log("A", nextState);

    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log("should component update - Do not render");
      console.log("----------------------");
      return false;
    }
    console.log("should component update - Render");
    return true;
  }

  render() {
    console.log("Render");
    if (this.props.showErrorComponent && this.state.error) {
      return (
        <div> we have encountered an error! {this.state.error.message}</div>
      );
    }
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div className="counter">Counter: {this.state.counter}</div>
        {this.props.showErrorComponent ? <ErrorComponent /> : null}
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Did Update");
    console.log("----------------------");
  }
  componentWillUnmount() {
    console.log("Component will unmount");
    console.log("----------------------");
  }
  componentDidCatch(error, info) {
    console.log("Component Did Catch");
    this.setState({ error, info });
  }
}

export default Counter;

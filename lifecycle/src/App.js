import React from "react";
import ReactDOM, { render } from "react-dom";
import Counter from "./Components/counter";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mount: true,
      ignoreProp: 0,

      showErrorComponent: false,
    };
    this.mountCounter = () => this.setState({ mount: true });
    this.unmountCounter = () => this.setState({ mount: false });
    this.ignoreProp = () => this.setState({ ignoreProp: Math.random() });
    this.toggleError = () =>
      this.setState({ showErrorComponent: !this.state.showErrorComponent });
  }
  render() {
    return (
      <div>
        <button onClick={this.mountCounter} disabled={this.state.mount}>
          Mount Counter
        </button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>
          UnMount Counter
        </button>
        <button onClick={this.ignoreProp}>Ignore Props</button>

        <button onClick={this.toggleError}>Toggle Error</button>
        {this.state.mount ? (
          <Counter
            ignoreProp={this.state.ignoreProp}
            showErrorComponent={this.state.showErrorComponent}
          />
        ) : null}
      </div>
    );
  }
}

import React, { Component } from "react";
import PropTypes from "prop-types";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      isMode: true,
    };
  }

  handlerChangeMode = () => {
    const { isMode } = this.state;
    this.setState({ isMode: !isMode });
  };

  handlerCount = () => {
    this.setState((state, props) => {
      const { count, isMode } = state;
      const newCount = isMode ? count + props.step : count - props.step;
      return { count: newCount };
    });
  };

  render() {
    const { count, isMode } = this.state;
    return (
      <article>
        <button onClick={this.handlerCount} disabled={isMode}>
          -
        </button>
        <h2>{count}</h2>
        <button onClick={this.handlerCount} disabled={!isMode}>
          +
        </button>
        <button onClick={this.handlerChangeMode}>change mode</button>
      </article>
    );
  }
}

Counter.propTypes = {};

export default Counter;

import React, { Component } from "react";
import PropTypes from "prop-types";
import Counter from "../Counter";
import CounterControl from "../CounterControl";

class CounterSection extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
    };
  }

  setStep = (newStep) => {
    if (typeof newStep !== 'number') {
        throw new TypeError('value must be number');
    }
    this.setState({step: newStep})
  };
  
  render() {
    const { step } = this.state;
    return (
      <section>
        <Counter step={step} />
        <CounterControl step={step} setStep={this.setStep}/>
      </section>
    );
  }
}

CounterSection.propTypes = {};

export default CounterSection;

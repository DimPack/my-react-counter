import React, { Component } from "react";
import PropTypes from "prop-types";
import Counter from "../Counter";
import CounterControl from "../CounterControl";

class CounterSection extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      timeClick: 30,
    };
  }

  setStep = (newStep) => {
    if (typeof newStep !== 'number') {
        throw new TypeError('value must be number');
    }
    this.setState({step: newStep})
  };

  setTimeStep = (newTimeStep) => {
    if (typeof newTimeStep !== 'number') {
        throw new TypeError('value must be number');
    }
    this.setState({timeClick: newTimeStep})
  };
  resetValue = () => {
    this.setState({step: 1, timeClick: 30})
  }
  
  render() {
    const { step, timeClick } = this.state;
    return (
      <section>
        <Counter step={step} timeClick={timeClick} resetValue={this.resetValue}/>
        <CounterControl step={step} timeClick={timeClick} setStep={this.setStep} setTimeStep={this.setTimeStep}/>
      </section>
    );
  }
}

// CounterSection.propTypes = {};

export default CounterSection;

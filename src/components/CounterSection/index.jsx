import React, { Component } from "react";
import Counter from "../Counter";
import CounterControl from "../CounterControl";
import styles from "./CounterSection.module.scss";


class CounterSection extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      timeClick: 30,
    };
  }
  setValue = (newValue, type) => {
    if (typeof newValue !== "number") {
      throw new TypeError("value must be number");
    }
    this.setState({
      [type]: newValue,
    })
  };

  resetValue = () => {
    this.setState({ step: 1, timeClick: 30 });
  };


  render() {
    const { step, timeClick } = this.state;
    return (
      
      <section className={styles.containerMain}>
        <Counter
          step={step}
          timeClick={timeClick}
          resetValue={this.resetValue}
          setValue = {this.setValue}
        />
        <CounterControl
          step={step}
          timeClick={timeClick}
          setValue = {this.setValue}
          // setStep={this.setStep}
          // setTimeStep={this.setTimeStep}
        />
      </section>
    );
  }
}



export default CounterSection;

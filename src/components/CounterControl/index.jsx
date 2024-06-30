import React from "react";
import PropTypes from "prop-types";

const CounterControl = (props) => {
  const { step, setStep, timeClick, setTimeStep} = props;

  const handlerStep = ({ target: { value } }) => {
    const newValue = Number(value);

    if (newValue >= 1 && newValue <= 1000000) {
      setStep(newValue);
    }
  };

  const handlerTimeStep = ({ target: { value } }) => {
    const newValue = Number(value);

    if (newValue >= 1 && newValue <= 90) {
      setTimeStep(newValue);
    }
  };

  return (
    <div>
      <h3>step = {step}</h3>
      <input
        type="number"
        name="stepInput"
        value={step}
        onChange={handlerStep}
      />

      <h3>time interval = {timeClick}</h3>
      <input

        type="number"
        name="timeStep"
        value={timeClick}
        onChange={handlerTimeStep}
      />

    </div>
  );
};

// CounterControl.propTypes = {};

export default CounterControl;

import React from "react";
import PropTypes from "prop-types";

const CounterControl = (props) => {
  const { step, setStep } = props;

  const handlerStep = ({ target: { value } }) => {
    const newValue = Number(value);

    if (newValue >= 1 && newValue <= 1000000) {
      setStep(newValue);
    }
  };

  return (
    <div>
      <h3>step = {step}</h3>
      <input
        type="text"
        name="stepInput"
        value={step}
        onChange={handlerStep}
      />
    </div>
  );
};

CounterControl.propTypes = {};

export default CounterControl;

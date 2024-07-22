import React from "react";
import PropTypes from "prop-types";
import styles from "./CounterControl.module.scss";

const CounterControl = (props) => {
  const { step, timeClick, setValue } = props;
  const handlerChange = ({ target: { value, name } }) => {
    const newValue = Number(value);

    const ranges = {
      step: { min: 1, max: 1000000 },
      timeClick: { min: 1, max: 90 },
    };

    const range = ranges[name];

    if (newValue >= range.min && newValue <= range.max) {
      setValue(newValue, name);
    }
  };

  const increment = () => {
    if (step < 1000000) {
      setValue(step + 1, "step");
    }
  };

  const decrement = () => {
    if (step > 1) {
      setValue(step - 1, "step");
    }
  };

  const incrementTimeStep = () => {
    if (timeClick < 90) {
      const valuetimeClick = timeClick + 1;
      setValue(valuetimeClick, "timeClick");
    }
  };

  const decrementTimeStep = () => {
    if (timeClick > 1) {
      const valuetimeClick = timeClick - 1;
      setValue(valuetimeClick, "timeClick");
    }
  };

  return (
    <div className={styles.containerCount}>
      <div className={styles.controlPanel}>
        <label className={styles.boxTitle}>setting variables</label>
        <h3>step = {step}</h3>
        <div className={styles.inputContainer}>
          <button
            className={styles.btnInputIncreaseDecrease}
            onClick={increment}
            disabled={step >= 1000000}
          >
            +
          </button>

          <input
            className={styles.inputSetting}
            type="number"
            name="step"
            value={step}
            onChange={handlerChange}
          />

          <button
            className={styles.btnInputIncreaseDecrease}
            onClick={decrement}
            disabled={step <= 1}
          >
            -
          </button>
        </div>

        <h3>time interval = {timeClick} sec</h3>
        <div className={styles.inputContainer}>
          <button
            className={styles.btnInputIncreaseDecrease}
            onClick={incrementTimeStep}
            disabled={timeClick >= 90}
          >
            +
          </button>
          <input
            className={styles.inputSetting}
            type="number"
            name="timeClick"
            value={timeClick}
            onChange={handlerChange}
          />
          <button
            className={styles.btnInputIncreaseDecrease}
            onClick={decrementTimeStep}
            disabled={timeClick <= 1}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

CounterControl.propTypes = {
  step: PropTypes.number.isRequired,
  timeClick: PropTypes.number.isRequired,
  resetValue: PropTypes.func,
  setValue: PropTypes.func.isRequired,
};

export default CounterControl;

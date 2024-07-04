import React from "react";
import PropTypes from "prop-types";
import styles from './CounterControl.module.scss'

const CounterControl = (props) => {
  const { step, timeClick, setValue } = props;

  const handlerStep = ({ target: { value, name } }) => {
    const newValue = Number(value);

    if (newValue >= 1 && newValue <= 1000000) {
      setValue(newValue, name);
    }
  };

  const handlerTimeStep = ({ target: { value, name } }) => {
    const newValue = Number(value);

    if (newValue >= 1 && newValue <= 90) {
      setValue(newValue, name);
    }
  };

  const increment = () => {
    if (step < 1000000) {
      setValue(step + 1, 'step');
    }
  };

  const decrement = () => {
    if (step > 1) {
      setValue(step - 1, 'step');
    }
  };

  // const incrementStep = () => {
  //   if (step < 1000000) {
  //     setStep(step + 1);
  //   }
  // };

  // const decrementStep = () => {
  //   if (step > 1) {
  //     setStep(step - 1);
  //   }
  // };

  const incrementTimeStep = () => {
    if (timeClick < 90) {
      setValue(timeClick + 1, 'timeClick');
    }
  };

  const decrementTimeStep = () => {
    if (timeClick > 1) {
      setValue(timeClick - 1, 'timeClick');
    }
  };

  return (
    <div className={styles.containerCount}>
      <div className={styles.controlPanel}>
      <label className={styles.boxTitle}>setting variables</label>
        <h3>step = {step}</h3>
        <div className={styles.inputContainer}>
          <button className={styles.btnInputIncreaseDecrease} onClick={increment} disabled={step >= 1000000}>+</button>

          <input
            className={styles.inputSetting}
            type="number"
            name="step"
            value={step}
            onChange={handlerStep}
          />

          <button className={styles.btnInputIncreaseDecrease} onClick={decrement} disabled={step <= 1}>-</button>
        </div>


        <h3>time interval = {timeClick} sec</h3>
        <div className={styles.inputContainer}>

          <button className={styles.btnInputIncreaseDecrease} onClick={incrementTimeStep} disabled={timeClick >= 90}>+</button>
            <input className={styles.inputSetting}
              type="number"
              name="timeClick"
              value={timeClick}
              onChange={handlerTimeStep}
            />
          <button className={styles.btnInputIncreaseDecrease} onClick={decrementTimeStep} disabled={timeClick <= 1}>-</button>
          
        </div>
      </div>
    </div>
  );
};

// CounterControl.propTypes = {};

export default CounterControl;

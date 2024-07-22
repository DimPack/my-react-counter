import React, { Component } from "react";
import PropTypes from "prop-types";
import AutoClick from "../AutoClick/AutoClick";
import styles from "./Counter.module.scss";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isMode: true,
    };
    this.autoClickInterval = null;
  }

  componentDidMount() {
    this.startAutoClick();
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

  startAutoClick = () => {
    if (this.autoClickInterval === null) {
      this.autoClickInterval = setInterval(() => {
        this.setState((state, props) => {
          const { count, isMode } = state;
          const { timeClick, setValue, step } = props;
          const newCount = isMode ? count + step : count - step;
          const newTimeClick = timeClick - 1;

          if (newTimeClick < 0) {
            clearInterval(this.autoClickInterval);
            this.autoClickInterval = null;
            this.stopAutoClick();
            return;
          }
          setValue(newTimeClick, "timeClick");
          return { count: newCount };
        });
      }, 1000);
    }
  };

  stopAutoClick = (click = false) => {
    const { timeClick, setValue } = this.props;
    clearInterval(this.autoClickInterval);
    this.autoClickInterval = null;
    setValue(30, "timeClick");
    if (click) {
      setValue(timeClick, "timeClick");
    }
  };
  resetClick = () => {
    const { resetValue } = this.props;
    this.stopAutoClick();
    this.setState({ count: 0, isMode: true });
    resetValue();
  };

  render() {
    const { count, isMode } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.containerCount}>
          <button
            className={styles.btnInputIncreaseDecrease}
            onClick={this.handlerCount}
            disabled={isMode ? false : true}
          >
            +
          </button>
          <span className={styles.inputSetting}>{count}</span>
          <button
            className={styles.btnInputIncreaseDecrease}
            onClick={this.handlerCount}
            disabled={isMode ? true : false}
          >
            -
          </button>
        </div>

        <div className={styles.controlPanel}>
          <label className={styles.boxTitle}>Mode management</label>
          <button
            className={styles.btnChangeMode}
            onClick={this.handlerChangeMode}
          >
            change mode
          </button>
          <AutoClick
            startAutoClick={this.startAutoClick}
            stopAutoClick={this.stopAutoClick}
            autoClickInterval={this.autoClickInterval}
          />
          <button className={styles.btnReset} onClick={this.resetClick}>
            reset
          </button>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  step: PropTypes.number.isRequired,
  timeClick: PropTypes.number.isRequired,
  resetValue: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Counter;

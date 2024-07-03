import React, { Component } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./Counter.module.scss";
import "../../common/styles/_common.scss";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isMode: true,
      // autoClickInterval: null,
    };
    this.autoClickInterval = null;
  }

  componentDidMount() {
    this.startAutoClick(); // для того щоб при тому як зарендериться компонет почати автоклік
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
          const { count, isMode } = state; // чому зі стейту берем
          const { timeClick, setValue, step } = props;
          const newCount = isMode ? count + step : count - step;
          const newTimeClick = timeClick - 1;

          if (newTimeClick < 0) {
            clearInterval(this.autoClickInterval);
            this.autoClickInterval = null;
            return;
          }
          setValue(newTimeClick, "timeClick");
          return { count: newCount };
        });
      }, 1000);
    }
    // this.setState({ autoClickInterval});
  };

  stopAutoClick = () => {
    const { setValue } = this.props;
    clearInterval(this.autoClickInterval);
    this.autoClickInterval = null;
    setValue(30, "timeClick");
    // this.setState({ autoClickInterval: null, timeClick: this.props.timeClick });
  };
  resetClick = () => {
    const { resetValue } = this.props;
    this.stopAutoClick();
    this.setState({ count: 0, isMode: true });
    resetValue();
  };

  render() {
    const { count, isMode } = this.state;
    const classNameBtn = cx(styles.btn);
    return (
      <div className={styles.containerCount}>
        <div>
          <button
            className="btnInputIncreaseDecrease"
            button
            onClick={this.handlerCount}
            disabled={!isMode}
          >
            +
          </button>
          {/* <h2>{count}</h2> */}
          <input
            className="inputSetting"
            type="number"
            name="count"
            value={count}
          />
          <button
            className="btnInputIncreaseDecrease"
            onClick={this.handlerCount}
            disabled={isMode}
          >
            -
          </button>
        </div>

        <div className={styles.controlPanel}>
          <button className={classNameBtn} onClick={this.handlerChangeMode}>
            change mode
          </button>
          <button
            className={classNameBtn}
            onClick={this.startAutoClick}
            disabled={this.autoClickInterval !== null}
          >
            start auto-click
          </button>
          <button
            className={classNameBtn}
            onClick={this.stopAutoClick}
            disabled={this.autoClickInterval === null}
          >
            stop auto-click
          </button>
          <button className={classNameBtn} onClick={this.resetClick}>
            reset
          </button>
        </div>
      </div>
    );
  }
}

// Counter.propTypes = {
//   step: PropTypes.number.isRequired,
// };

export default Counter;

//handlerTimeStep handlerStep - поєднати в одну функцію із замиканням
//

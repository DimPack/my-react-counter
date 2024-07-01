import React, { Component } from "react";
import cx from 'classnames';
import PropTypes from "prop-types";
import styles from './Counter.module.scss';
import '../../common/styles/_common.scss';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      isMode: true,
      autoClickInterval: null,
    };
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
    const { timeClick } = this.props;

    const autoClickInterval = setInterval(() => {
      this.setState((state, props) => {
        const { count, isMode, timeClick } = state; // чому зі стейту берем
        const newCount = isMode ? count + props.step : count - props.step;
        const newTimeClick = timeClick - 1;
        // console.log(timeClick);

        if (newTimeClick < 0) {
          clearInterval(this.state.autoClickInterval);
          return { autoClickInterval: null };
        }

        return { count: newCount, timeClick: newTimeClick };
      });
    }, 1000);

    this.setState( { autoClickInterval, timeClick });
  };

  stopAutoClick = () => {
    clearInterval(this.state.autoClickInterval);
    this.setState({ autoClickInterval: null, timeClick: this.props.timeClick });
  };
  resetClick = () => {
    const { resetValue } = this.props;
    this.stopAutoClick();
    this.setState({count: 0, isMode: true })
    resetValue();
  }

  render() {
    const { count, isMode, autoClickInterval } = this.state;
    const classNameBtn = cx(styles.btn)
    return (
      <div className={styles.containerCount}>
        <div>
          <button className="btnInputIncreaseDecrease" button onClick={this.handlerCount} disabled={!isMode}>
            +
          </button>
            {/* <h2>{count}</h2> */}
            <input className="inputSetting"
              type="number"
              name="count"
              value={count}
            />
          <button className="btnInputIncreaseDecrease" onClick={this.handlerCount} disabled={isMode}>
            -
          </button>

        </div>

        <div className={styles.controlPanel}>
          <button  className={classNameBtn} onClick={this.handlerChangeMode}>change mode</button>
          <button className={classNameBtn} onClick={this.startAutoClick} disabled={autoClickInterval !== null}>
            start auto-click
          </button>
          <button className={classNameBtn} onClick={this.stopAutoClick} disabled={autoClickInterval === null}>
            stop auto-click
          </button>
          <button className={classNameBtn} onClick={this.resetClick}>reset</button>
        </div>

      </div>
    );
  }
}

// Counter.propTypes = {
//   step: PropTypes.number.isRequired,
// };

export default Counter;

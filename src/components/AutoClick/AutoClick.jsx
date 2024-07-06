import React from "react";
import styles from "./AutoClick.module.scss";
const AutoClick = (props) => {
  const { startAutoClick, stopAutoClick, autoClickInterval } = props;
  return (
    <>
      <button
        className={styles.btnAutoClick}
        onClick={startAutoClick}
        disabled={autoClickInterval !== null}
      >
        start auto-click
      </button>
      <button
        className={styles.btnAutoClick}
        onClick={stopAutoClick}
        disabled={autoClickInterval === null}
      >
        stop auto-click
      </button>
    </>
  );
};

export default AutoClick;

import { Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./ExpansionPanel.module.css";

const ExpansionPanel = ({ className = "" }) => {
  return (
    <div className={[styles.expansionPanel, className].join(" ")}>
      <div className={styles.fi263115Parent}>
        <img className={styles.fi263115Icon} alt="" src="/fi-263115.svg" />
        <div className={styles.home}>Home</div>
      </div>
      <button className={styles.fi3844224Parent}>
        <img className={styles.fi263115Icon} alt="" src="/fi-3844224.svg" />
        <div className={styles.projects}>Projects</div>
      </button>
      <button className={styles.fi3844224Parent}>
        <img className={styles.fi263115Icon} alt="" src="/fi-12891091.svg" />
        <div className={styles.projects}>BRD</div>
      </button>
      <button className={styles.fi3844224Parent}>
        <img className={styles.fi263115Icon} alt="" src="/fi-17205766.svg" />
        <div className={styles.projects}>PRD</div>
      </button>
      <button className={styles.fi3844224Parent}>
        <img className={styles.fi263115Icon} alt="" src="/fi-15121817.svg" />
        <div className={styles.projects}>User Story</div>
      </button>
      <button className={styles.fi3844224Parent}>
        <img className={styles.fi263115Icon} alt="" src="/fi-1321938.svg" />
        <div className={styles.projects}>Reports</div>
      </button>
      <button className={styles.fi3844224Parent}>
        <img className={styles.fi263115Icon} alt="" src="/fi-70115.svg" />
        <div className={styles.projects}>Settings</div>
      </button>
    </div>
  );
};

ExpansionPanel.propTypes = {
  className: PropTypes.string,
};

export default ExpansionPanel;

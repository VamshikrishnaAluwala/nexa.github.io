import { Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./ExpansionPanel1.module.css";

const ExpansionPanel1 = ({ className = "" }) => {
  return (
    <div className={[styles.expansionPanel, className].join(" ")}>
      <button className={styles.fi1660114Parent}>
        <img className={styles.fi1660114Icon} alt="" src="/fi-1660114.svg" />
        <div className={styles.help}>Help</div>
      </button>
      <img className={styles.deviderIcon} alt="" src />
      <img className={styles.deviderIcon} alt="" src />
      <img className={styles.deviderIcon} alt="" src />
      <img className={styles.deviderIcon} alt="" src />
      <img className={styles.deviderIcon} alt="" src />
    </div>
  );
};

ExpansionPanel1.propTypes = {
  className: PropTypes.string,
};

export default ExpansionPanel1;

import { useMemo } from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Td.module.css";

const Td = ({ className = "", checkCircle, am, completed, completedColor }) => {
  const completedStyle = useMemo(() => {
    return {
      color: completedColor,
    };
  }, [completedColor]);

  return (
    <div className={[styles.td, className].join(" ")}>
      <div className={styles.checkCircleParent}>
        <img className={styles.checkCircleIcon} alt="" src={checkCircle} />
        <div className={styles.am}>{am}</div>
      </div>
      <div className={styles.completed} style={completedStyle}>
        {completed}
      </div>
    </div>
  );
};

Td.propTypes = {
  className: PropTypes.string,
  checkCircle: PropTypes.string,
  am: PropTypes.string,
  completed: PropTypes.string,

  /** Style props */
  completedColor: PropTypes.string,
};

export default Td;

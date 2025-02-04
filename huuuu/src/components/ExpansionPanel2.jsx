import { useCallback } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ExpansionPanel2.module.css";

const ExpansionPanel2 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className={[styles.expansionPanel, className].join(" ")}>
      <div className={styles.fi263115Parent} onClick={onFrameContainerClick}>
        <img className={styles.fi263115Icon} alt="" src="/fi-2631151.svg" />
        <div className={styles.home}>Home</div>
      </div>
      <button className={styles.fi3844224Parent}>
        <img className={styles.fi263115Icon} alt="" src="/fi-3844224.svg" />
        <div className={styles.projects}>Projects</div>
      </button>
      <div className={styles.fi12891091Parent}>
        <img className={styles.fi263115Icon} alt="" src="/fi-12891091.svg" />
        <div className={styles.home}>BRD</div>
      </div>
      <div className={styles.fi12891091Parent}>
        <img className={styles.fi263115Icon} alt="" src="/fi-17205766.svg" />
        <div className={styles.home}>PRD</div>
      </div>
      <div className={styles.fi12891091Parent}>
        <img className={styles.fi263115Icon} alt="" src="/fi-151218172.svg" />
        <div className={styles.home}>User Story</div>
      </div>
      <div className={styles.fi12891091Parent}>
        <img className={styles.fi263115Icon} alt="" src="/fi-1321938.svg" />
        <div className={styles.home}>Reports</div>
      </div>
      <div className={styles.fi12891091Parent}>
        <img className={styles.fi263115Icon} alt="" src="/fi-701151.svg" />
        <div className={styles.home}>Settings</div>
      </div>
    </div>
  );
};

ExpansionPanel2.propTypes = {
  className: PropTypes.string,
};

export default ExpansionPanel2;

import { useMemo } from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./StatusBtn.module.css";

const StatusBtn = ({
  className = "",
  property1 = "Default",
  statusBtnWidth,
  checkCircleOutline,
  active,
}) => {
  const statusBtnStyle = useMemo(() => {
    return {
      width: statusBtnWidth,
    };
  }, [statusBtnWidth]);

  return (
    <div
      className={[styles.root, className].join(" ")}
      data-property1={property1}
      style={statusBtnStyle}
    >
      <img
        className={styles.checkCircleOutlineIcon}
        alt=""
        src={checkCircleOutline}
      />
      <div className={styles.active}>{active}</div>
    </div>
  );
};

StatusBtn.propTypes = {
  className: PropTypes.string,
  checkCircleOutline: PropTypes.string,
  active: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,

  /** Style props */
  statusBtnWidth: PropTypes.string,
};

export default StatusBtn;

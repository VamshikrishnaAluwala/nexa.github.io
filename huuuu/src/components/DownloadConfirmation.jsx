import { Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./DownloadConfirmation.module.css";

const DownloadConfirmation = ({ className = "" }) => {
  return (
    <div className={[styles.downloadConfirmation, className].join(" ")}>
      <img
        className={styles.checkCircleOutlineIcon}
        alt=""
        src="/checkcircleoutline1.svg"
      />
      <div className={styles.text}>
        <div className={styles.body}>
          Your BRD has been downloaded Successfully.
        </div>
      </div>
    </div>
  );
};

DownloadConfirmation.propTypes = {
  className: PropTypes.string,
};

export default DownloadConfirmation;

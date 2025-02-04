import { Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Td2.module.css";

const Td2 = ({ className = "" }) => {
  return (
    <div className={[styles.td, className].join(" ")}>
      <div className={styles.amParent}>
        <div className={styles.am}>26 Aug’24</div>
        <img className={styles.systemIcon} alt="" src="/system.svg" />
      </div>
      <div className={styles.createdOn}>Created On</div>
    </div>
  );
};

Td2.propTypes = {
  className: PropTypes.string,
};

export default Td2;

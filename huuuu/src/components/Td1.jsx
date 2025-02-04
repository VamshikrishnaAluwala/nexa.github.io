import { Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Td1.module.css";

const Td1 = ({ className = "" }) => {
  return (
    <div className={[styles.td, className].join(" ")}>
      <div className={styles.block}>
        <img className={styles.fi6415824Icon} alt="" src="/fi-6415824.svg" />
        <div className={styles.block1}>
          <div className={styles.customerName}>Customer Name</div>
          <div className={styles.projectName}>Project Name</div>
        </div>
      </div>
    </div>
  );
};

Td1.propTypes = {
  className: PropTypes.string,
};

export default Td1;

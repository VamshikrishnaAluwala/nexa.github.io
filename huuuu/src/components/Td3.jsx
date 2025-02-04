import { Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Td3.module.css";

const Td3 = ({ className = "" }) => {
  return (
    <div className={[styles.td, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-34624613@2x.png"
          />
          <img
            className={styles.frameItem}
            alt=""
            src="/rectangle-34624609@2x.png"
          />
          <img
            className={styles.frameItem}
            alt=""
            src="/rectangle-34624614@2x.png"
          />
          <img
            className={styles.frameItem}
            alt=""
            src="/rectangle-34624615@2x.png"
          />
        </div>
        <div className={styles.div}>+2</div>
      </div>
    </div>
  );
};

Td3.propTypes = {
  className: PropTypes.string,
};

export default Td3;

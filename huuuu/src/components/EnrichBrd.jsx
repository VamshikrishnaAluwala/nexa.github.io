import { Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./EnrichBrd.module.css";

const EnrichBrd = ({ className = "", property1 = "Default" }) => {
  return (
    <div
      className={[styles.enrichBrd, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.inputSlot}>
        <div className={styles.writeYourPrompt}>
          write your prompt here to enhance BRD document...
        </div>
        <div className={styles.floatingLabel} />
      </div>
    </div>
  );
};

EnrichBrd.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default EnrichBrd;

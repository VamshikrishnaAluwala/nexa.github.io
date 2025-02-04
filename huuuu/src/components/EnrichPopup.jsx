import { Box } from "@mui/material";
import EnrichBrd from "./EnrichBrd";
import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./EnrichPopup.module.css";

const EnrichPopup = ({ className = "" }) => {
  return (
    <div className={[styles.enrichPopup, className].join(" ")}>
      <div className={styles.matCard}>
        <div className={styles.matCardSubtitle}>
          <div className={styles.wouldLikeToEnrichTheBrdCParent}>
            <div className={styles.wouldLikeTo}>
              Would like to enrich the BRD content?
            </div>
            <div className={styles.addYourPrompt}>
              Add your prompt below, NEXA AI will take your prompt as input and
              update the content.
            </div>
          </div>
        </div>
        <div className={styles.matCardText}>
          <EnrichBrd property1="Default" />
        </div>
        <div className={styles.matCardActions}>
          <div className={styles.buttonParent}>
            <Button
              disabled={false}
              iconLeft={false}
              iconRight={false}
              size="medium"
              variant="text"
              buttonHeight="36px"
              text="Cancel"
            />
            <Button
              disabled={false}
              iconLeft={false}
              iconRight={false}
              size="medium"
              variant="fab extended"
              buttonHeight="36px"
              text="Enrich BRD Content"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

EnrichPopup.propTypes = {
  className: PropTypes.string,
};

export default EnrichPopup;

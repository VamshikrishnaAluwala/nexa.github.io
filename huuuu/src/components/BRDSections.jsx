import { Box } from "@mui/material";
import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./BRDSections.module.css";

const BRDSections = ({ className = "" }) => {
  return (
    <div className={[styles.brdSections, className].join(" ")}>
      <div className={styles.geoSelection}>
        <div className={styles.sttextInput}>
          <div className={styles.matTreeviewNodeRoot}>
            <div className={styles.search}>Search...</div>
            <img className={styles.magnifyIcon} alt="" src="/magnify.svg" />
          </div>
        </div>
        <div className={styles.catLevel2AParent}>
          <div className={styles.catLevel2A}>
            <img className={styles.matBtnIcon} alt="" src="/matbtn@2x.png" />
            <div className={styles.checkbox}>
              <div className={styles.vIcon}>check_box</div>
            </div>
            <div className={styles.introduction}>Introduction</div>
          </div>
          <div className={styles.catLevel2B}>
            <div className={styles.matBtn}>
              <div className={styles.vIcon}>arrow_right</div>
              <div className={styles.span}>DI</div>
            </div>
            <div className={styles.checkbox1}>
              <div className={styles.vIcon}>check_box</div>
            </div>
            <div className={styles.introduction}>Project Summary</div>
          </div>
          <div className={styles.catLevel2B}>
            <div className={styles.matBtn}>
              <div className={styles.vIcon}>arrow_right</div>
              <div className={styles.span}>DI</div>
            </div>
            <div className={styles.checkbox1}>
              <div className={styles.vIcon}>check_box</div>
            </div>
            <div className={styles.introduction}>Background</div>
          </div>
          <div className={styles.catLevel2B}>
            <div className={styles.matBtn}>
              <div className={styles.vIcon}>arrow_right</div>
              <div className={styles.span}>DI</div>
            </div>
            <div className={styles.checkbox1}>
              <div className={styles.vIcon}>check_box</div>
            </div>
            <div className={styles.introduction}>Business Drivers</div>
          </div>
          <div className={styles.catLevel2B}>
            <div className={styles.matBtn3}>
              <div className={styles.vIcon}>arrow_right</div>
              <div className={styles.span}>DI</div>
            </div>
            <div className={styles.checkbox1}>
              <div className={styles.vIcon}>check_box</div>
            </div>
            <div className={styles.introduction}>Executive Summary</div>
          </div>
          <div className={styles.catLevel2B}>
            <div className={styles.matBtn3}>
              <div className={styles.vIcon}>arrow_right</div>
              <div className={styles.span}>DI</div>
            </div>
            <div className={styles.checkbox1}>
              <div className={styles.vIcon}>check_box</div>
            </div>
            <div className={styles.introduction}>Project Objective</div>
          </div>
          <div className={styles.catLevel2B}>
            <div className={styles.matBtn3}>
              <div className={styles.vIcon}>arrow_right</div>
              <div className={styles.span}>DI</div>
            </div>
            <div className={styles.checkbox1}>
              <div className={styles.vIcon}>check_box</div>
            </div>
            <div className={styles.introduction}>Product Features</div>
          </div>
        </div>
        <div className={styles.matDivider} />
        <div className={styles.textGroupParent}>
          <div className={styles.textGroup}>
            <div className={styles.label}>18/18 Selected</div>
          </div>
          <Button
            disabled={false}
            iconLeft={false}
            iconRight={false}
            size="small"
            variant="text"
            buttonHeight="28px"
            text="Select All"
          />
        </div>
        <div className={styles.matExpansionPanelContentWParent}>
          <div className={styles.matExpansionPanelContentW}>
            <div className={styles.checkbox7}>
              <div className={styles.vIcon}>check_box_outline_blank</div>
            </div>
            <div className={styles.region1}>Region 1</div>
          </div>
          <div className={styles.matExpansionPanelContentW}>
            <div className={styles.checkbox7}>
              <div className={styles.vIcon}>check_box_outline_blank</div>
            </div>
            <div className={styles.region11}>Region 1</div>
          </div>
          <div className={styles.matExpansionPanelContentW}>
            <div className={styles.checkbox7}>
              <div className={styles.vIcon}>check_box_outline_blank</div>
            </div>
            <div className={styles.region11}>Region 1</div>
          </div>
          <div className={styles.matExpansionPanelContentW}>
            <div className={styles.checkbox7}>
              <div className={styles.vIcon}>check_box_outline_blank</div>
            </div>
            <div className={styles.region11}>Region 1</div>
          </div>
          <div className={styles.matExpansionPanelContentW}>
            <div className={styles.checkbox7}>
              <div className={styles.vIcon}>check_box_outline_blank</div>
            </div>
            <div className={styles.region11}>Region 1</div>
          </div>
          <div className={styles.matExpansionPanelContentW}>
            <div className={styles.checkbox7}>
              <div className={styles.vIcon}>check_box_outline_blank</div>
            </div>
            <div className={styles.region11}>Region 1</div>
          </div>
          <div className={styles.matExpansionPanelContentW}>
            <div className={styles.checkbox7}>
              <div className={styles.vIcon}>check_box_outline_blank</div>
            </div>
            <div className={styles.region11}>Region 1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

BRDSections.propTypes = {
  className: PropTypes.string,
};

export default BRDSections;

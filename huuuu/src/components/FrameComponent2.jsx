import { useCallback } from "react";
import { Box } from "@mui/material";
import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  const onFileUploaderContainerClick = useCallback(() => {
    // Please sync "BRD-creation-step-2" to the project
  }, []);

  return (
    <div className={[styles.listItemyesnonoParent, className].join(" ")}>
      <div className={styles.listItemyesnono}>
        <img className={styles.fi6415824Icon} alt="" src="/fi-64158242.svg" />
        <div className={styles.vListItemContent}>
          <div className={styles.projectName}>Project Name</div>
          <div className={styles.customerName}>Customer Name</div>
        </div>
      </div>
      <div className={styles.matDivider} />
      <div className={styles.matExpansionPanelHeaderParent}>
        <div className={styles.matExpansionPanelHeader}>
          <div className={styles.responsive}>
            <img
              className={styles.fi12891091Icon}
              alt=""
              src="/fi-128910913.svg"
            />
            <div className={styles.span}>BRDs</div>
          </div>
          <div className={styles.expandLess}>expand_less</div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.uploadCallTranscriptproposaParent}>
            <div className={styles.uploadCallTranscriptproposa}>
              Upload call transcript/proposal documents to generate BRD
              instantly!
            </div>
            <div
              className={styles.fileUploader}
              onClick={onFileUploaderContainerClick}
            >
              <img
                className={styles.trayArrowUpIcon}
                alt=""
                src="/trayarrowup.svg"
              />
              <div className={styles.dragAnDropFileParent}>
                <div className={styles.dragAnDrop}>Drag an drop file</div>
                <div className={styles.limit200mbPer}>Limit 200MB per file</div>
              </div>
              <Button
                disabled={false}
                iconLeft={false}
                iconRight={false}
                size="small"
                variant="outlined"
                buttonHeight="1.75rem"
                text="Browse"
              />
            </div>
            <div className={styles.fi15465638Parent}>
              <div className={styles.fi15465638}>
                <img
                  className={styles.fi888883Icon}
                  alt=""
                  src="/fi-888883.svg"
                />
              </div>
              <div className={styles.proposalDocumentdocxParent}>
                <div className={styles.proposalDocumentdocx}>
                  proposal-document.docx
                </div>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <div className={styles.groupItem} />
                </div>
                <div className={styles.mbParent}>
                  <div className={styles.mb}>32 MB</div>
                  <div className={styles.uploaded}>100% Uploaded</div>
                </div>
              </div>
              <div className={styles.closeWrapper}>
                <img
                  className={styles.fi12891091Icon}
                  alt=""
                  src="/close.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.matDivider} />
          <div className={styles.customizeYourBrdParent}>
            <div className={styles.customizeYourBrd}>Customize your BRD</div>
            <div className={styles.inputSlot}>
              <div className={styles.selectSections}>Select Sections</div>
              <div className={styles.floatingLabel} />
              <img
                className={styles.chevronDownIcon}
                alt=""
                src="/chevrondown.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.buttonParent}>
          <Button
            disabled={false}
            iconLeft={false}
            iconRight={false}
            size="medium"
            variant="text"
            buttonHeight="2.25rem"
            text="Cancel"
          />
          <Button
            disabled={false}
            iconLeft={false}
            iconRight={false}
            size="medium"
            variant="fab extended"
            buttonHeight="2.25rem"
            text="Generate BRD"
          />
        </div>
      </div>
      <div className={styles.matDividerParent}>
        <div className={styles.matDivider} />
        <div className={styles.matExpansionPanelHeader1}>
          <div className={styles.responsive}>
            <img
              className={styles.fi12891091Icon}
              alt=""
              src="/fi-172057664.svg"
            />
            <div className={styles.span}>PRDs</div>
          </div>
          <div className={styles.expandLess1}>expand_less</div>
        </div>
        <div className={styles.matDivider} />
        <div className={styles.matExpansionPanelHeader1}>
          <div className={styles.responsive}>
            <img
              className={styles.fi12891091Icon}
              alt=""
              src="/fi-151218175.svg"
            />
            <div className={styles.span}>User Stories</div>
          </div>
          <div className={styles.expandLess1}>expand_less</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;

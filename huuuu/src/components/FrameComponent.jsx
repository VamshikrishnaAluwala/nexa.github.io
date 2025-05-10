import { useState, useCallback } from "react";
import { Box } from "@mui/material";
import BRDSections from "./BRDSections";
import PortalPopup from "./PortalPopup";
import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  const [isBRDSectionsOpen, setBRDSectionsOpen] = useState(false);

  const openBRDSections = useCallback(() => {
    setBRDSectionsOpen(true);
  }, []);

  const closeBRDSections = useCallback(() => {
    setBRDSectionsOpen(false);
  }, []);

  return (
    <>
      <div
        className={[styles.matExpansionPanelHeaderParent, className].join(" ")}
      >
        <div className={styles.matExpansionPanelHeader}>
          <div className={styles.responsive}>
            <img
              className={styles.fi12891091Icon}
              alt=""
              src="/fi-128910911.svg"
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
            <div className={styles.fileUploader}>
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
                  className={styles.fi8361363Icon}
                  alt=""
                  src="/fi-8361363.svg"
                />
              </div>
              <div className={styles.callTranscripttxtParent}>
                <div className={styles.callTranscripttxt}>
                  call-transcript.txt
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
                  src="/close1.svg"
                />
              </div>
            </div>
            <div className={styles.fi15465638Parent}>
              <div className={styles.fi15465638}>
                <img
                  className={styles.fi8361363Icon}
                  alt=""
                  src="/fi-8888831.svg"
                />
              </div>
              <div className={styles.callTranscripttxtParent}>
                <div className={styles.callTranscripttxt}>
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
                  src="/close1.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.matDivider} />
          <div className={styles.customizeYourBrdParent}>
            <div className={styles.customizeYourBrd}>Customize your BRD</div>
            <div className={styles.inputSlot} onClick={openBRDSections}>
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
      {isBRDSectionsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeBRDSections}
        >
          <BRDSections onClose={closeBRDSections} />
        </PortalPopup>
      )}
    </>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;

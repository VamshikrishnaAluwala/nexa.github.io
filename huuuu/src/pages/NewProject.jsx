import { useCallback } from "react";
import { Box } from "@mui/material";
import ExpansionPanel2 from "../components/ExpansionPanel2";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import styles from "./NewProject.module.css";

const NewProject = () => {
  const navigate = useNavigate();

  const onFileUploaderContainerClick = useCallback(() => {
    // Please sync "BRD-creation-step-2" to the project
  }, []);

  const onMatExpansionPanelHeaderContainerClick = useCallback(() => {
    navigate("/prdcreation");
  }, [navigate]);

  const onMatExpansionPanelHeaderContainerClick1 = useCallback(() => {
    // Please sync "User Stories-creation" to the project
  }, []);

  return (
    <div className={styles.newProject}>
      <img className={styles.isolationModeIcon} alt="" src />
      <div className={styles.drawer}>
        <div className={styles.top}>
          <ExpansionPanel2 />
        </div>
        <div className={styles.expansionPanel}>
          <div className={styles.fi1660114Parent}>
            <img
              className={styles.fi1660114Icon}
              alt=""
              src="/fi-1660114.svg"
            />
            <div className={styles.help}>Help</div>
          </div>
          <img className={styles.deviderIcon} alt="" src />
          <img className={styles.deviderIcon} alt="" src />
          <img className={styles.deviderIcon} alt="" src />
          <img className={styles.deviderIcon} alt="" src />
          <img className={styles.deviderIcon} alt="" src />
        </div>
      </div>
      <div className={styles.continer}>
        <div className={styles.headerTitle}>
          <div className={styles.title}>
            <div className={styles.welcomeArun}>
              <span>{`Welcome `}</span>
              <span className={styles.arun}>Arun!</span>
            </div>
          </div>
          <div className={styles.matBtnWrapper}>
            <div className={styles.matBtn}>
              <div className={styles.content}>
                <img className={styles.plusIcon} alt="" src />
                <div className={styles.text}>Add Idea</div>
                <div className={styles.vIconLeft}>cancel</div>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.objectIcon} alt="" src="/object.svg" />
        <div className={styles.text1}>
          <div className={styles.help}>BRD Not generated yet</div>
          <div className={styles.generatedBrdWill}>
            Generated BRD will appear here for preview
          </div>
        </div>
      </div>
      <div className={styles.listItemyesnonoParent}>
        <div className={styles.listItemyesnono}>
          <img className={styles.fi6415824Icon} alt="" src="/fi-64158241.svg" />
          <div className={styles.vListItemContent}>
            <div className={styles.projectName}>Project Name</div>
            <div className={styles.customerName}>Customer Name</div>
          </div>
        </div>
        <div className={styles.matDivider} />
        <div className={styles.matExpansionPanelHeaderParent}>
          <div className={styles.matExpansionPanelHeader}>
            <div className={styles.responsive}>
              <img className={styles.plusIcon} alt="" src="/fi-128910911.svg" />
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
                  className={styles.fi1660114Icon}
                  alt=""
                  src="/trayarrowup.svg"
                />
                <div className={styles.dragAnDropFileParent}>
                  <div className={styles.dragAnDrop}>Drag an drop file</div>
                  <div className={styles.limit200mbPer}>
                    Limit 200MB per file
                  </div>
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
            </div>
            <div className={styles.matDivider} />
            <div className={styles.customizeYourBrdParent}>
              <div className={styles.uploadCallTranscriptproposa}>
                Customize your BRD
              </div>
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
              disabled
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
          <div
            className={styles.matExpansionPanelHeader1}
            onClick={onMatExpansionPanelHeaderContainerClick}
          >
            <div className={styles.responsive}>
              <img className={styles.plusIcon} alt="" src="/fi-172057662.svg" />
              <div className={styles.span}>PRDs</div>
            </div>
            <div className={styles.expandLess1}>expand_less</div>
          </div>
          <div className={styles.matDivider} />
          <div
            className={styles.matExpansionPanelHeader1}
            onClick={onMatExpansionPanelHeaderContainerClick1}
          >
            <div className={styles.responsive}>
              <img className={styles.plusIcon} alt="" src="/fi-151218173.svg" />
              <div className={styles.span}>User Stories</div>
            </div>
            <div className={styles.expandLess1}>expand_less</div>
          </div>
        </div>
      </div>
      <div className={styles.subHeader}>
        <div className={styles.businessRequirementDocumentParent}>
          <div className={styles.businessRequirementDocument}>
            Business Requirement Document
          </div>
          <div className={styles.waitingForYou}>Waiting for you input...</div>
        </div>
        <div className={styles.actions}>
          <div className={styles.button}>
            <img className={styles.downloadOutlineIcon} alt="" src />
            <div className={styles.download}>Download</div>
          </div>
          <div className={styles.button}>
            <img className={styles.downloadOutlineIcon} alt="" src />
            <div className={styles.download}>Generate Email</div>
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <div className={styles.button2}>
            <div className={styles.download}>Template</div>
            <img className={styles.downloadOutlineIcon} alt="" src />
          </div>
          <div className={styles.button3}>
            <img
              className={styles.downloadOutlineIcon}
              alt=""
              src="/filewordoutline.svg"
            />
            <div className={styles.download}>Download</div>
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.nexaLogoParent}>
          <img className={styles.nexaLogoIcon} alt="" src="/nexalogo2.svg" />
          <div className={styles.matDivider4} />
          <div className={styles.button4}>
            <div className={styles.projects}>Projects</div>
          </div>
        </div>
        <div className={styles.notificationParent}>
          <div className={styles.notification}>
            <img className={styles.plusIcon} alt="" src="/fi-7095921.svg" />
          </div>
          <div className={styles.notification1}>
            <img
              className={styles.fi1660114Icon}
              alt=""
              src="/fi-1827504.svg"
            />
          </div>
          <div className={styles.matAvatarWrapper}>
            <div className={styles.matAvatar}>
              <div className={styles.person}>person</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProject;

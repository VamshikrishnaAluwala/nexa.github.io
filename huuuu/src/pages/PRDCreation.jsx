import { useCallback } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./PRDCreation.module.css";

const PRDCreation = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/new-project");
  }, [navigate]);

  const onFileUploaderContainerClick = useCallback(() => {
    // Please sync "PRD-creation-2" to the project
  }, []);

  const onMatExpansionPanelHeaderContainerClick = useCallback(() => {
    // Please sync "User Stories-creation" to the project
  }, []);

  return (
    <div className={styles.prdCreation}>
      <img className={styles.isolationModeIcon} alt="" src />
      <div className={styles.drawer}>
        <div className={styles.top}>
          <div className={styles.expansionPanel}>
            <div
              className={styles.fi263115Parent}
              onClick={onFrameContainerClick}
            >
              <img
                className={styles.fi263115Icon}
                alt=""
                src="/fi-2631155.svg"
              />
              <div className={styles.home}>Home</div>
            </div>
            <div className={styles.fi3844224Parent}>
              <img
                className={styles.fi263115Icon}
                alt=""
                src="/fi-3844224.svg"
              />
              <div className={styles.home}>Projects</div>
            </div>
            <div className={styles.fi12891091Parent}>
              <img
                className={styles.fi263115Icon}
                alt=""
                src="/fi-128910912.svg"
              />
              <div className={styles.home}>BRD</div>
            </div>
            <div className={styles.fi12891091Parent}>
              <img
                className={styles.fi263115Icon}
                alt=""
                src="/fi-172057663.svg"
              />
              <div className={styles.home}>PRD</div>
            </div>
            <div className={styles.fi12891091Parent}>
              <img
                className={styles.fi263115Icon}
                alt=""
                src="/fi-151218174.svg"
              />
              <div className={styles.home}>User Story</div>
            </div>
            <div className={styles.fi12891091Parent}>
              <img
                className={styles.fi263115Icon}
                alt=""
                src="/fi-1321938.svg"
              />
              <div className={styles.home}>Reports</div>
            </div>
            <div className={styles.fi12891091Parent}>
              <img
                className={styles.fi263115Icon}
                alt=""
                src="/fi-701151.svg"
              />
              <div className={styles.home}>Settings</div>
            </div>
          </div>
        </div>
        <div className={styles.expansionPanel1}>
          <div className={styles.fi1660114Parent}>
            <img className={styles.fi263115Icon} alt="" src="/fi-1660114.svg" />
            <div className={styles.home}>Help</div>
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
        <img className={styles.objectIcon} alt="" src="/object2.svg" />
        <div className={styles.text1}>
          <div className={styles.home}>PRD Not generated yet</div>
          <div className={styles.generatedPrdWill}>
            Generated PRD will appear here for preview
          </div>
        </div>
      </div>
      <div className={styles.listItemyesnonoParent}>
        <div className={styles.listItemyesnono}>
          <img className={styles.fi6415824Icon} alt="" src="/fi-64158242.svg" />
          <div className={styles.vListItemContent}>
            <div className={styles.projectName}>Project Name</div>
            <div className={styles.customerName}>Customer Name</div>
          </div>
        </div>
        <div className={styles.matDivider} />
        <div className={styles.frameParent}>
          <div
            className={styles.matExpansionPanelHeaderWrapper}
            onClick={onFrameContainerClick1}
          >
            <div className={styles.matExpansionPanelHeader}>
              <div className={styles.responsive}>
                <img
                  className={styles.plusIcon}
                  alt=""
                  src="/fi-128910914.svg"
                />
                <div className={styles.span}>BRDs</div>
              </div>
              <div className={styles.expandLess}>expand_less</div>
            </div>
          </div>
          <div className={styles.matDivider} />
          <div className={styles.matExpansionPanelHeader1}>
            <div className={styles.responsive}>
              <img className={styles.plusIcon} alt="" src="/fi-172057668.svg" />
              <div className={styles.span}>PRDs</div>
            </div>
            <div className={styles.expandLess1}>expand_less</div>
          </div>
          <div className={styles.expandedContent}>
            <div className={styles.frameGroup}>
              <div className={styles.uploadBrdcallTranscripttecParent}>
                <div className={styles.uploadBrdcallTranscripttec}>
                  Upload BRD/Call transcript/Technical documents to generate PRD
                  instantly!
                </div>
                <div
                  className={styles.fileUploader}
                  onClick={onFileUploaderContainerClick}
                >
                  <img
                    className={styles.fi263115Icon}
                    alt=""
                    src="/trayarrowup.svg"
                  />
                  <div className={styles.dragAnDropFileParent}>
                    <div className={styles.dragAnDrop}>Drag an drop file</div>
                    <div className={styles.limit200mbPer}>
                      Limit 200MB per file
                    </div>
                  </div>
                  <div className={styles.button}>
                    <div className={styles.content}>
                      <div className={styles.iconLeft}>edit</div>
                      <div className={styles.text2}>Browse</div>
                      <div className={styles.iconRight}>cancel</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.matDivider} />
              <div className={styles.customizeYourPrdParent}>
                <div className={styles.uploadBrdcallTranscripttec}>
                  Customize your PRD
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
              <div className={styles.button1}>
                <div className={styles.content}>
                  <div className={styles.iconLeft}>edit</div>
                  <div className={styles.text3}>Cancel</div>
                  <div className={styles.iconRight}>cancel</div>
                </div>
              </div>
              <div className={styles.button2}>
                <div className={styles.content}>
                  <div className={styles.iconLeft}>edit</div>
                  <div className={styles.text4}>Generate PRD</div>
                  <div className={styles.iconRight}>cancel</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.matDivider} />
          <div
            className={styles.matExpansionPanelHeader2}
            onClick={onMatExpansionPanelHeaderContainerClick}
          >
            <div className={styles.responsive}>
              <img
                className={styles.plusIcon}
                alt=""
                src="/fi-1512181710.svg"
              />
              <div className={styles.span}>User Stories</div>
            </div>
            <div className={styles.expandLess}>expand_less</div>
          </div>
        </div>
      </div>
      <div className={styles.subHeader}>
        <div className={styles.projectRequirementDocumentParent}>
          <div className={styles.projectRequirementDocument}>
            Project Requirement Document
          </div>
          <div className={styles.waitingForYou}>Waiting for you input...</div>
        </div>
        <div className={styles.actions}>
          <div className={styles.button3}>
            <img className={styles.downloadOutlineIcon} alt="" src />
            <div className={styles.download}>Download</div>
          </div>
          <div className={styles.button3}>
            <img className={styles.downloadOutlineIcon} alt="" src />
            <div className={styles.download}>Generate Email</div>
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <div className={styles.button5}>
            <div className={styles.download}>Template</div>
            <img className={styles.downloadOutlineIcon} alt="" src />
          </div>
          <div className={styles.button6}>
            <img
              className={styles.downloadOutlineIcon}
              alt=""
              src="/filewordoutline4.svg"
            />
            <div className={styles.download}>Download</div>
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.nexaLogoParent}>
          <img className={styles.nexaLogoIcon} alt="" src="/nexalogo2.svg" />
          <div className={styles.matDivider4} />
          <div className={styles.button7}>
            <div className={styles.projects1}>Projects</div>
          </div>
        </div>
        <div className={styles.notificationParent}>
          <div className={styles.notification}>
            <img className={styles.plusIcon} alt="" src="/fi-7095924.svg" />
          </div>
          <div className={styles.notification1}>
            <img className={styles.fi263115Icon} alt="" src="/fi-1827504.svg" />
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

export default PRDCreation;

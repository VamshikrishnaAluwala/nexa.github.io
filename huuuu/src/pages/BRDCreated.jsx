import { useState, useCallback } from "react";
import { Box } from "@mui/material";
import BRDSections from "../components/BRDSections";
import PortalPopup from "../components/PortalPopup";
import EnrichPopup from "../components/EnrichPopup";
import DownloadConfirmation from "../components/DownloadConfirmation";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import styles from "./BRDCreated.module.css";

const BRDCreated = () => {
  const [isBRDSectionsOpen, setBRDSectionsOpen] = useState(false);
  const [isEnrichPopupOpen, setEnrichPopupOpen] = useState(false);
  const [isDownloadConfirmationOpen, setDownloadConfirmationOpen] =
    useState(false);
  const navigate = useNavigate();

  const openBRDSections = useCallback(() => {
    setBRDSectionsOpen(true);
  }, []);

  const closeBRDSections = useCallback(() => {
    setBRDSectionsOpen(false);
  }, []);

  const openEnrichPopup = useCallback(() => {
    setEnrichPopupOpen(true);
  }, []);

  const closeEnrichPopup = useCallback(() => {
    setEnrichPopupOpen(false);
  }, []);

  const openDownloadConfirmation = useCallback(() => {
    setDownloadConfirmationOpen(true);
  }, []);

  const closeDownloadConfirmation = useCallback(() => {
    setDownloadConfirmationOpen(false);
  }, []);

  const onFrameContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onMatExpansionPanelHeaderContainerClick = useCallback(() => {
    navigate("/prdcreation");
  }, [navigate]);

  const onMatExpansionPanelHeaderContainerClick1 = useCallback(() => {
    // Please sync "User Stories-creation" to the project
  }, []);

  const onButtonContainerClick = useCallback(() => {
    // Please sync "BRD-creation-updated" to the project
  }, []);

  return (
    <>
      <div className={styles.brdCreated}>
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
                  src="/fi-2631154.svg"
                />
                <div className={styles.home}>Home</div>
              </div>
              <div className={styles.fi3844224Parent}>
                <img
                  className={styles.fi263115Icon}
                  alt=""
                  src="/fi-38442242.svg"
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
                  src="/fi-172057665.svg"
                />
                <div className={styles.home}>PRD</div>
              </div>
              <div className={styles.fi12891091Parent}>
                <img
                  className={styles.fi263115Icon}
                  alt=""
                  src="/fi-151218178.svg"
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
                  src="/fi-701153.svg"
                />
                <div className={styles.home}>Settings</div>
              </div>
            </div>
          </div>
          <div className={styles.expansionPanel1}>
            <div className={styles.fi1660114Parent}>
              <img
                className={styles.fi263115Icon}
                alt=""
                src="/fi-1660114.svg"
              />
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
            <div className={styles.businessRequirementsDocument}>
              Business Requirements Document (BRD)
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.introduction}>Introduction</div>
            <div className={styles.projectSummaryParent}>
              <div className={styles.projectSummary}>Project Summary</div>
              <div className={styles.theObjectiveOf}>
                The objective of this project is to develop a web application
                for Test Company1 that enhances customer experience through
                features such as order tracking, profile management, and
                customer support communication. The application will be
                user-friendly, mobile-responsive, and adhere to the company's
                brand guidelines. This aligns with business objectives by
                improving customer satisfaction and engagement, streamlining
                operations, and integrating seamlessly with existing systems.
              </div>
            </div>
            <div className={styles.projectSummaryParent}>
              <div className={styles.projectSummary}>Background</div>
              <div
                className={styles.theObjectiveOf}
              >{`This project was proposed to address issues such as customer dissatisfaction due to lack of real-time order tracking, cumbersome profile management, and inefficient customer support communication. `}</div>
            </div>
            <div className={styles.projectSummaryParent}>
              <div className={styles.projectSummary}>Business Drivers</div>
              <div className={styles.theObjectiveOf}>
                <ul className={styles.financialIncreaseInReven}>
                  <li className={styles.financialIncreaseIn}>
                    Financial**: Increase in revenue through enhanced customer
                    satisfaction and retention.
                  </li>
                  <li className={styles.financialIncreaseIn}>
                    Operational**: Streamlined customer service processes
                    reducing manual intervention.
                  </li>
                  <li className={styles.financialIncreaseIn}>
                    Market**: Competitive advantage through advanced technology
                    adoption.
                  </li>
                  <li>
                    Environmental**: Reduced paper usage through digital profile
                    management and support services.
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.projectSummaryParent}>
              <div className={styles.projectSummary}>Project Scope</div>
              <div className={styles.projectSummary}>
                In Scope Functionality:
              </div>
              <div className={styles.theObjectiveOf}>
                <ul className={styles.financialIncreaseInReven}>
                  <li className={styles.financialIncreaseIn}>
                    Development of user-friendly, mobile-responsive web
                    application.
                  </li>
                  <li className={styles.financialIncreaseIn}>
                    Features for order tracking, profile management, and
                    customer support communication.
                  </li>
                  <li className={styles.financialIncreaseIn}>
                    Secure user authentication with multi-factor authentication
                    (MFA).
                  </li>
                  <li>
                    Data encryption in transit and at rest using HTTPS and AES
                    encryption.
                  </li>
                </ul>
              </div>
              <div className={styles.projectSummary}>
                Out of Scope Functionality:
              </div>
              <div className={styles.theObjectiveOf}>
                <ul className={styles.financialIncreaseInReven}>
                  <li className={styles.financialIncreaseIn}>
                    Integration with third-party logistics systems.
                  </li>
                  <li className={styles.financialIncreaseIn}>
                    Development of mobile applications (iOS/Android).
                  </li>
                  <li>
                    Advanced analytics and reporting features beyond basic usage
                    metrics.
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.systemPerspectiveParent}>
              <div className={styles.systemPerspective}>System Perspective</div>
              <div className={styles.theSuccessfulImplementation}>
                The successful implementation of this project could be affected
                by several factors:
              </div>
              <div className={styles.theSuccessfulImplementation}>
                <ul className={styles.financialIncreaseInReven}>
                  <li className={styles.financialIncreaseIn}>
                    Legal and Regulatory Compliance**: Adherence to data
                    protection laws such as GDPR.
                  </li>
                  <li className={styles.financialIncreaseIn}>
                    **Technical Limitations**: Compatibility with existing IT
                    infrastructure.
                  </li>
                  <li className={styles.financialIncreaseIn}>
                    **Operational Constraints**: Availability of internal
                    resources and expertise.
                  </li>
                  <li>
                    **Budget Constraints**: Project budget is capped at
                    $100,000.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.listItemyesnonoParent}>
          <div className={styles.listItemyesnono}>
            <img
              className={styles.fi6415824Icon}
              alt=""
              src="/fi-64158242.svg"
            />
            <div className={styles.vListItemContent}>
              <div className={styles.theSuccessfulImplementation}>
                Project Name
              </div>
              <div className={styles.customerName}>Customer Name</div>
            </div>
          </div>
          <div className={styles.matDivider} />
          <div className={styles.matExpansionPanelHeaderParent}>
            <div className={styles.matExpansionPanelHeader}>
              <div className={styles.responsive}>
                <img
                  className={styles.fi709592Icon}
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
                <div className={styles.fileUploader}>
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
          <div className={styles.matDividerParent}>
            <div className={styles.matDivider} />
            <div
              className={styles.matExpansionPanelHeader1}
              onClick={onMatExpansionPanelHeaderContainerClick}
            >
              <div className={styles.responsive}>
                <img
                  className={styles.fi709592Icon}
                  alt=""
                  src="/fi-172057667.svg"
                />
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
                <img
                  className={styles.fi709592Icon}
                  alt=""
                  src="/fi-151218179.svg"
                />
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
            <div className={styles.generatedBasedOnParent}>
              <div className={styles.generatedBasedOn}>Generated based on</div>
              <div className={styles.documents}>02 documents</div>
            </div>
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
            <div className={styles.button3} onClick={openEnrichPopup}>
              <img
                className={styles.downloadOutlineIcon}
                alt=""
                src="/creationoutline.svg"
              />
              <div className={styles.download}>Enrich</div>
            </div>
            <div className={styles.button3} onClick={openDownloadConfirmation}>
              <img
                className={styles.downloadOutlineIcon}
                alt=""
                src="/filewordoutline3.svg"
              />
              <div className={styles.download}>Download</div>
            </div>
          </div>
        </div>
        <div className={styles.image4Parent}>
          <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
          <div className={styles.buttonContainer}>
            <div className={styles.button2}>
              <div className={styles.download}>Template</div>
              <img className={styles.downloadOutlineIcon} alt="" src />
            </div>
            <div className={styles.button6}>
              <img
                className={styles.downloadOutlineIcon}
                alt=""
                src="/arrowuleftbottom.svg"
              />
              <div className={styles.download}>Undo</div>
            </div>
            <div className={styles.button7} onClick={onButtonContainerClick}>
              <img
                className={styles.arrowULeftBottomIcon1}
                alt=""
                src="/arrowuleftbottom1.svg"
              />
              <div className={styles.download}>Redo</div>
            </div>
          </div>
        </div>
        <div className={styles.header}>
          <div className={styles.nexaLogoParent}>
            <img className={styles.nexaLogoIcon} alt="" src="/nexalogo4.svg" />
            <div className={styles.matDivider4} />
            <div className={styles.button8}>
              <div className={styles.generatedBasedOn}>Projects</div>
            </div>
          </div>
          <div className={styles.notificationParent}>
            <div className={styles.notification}>
              <img
                className={styles.fi709592Icon}
                alt=""
                src="/fi-7095923.svg"
              />
            </div>
            <div className={styles.notification1}>
              <img
                className={styles.fi263115Icon}
                alt=""
                src="/fi-18275041.svg"
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
      {isBRDSectionsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeBRDSections}
        >
          <BRDSections onClose={closeBRDSections} />
        </PortalPopup>
      )}
      {isEnrichPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEnrichPopup}
        >
          <EnrichPopup onClose={closeEnrichPopup} />
        </PortalPopup>
      )}
      {isDownloadConfirmationOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDownloadConfirmation}
        >
          <DownloadConfirmation onClose={closeDownloadConfirmation} />
        </PortalPopup>
      )}
    </>
  );
};

export default BRDCreated;

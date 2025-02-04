import { Box } from "@mui/material";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./BRDCreationStep.module.css";

const BRDCreationStep = () => {
  return (
    <div className={styles.brdCreationStep1}>
      <img className={styles.isolationModeIcon} alt="" src />
      <div className={styles.drawer}>
        <div className={styles.top}>
          <div className={styles.expansionPanel}>
            <div className={styles.fi263115Parent}>
              <img
                className={styles.fi263115Icon}
                alt=""
                src="/fi-2631152.svg"
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
        <img className={styles.objectIcon} alt="" src="/object1.svg" />
        <div className={styles.text1}>
          <div className={styles.home}>BRD Not generated yet</div>
          <div className={styles.generatedBrdWill}>
            Generated BRD will appear here for preview
          </div>
        </div>
      </div>
      <FrameComponent2 />
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
        <div className={styles.buttonParent}>
          <div className={styles.button2}>
            <div className={styles.download}>Template</div>
            <img className={styles.downloadOutlineIcon} alt="" src />
          </div>
          <div className={styles.button3}>
            <img
              className={styles.downloadOutlineIcon}
              alt=""
              src="/filewordoutline1.svg"
            />
            <div className={styles.download}>Download</div>
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.nexaLogoParent}>
          <img className={styles.nexaLogoIcon} alt="" src="/nexalogo2.svg" />
          <div className={styles.matDivider} />
          <div className={styles.button4}>
            <div className={styles.projects1}>Projects</div>
          </div>
        </div>
        <div className={styles.notificationParent}>
          <div className={styles.notification}>
            <img className={styles.plusIcon} alt="" src="/fi-7095922.svg" />
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
  );
};

export default BRDCreationStep;

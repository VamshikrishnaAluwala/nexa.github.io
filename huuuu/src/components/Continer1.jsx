import { Box } from "@mui/material";
import Td1 from "./Td1";
import Td from "./Td";
import Td2 from "./Td2";
import StatusBtn from "./StatusBtn";
import Td3 from "./Td3";
import PropTypes from "prop-types";
import styles from "./Continer1.module.css";

const Continer1 = ({ className = "" }) => {
  return (
    <div className={[styles.continer, className].join(" ")}>
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
      <div className={styles.matTabItems}>
        <div className={styles.tabs}>
          <button className={styles.matTabItem}>
            <div className={styles.frame}>
              <div className={styles.recentProjects}>Recent Projects</div>
            </div>
            <div className={styles.matDivider} />
          </button>
          <div className={styles.matTabItem1}>
            <div className={styles.frame}>
              <div className={styles.recentBrds}>
                <span className={styles.recentBrd}>Recent BRD</span>s
              </div>
            </div>
            <div className={styles.matDivider1} />
          </div>
          <div className={styles.matTabItem1}>
            <div className={styles.frame}>
              <div className={styles.myDrafts}>My Drafts</div>
            </div>
            <div className={styles.matDivider1} />
          </div>
        </div>
        <div className={styles.matTabItem3}>
          <div className={styles.frame3}>
            <div className={styles.myDrafts}>View All</div>
            <img className={styles.plusIcon} alt="" src="/arrowright.svg" />
          </div>
        </div>
      </div>
      <div className={styles.trParent}>
        <div className={styles.tr}>
          <Td1 />
          <Td checkCircle="/checkcircle.svg" am="BRD" completed="Completed" />
          <Td
            checkCircle="/fi-172057661.svg"
            am="PRD"
            completed="Pending"
            completedColor="#f27d16"
          />
          <Td
            checkCircle="/fi-151218171.svg"
            am="User Stories"
            completed="Pending"
            completedColor="#f27d16"
          />
          <Td2 />
          <div className={styles.td}>
            <StatusBtn
              property1="in-progress"
              statusBtnWidth="6.625rem"
              checkCircleOutline="/progressclock.svg"
              active="In Progress"
            />
          </div>
          <Td3 />
          <div className={styles.td1}>
            <div className={styles.actions}>
              <img
                className={styles.dotsHorizontalIcon}
                alt=""
                src="/dotshorizontal.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.tr}>
          <Td1 />
          <Td
            checkCircle="/checkcircle.svg"
            am="BRD"
            completed="Completed"
            completedColor="#207327"
          />
          <Td
            checkCircle="/fi-172057661.svg"
            am="PRD"
            completed="Pending"
            completedColor="#f27d16"
          />
          <Td
            checkCircle="/fi-151218171.svg"
            am="User Stories"
            completed="Pending"
            completedColor="#f27d16"
          />
          <Td2 />
          <div className={styles.td}>
            <StatusBtn
              property1="in-progress"
              statusBtnWidth="6.625rem"
              checkCircleOutline="/progressclock.svg"
              active="In Progress"
            />
          </div>
          <Td3 />
          <div className={styles.td1}>
            <div className={styles.actions}>
              <img
                className={styles.dotsHorizontalIcon}
                alt=""
                src="/dotshorizontal.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.tr}>
          <Td1 />
          <Td
            checkCircle="/checkcircle.svg"
            am="BRD"
            completed="Completed"
            completedColor="#207327"
          />
          <Td
            checkCircle="/fi-172057661.svg"
            am="PRD"
            completed="Pending"
            completedColor="#f27d16"
          />
          <Td
            checkCircle="/fi-151218171.svg"
            am="User Stories"
            completed="Pending"
            completedColor="#f27d16"
          />
          <Td2 />
          <div className={styles.td}>
            <StatusBtn
              property1="in-progress"
              statusBtnWidth="6.625rem"
              checkCircleOutline="/progressclock.svg"
              active="In Progress"
            />
          </div>
          <Td3 />
          <div className={styles.td1}>
            <div className={styles.actions}>
              <img
                className={styles.dotsHorizontalIcon}
                alt=""
                src="/dotshorizontal.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.tr}>
          <Td1 />
          <Td
            checkCircle="/checkcircle.svg"
            am="BRD"
            completed="Completed"
            completedColor="#207327"
          />
          <Td
            checkCircle="/fi-172057661.svg"
            am="PRD"
            completed="Pending"
            completedColor="#f27d16"
          />
          <Td
            checkCircle="/fi-151218171.svg"
            am="User Stories"
            completed="Pending"
            completedColor="#f27d16"
          />
          <Td2 />
          <div className={styles.td}>
            <StatusBtn
              property1="in-progress"
              statusBtnWidth="6.625rem"
              checkCircleOutline="/progressclock.svg"
              active="In Progress"
            />
          </div>
          <Td3 />
          <div className={styles.td1}>
            <div className={styles.actions}>
              <img
                className={styles.dotsHorizontalIcon}
                alt=""
                src="/dotshorizontal.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.tr4}>
          <Td1 />
          <Td
            checkCircle="/checkcircle.svg"
            am="BRD"
            completed="Completed"
            completedColor="#207327"
          />
          <Td
            checkCircle="/checkcircle1.svg"
            am="PRD"
            completed="Completed"
            completedColor="#207327"
          />
          <Td
            checkCircle="/checkcircle2.svg"
            am="User Stories"
            completed="Completed"
            completedColor="#207327"
          />
          <Td2 />
          <div className={styles.td}>
            <StatusBtn
              property1="Default"
              checkCircleOutline="/checkcircleoutline.svg"
              active="Completed"
            />
          </div>
          <Td3 />
          <div className={styles.td1}>
            <div className={styles.actions}>
              <img
                className={styles.dotsHorizontalIcon}
                alt=""
                src="/dotshorizontal.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Continer1.propTypes = {
  className: PropTypes.string,
};

export default Continer1;

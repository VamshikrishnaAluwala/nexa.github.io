import { Box } from "@mui/material";
import ExpansionPanel from "../components/ExpansionPanel";
import ExpansionPanel1 from "../components/ExpansionPanel1";
import Button from "../components/Button";
import Continer1 from "../components/Continer1";
import Header from "../components/Header";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <img className={styles.isolationModeIcon} alt="" src />
      <div className={styles.drawer}>
        <div className={styles.top}>
          <ExpansionPanel />
        </div>
        <ExpansionPanel1 />
      </div>
      <div className={styles.imageParent}>
        <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
        <div className={styles.text}>
          <div className={styles.unlockThePowerOfYourClienParent}>
            <div className={styles.unlockThePower}>
              Unlock the power of your client insights with Nexa AI.
            </div>
            <div className={styles.theNexaAi}>
              The Nexa AI tool empowers teams to create critical project
              documentation more effectively, with automation helping them focus
              on innovation while reducing manual tasks.
            </div>
          </div>
          <Button
            disabled={false}
            iconLeft={false}
            iconRight={false}
            size="large"
            variant="fab extended"
            text="Get Started"
          />
        </div>
        <img
          className={styles.frameChild}
          alt=""
          src="/rectangle-34624617.svg"
        />
        <img className={styles.imageIcon1} alt="" src="/image2@2x.png" />
      </div>
      <Continer1 />
      <Header />
    </div>
  );
};

export default Dashboard;

import { Box } from "@mui/material";
import Card from "../components/Card";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <img className={styles.loginChild} alt="" src="/line-1.svg" />
      <Card />
      <img
        className={styles.isolationModeIcon}
        alt=""
        src="/isolation-mode.svg"
      />
      <img className={styles.imageIcon} alt="" src="/image@2x.png" />
      <img className={styles.loginItem} alt="" src="/line-2.svg" />
      <img className={styles.loginInner} alt="" src="/line-3.svg" />
      <div className={styles.vectorParent}>
        <img className={styles.groupChild} alt="" src="/rectangle-6.svg" />
        <div className={styles.groupItem} />
      </div>
      <img className={styles.rectangleIcon} alt="" src="/rectangle-61.svg" />
    </div>
  );
};

export default Login;

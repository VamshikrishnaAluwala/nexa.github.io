import { useState, useCallback } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({ className = "" }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onButtonClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className={[styles.card, className].join(" ")}>
      <img className={styles.nexaLogoIcon} alt="" src="/nexalogo.svg" />
      <div className={styles.inputFormContainer}>
        <div className={styles.inputForm}>
          <div className={styles.textInputContainer}>
            <div className={styles.input}>
              <div className={styles.usernameName}>
                Username Name / Mobile Number
              </div>
              <TextField
                className={styles.inputField}
                color="primary"
                placeholder="User"
                required={true}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon>person_sharp</Icon>
                    </InputAdornment>
                  ),
                }}
                sx={{ "& .MuiInputBase-root": { height: "48px" } }}
              />
            </div>
            <div className={styles.input}>
              <div className={styles.usernameName}>Password</div>
              <TextField
                className={styles.inputField}
                color="primary"
                placeholder="Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleShowPasswordClick}
                        aria-label="toggle password visibility"
                      >
                        <Icon>
                          {showPassword ? "visibility_off" : "visibility"}
                        </Icon>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ "& .MuiInputBase-root": { height: "48px" } }}
              />
              <div className={styles.horizontalContainer}>
                <div className={styles.forgotPassword}>Forgot Password?</div>
              </div>
            </div>
          </div>
          <button className={styles.button} onClick={onButtonClick}>
            <div className={styles.login}>Login</div>
            <img
              className={styles.iconsWhitelogin}
              alt=""
              src="/iconswhitelogin.svg"
            />
          </button>
          <div className={styles.textInput}>
            <div className={styles.matDivider} />
            <div className={styles.verticalContainer}>
              <div className={styles.or}>or</div>
            </div>
          </div>
          <div className={styles.matBtn}>
            <div className={styles.paragraphContainer}>
              <div className={styles.vIconRight}>edit</div>
              <div className={styles.text}>Login with SSO</div>
              <div className={styles.vIconLeft}>cancel</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.termsConditionsPrivacyPWrapper}>
          <a
            className={styles.termsConditions}
          >{`Terms & Conditions   -   Privacy Policy`}</a>
        </div>
        <div className={styles.poweredByParent}>
          <div className={styles.poweredBy}>Powered by</div>
          <img className={styles.frameChild} alt="" src="/frame-15.svg" />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
};

export default Card;

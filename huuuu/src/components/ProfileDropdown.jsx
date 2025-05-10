import { useCallback } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ProfileDropdown.module.css";

const ProfileDropdown = ({ className = "" }) => {
  const navigate = useNavigate();

  const onMatListItemClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={[styles.profileDropdown, className].join(" ")}>
      <div className={styles.matImg}>
        <img className={styles.matImgChild} alt="" src="/ellipse-7@2x.png" />
        <div className={styles.spanParent}>
          <div className={styles.span}>Venkat Ramesh</div>
          <div className={styles.span1}>Superadmin</div>
        </div>
      </div>
      <div className={styles.matList}>
        <button className={styles.matListItem}>
          <img
            className={styles.accountOutlineIcon}
            alt=""
            src="/accountoutline.svg"
          />
          <div className={styles.vListItemContent}>
            <div className={styles.myProfile}>My Profile</div>
            <div className={styles.secondaryText}>Secondary text</div>
          </div>
        </button>
        <button className={styles.matListItem1}>
          <img className={styles.accountOutlineIcon} alt="" src="/tune.svg" />
          <div className={styles.vListItemContent}>
            <div className={styles.myProfile}>Settings</div>
            <div className={styles.secondaryText}>Secondary text</div>
          </div>
        </button>
        <button className={styles.matListItem} onClick={onMatListItemClick}>
          <img className={styles.accountOutlineIcon} alt="" src="/logout.svg" />
          <div className={styles.vListItemContent}>
            <div className={styles.myProfile}>Logout</div>
            <div className={styles.secondaryText}>Secondary text</div>
          </div>
        </button>
      </div>
    </div>
  );
};

ProfileDropdown.propTypes = {
  className: PropTypes.string,
};

export default ProfileDropdown;

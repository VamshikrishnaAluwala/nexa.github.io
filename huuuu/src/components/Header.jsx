import { useState, useCallback } from "react";
import { Box } from "@mui/material";
import ProfileDropdown from "./ProfileDropdown";
import PortalPopup from "./PortalPopup";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({ className = "" }) => {
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const openProfileDropdown = useCallback(() => {
    setProfileDropdownOpen(true);
  }, []);

  const closeProfileDropdown = useCallback(() => {
    setProfileDropdownOpen(false);
  }, []);

  return (
    <>
      <div className={[styles.header, className].join(" ")}>
        <img className={styles.nexaLogoIcon} alt="" src="/nexalogo1.svg" />
        <div className={styles.notificationParent}>
          <div className={styles.notification}>
            <img className={styles.fi709592Icon} alt="" src="/fi-709592.svg" />
          </div>
          <div className={styles.notification1}>
            <img
              className={styles.fi1827504Icon}
              alt=""
              src="/fi-1827504.svg"
            />
          </div>
          <div
            className={styles.matAvatarWrapper}
            onClick={openProfileDropdown}
          >
            <div className={styles.matAvatar}>
              <div className={styles.person}>person</div>
            </div>
          </div>
        </div>
      </div>
      {isProfileDropdownOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeProfileDropdown}
        >
          <ProfileDropdown onClose={closeProfileDropdown} />
        </PortalPopup>
      )}
    </>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;

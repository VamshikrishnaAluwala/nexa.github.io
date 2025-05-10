import { useMemo } from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({
  className = "",
  disabled = false,
  iconLeft = false,
  iconRight = false,
  size = "medium",
  variant = "contained",
  buttonHeight,
  text,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      height: buttonHeight,
    };
  }, [buttonHeight]);

  return (
    <button
      className={[styles.root, className].join(" ")}
      disabled={disabled}
      data-iconLeft={iconLeft}
      data-iconRight={iconRight}
      data-size={size}
      data-variant={variant}
      style={buttonStyle}
    >
      <div className={styles.content}>
        <div className={styles.iconLeft}>edit</div>
        <div className={styles.text}>{text}</div>
        <div className={styles.iconRight}>cancel</div>
      </div>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,

  /** Variant props */
  disabled: PropTypes.bool,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  size: PropTypes.string,
  variant: PropTypes.string,

  /** Style props */
  buttonHeight: PropTypes.string,
};

export default Button;

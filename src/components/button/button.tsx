import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import classNames from "classnames";

// import './style.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

type Sizes = 'small' | 'medium' | 'large'

type BtnType = 
        | "primary"
        | "default"
        | "danger"
        | "secondary"
        | "success"
        | "info"
        | "light"
        | "warning"
        | "dark"
        | "link";

interface BaseProps {
  className?: string,
  size?: Sizes,
  loading?: boolean,
  disabled?: boolean,
  btnType?: BtnType,
  style?: Record<string, unknown>,
  href?: string,
  onClick?: (event: React.MouseEvent<(HTMLButtonElement | HTMLAnchorElement), MouseEvent>) => void
}

const baseClass = 'rc-button';

function Button(props: PropsWithChildren<ButtonProps & BaseProps>) {
  const { children, className, btnType, size, loading, disabled, ...rest } = props;

  const classes = classNames(baseClass, className, {
    [`${baseClass}-${btnType}`]: btnType,
    [`${baseClass}-default`]: !btnType,
    [`${baseClass}-${size}`]: size,
    disabled: disabled,
    loading: loading,
  });

  return (
    <button className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: 'medium',
  loading: false,
  disabled: false,
}

export default Button;
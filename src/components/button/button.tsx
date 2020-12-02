import React, { ButtonHTMLAttributes, PropsWithChildren, AnchorHTMLAttributes } from "react";
import classNames from "classnames";

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

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
  disabled?: boolean,
  btnType?: BtnType,
  style?: Record<string, unknown>,
  href?: string,
  onClick?: (event: React.MouseEvent<(HTMLButtonElement | HTMLAnchorElement), MouseEvent>) => void
}

const baseClass = 'rc-button';

type NativeButtonProps = ButtonHTMLAttributes<HTMLElement> & BaseProps;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

function Button(props: PropsWithChildren<ButtonProps & BaseProps>) {
  const { children, className, btnType, size, disabled, href, ...rest } = props;

  const classes = classNames(baseClass, className, {
    [`${baseClass}-${btnType}`]: btnType,
    [`${baseClass}-default`]: !btnType,
    [`${baseClass}-${size}`]: size,
    [`${baseClass}-link`]: !!href || btnType === 'link',
  });
  let renderContent;
  if (href) {
    renderContent = (
      <a className={classes} href={href}  {...rest}>
        {children}
      </a>
    );
  } else {
    renderContent = (
      <button className={classes} disabled={disabled} {...rest}>
        {children}
      </button>
    );
  }

  return renderContent;
}

Button.defaultProps = {
  size: 'medium',
  loading: false,
  disabled: false,
}

export default Button;
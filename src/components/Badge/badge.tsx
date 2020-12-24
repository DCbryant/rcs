import React, { DOMAttributes, ReactNode, useRef, useEffect } from 'react'
import classNames from "classnames";

export interface BadgeProps extends DOMAttributes<HTMLDivElement> {
  type?:
  | "primary"
  | "default"
  | "danger"
  | "secondary"
  | "success"
  | "info"
  | "light"
  | "warning"
  | "dark";
  className?: string;
  refCallback?: (e: HTMLDivElement | null) => void;
  count?: ReactNode;
  visible?: boolean;
  dot?: boolean;
}

const baseClass = 'rc-badge';

export function Badge(props: BadgeProps) {
  const { type, className, refCallback, count, visible, dot, children, ...restProps } = props;
  console.log(type, "type");
  const classes = classNames('rc-badge', className, {
    [`${baseClass}-${type}`]: type,
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refCallback && ref.current) {
      refCallback(ref.current)
    }
  }, [refCallback]);

  return (
    <div className={classes} ref={ref} {...restProps}>
      {(count || dot) ? (
        <div
          className={`rc-badge-count rc-count-${type}
            ${children ? "" : "no-children"} ${visible ? "" : "badge-hide"} ${dot ? "badge-dot" : ""
            }`}
        >
          <span>{count}</span>
        </div>
      ) : null}
      {children ? children : null}
    </div>
  )
}

Badge.defaultProps = {
	type: "danger",
	visible: true,
	dot: false,
	count: ""
};

export default Badge;
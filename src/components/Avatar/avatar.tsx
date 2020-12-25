import React, { ReactNode } from 'react'
import classNames from "classnames";

type shapeProps = 'circle' | 'square';

interface AvatarProps {
	size: number;
	icon?: ReactNode;
	style?: Record<string, unknown>;
	shape?: shapeProps;
}


interface sizeProps {
	width: number;
	height: number;
	lineHeight: string;
	textAlign: 'center';
	borderRadius?: string | number;
}

const baseClass = 'rc-avatar';

function Avatar(props: AvatarProps) {
	const { icon, size, style, shape } = props;
	const classes = classNames(baseClass, {

	});
	const wrapProps : sizeProps = {
		width: size,
		height: size,
		lineHeight: size + 'px',
		textAlign: 'center',
	};

	if (shape === 'circle') {
		wrapProps.borderRadius = '50%';
	}

	const wrapperStyle = {...wrapProps, ...style};
	return (
		<div className={classes} style={wrapperStyle}>
			{/* <span></span> */}
			{icon}
		</div>
	);
}

Avatar.defaultProps = {
	shape: 'circle',
};

export default Avatar;
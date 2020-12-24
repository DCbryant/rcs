import React from "react";
import  Badge  from './badge';

export default {
	title: 'Badge ',
	component: { Badge },
};

export const Normal = () => (
	<>
		<Badge count={10} ></Badge>
	</>
);
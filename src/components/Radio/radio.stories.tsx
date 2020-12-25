import React from "react";
import  Radio  from './radio';

export default {
	title: 'Radio ',
	component: { Radio },
};

export const Normal = () => (
	<>
		<Radio data={['radio1', 'radio2', 'radio3']} callback={v => console.log(v)}></Radio>
	</>
);
import React from 'react';
import  Avatar  from './avatar';
import Icon from '../Icon';

export default {
	title: 'Avatar ',
	component: { Avatar },
};

export const Normal = () => (
	<>
		<Avatar size={32} icon={<Icon icon="coffee" />} ></Avatar>
	</>
);
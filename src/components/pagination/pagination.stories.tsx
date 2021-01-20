import React from 'react';
import  Pagination  from './pagination';

export default {
	title: 'pagination ',
	component: { Pagination },
};

export const Normal = () => {
	return (
		<Pagination defaultCurrent={11} total={30} />
	)
}
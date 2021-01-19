import React from 'react';
import  Pagination  from './pagination';

export default {
	title: 'pagination ',
	component: { Pagination },
};

export const Current = () => {
	return (
		<Pagination defaultCurrent={1} total={50} />
	)
}
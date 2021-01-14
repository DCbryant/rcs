import React from 'react';
import  Table  from './table';

export default {
	title: 'Table ',
	component: { Table },
};

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
		address: '西湖区湖底公园1号',
		children: [{
			key: '1.1',
			name: '胡彦斌.x',
			age: 44,
			address: '汤臣一品',
		}]
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
		key: 'name',
		// eslint-disable-next-line react/display-name
		render: () => {
			return <div>xxxx</div>;
		}
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

export const Normal = () => {
	return (
		<Table dataSource={dataSource} columns={columns} />
	);
}
import React from 'react'
import classNames from "classnames";
import Header from './header';
import Body from './body';

interface TableProps {
	dataSource: Record<string, any>[];
	columns: Record<string, any>[];
	bordered?: boolean;
}

// 嵌套数据
// column自定义render
// 数据排序
// 虚拟滚动

const baseClass = 'rc-table';
function Table(props: TableProps) {
	const { dataSource, columns, bordered } = props;
	return (
		<div className={`${baseClass}-wrapper`}>
			<table className={baseClass}>
				<Header
					columns={columns}
					bordered={bordered}
				/>
				<Body
					columns={columns}
					dataSource={dataSource}
					bordered={bordered}
				/>
			</table>
		</div>
	)
}

export default Table;
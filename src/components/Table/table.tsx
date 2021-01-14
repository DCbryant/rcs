import React from 'react'
import classNames from "classnames";

interface TableProps {
	dataSource: Record<string, any>[],
	columns: Record<string, any>[]
}

const baseClass = 'rc-table';
function Table(props: TableProps) {
	const {dataSource, columns} = props;
	return (
		<div className={`${baseClass}-wrapper`}>
			<table className={baseClass}>
				<thead>
					<tr>
						{columns.map(column => (
							<th className={`${baseClass}-cell`} key={column.key}>
								{column.title}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{dataSource.map(data => (
						<tr key={data.key} >
							{columns.map(column => (
								<td className={`${baseClass}-cell`} key={column.key}>
									{data[column.dataIndex]}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Table;
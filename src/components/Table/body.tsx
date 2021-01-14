import React from 'react'
import Cell from './cell';
interface BodyProps {
  dataSource: Record<string, any>[];
  columns: Record<string, any>[];
  bordered?: boolean;
}

const baseClass = 'rc-table';

function Body(props: BodyProps) {
  const { dataSource, columns, bordered } = props;
  return (
    <tbody>
      {
        dataSource.length ? (
          dataSource.map(data => (
            <tr key={data.key} >
              {columns.map(column => (
                <Cell
                  key={column.key}
                  column={column}
                  bordered={bordered}
                  title={data[column.dataIndex]}
                />
              ))}
            </tr>
          ))
        ) : (
            <tr>
              <td className={`${baseClass}-cell`}>暂无数据</td>
            </tr>
          )
      }
    </tbody>
  );
}

export default Body;
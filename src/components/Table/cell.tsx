import React from 'react'
interface CellProps {
  column: Record<string, any>;
  bordered?: boolean;
  title: string;
  isHead?: boolean;
}

const baseClass = 'rc-table';

function Cell(props: CellProps) {
  const { column, bordered, title, isHead } = props;
  if (isHead) {
    return (
      <th className={`${baseClass}-cell ${bordered ? 'bordered' : ''}`} key={column.key}>
        {title}
      </th>
    )
  } else {
    return (
      <td className={`${baseClass}-cell ${bordered ? 'bordered' : ''}`} key={column.key}>
        {title}
      </td>
    )
  }

}

export default Cell;
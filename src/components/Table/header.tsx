import React from 'react';
import Cell from './cell';

interface HeaderProps {
  columns: Record<string, any>[];
  bordered?: boolean;
}

function Header(props: HeaderProps) {
  const { columns, bordered } = props;
  return (
    <thead>
      <tr>
        {columns.map(column => (
          <Cell 
            key={column.key} 
            column={column} 
            bordered={bordered} 
            title={column.title} 
            isHead={true}
          />
        ))}
      </tr>
    </thead>
  );
}

export default Header;
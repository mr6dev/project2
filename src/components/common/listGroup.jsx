import React from 'react';

const ListGroup = (props) => {
  const { items, textProperty, valueProperty, onItemSelect, selectedItem } =
    props;
  return (
    <ul className='list-group'>
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          className={
            selectedItem === item ? 'list-group-item active' : 'list-group-item'
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  valueProperty: '_id',
  textProperty: 'name',
};

export default ListGroup;

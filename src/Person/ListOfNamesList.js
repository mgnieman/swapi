import React from 'react';

const ListOfNamesList = props => (
  console.log('props:', props),
  (
    <div>
      <p>list</p>
      {props.data}
    </div>
  )
);

export default ListOfNamesList;

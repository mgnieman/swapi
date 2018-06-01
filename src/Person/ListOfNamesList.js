import React from 'react';
import ListOfNames from './ListOfNames';

const ListOfNamesList = props =>
  props.data.map(obj => {
    return <ListOfNames data={obj.name} />;
  });

export default ListOfNamesList;

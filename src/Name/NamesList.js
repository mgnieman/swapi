import React from 'react';
import Name from './Name';

const NamesList = props =>
  props.data.map(obj => {
    return <Name data={obj.name} />;
  });

export default NamesList;

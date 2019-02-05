import React from 'react';

export default props => {
  if (props.condition) {
    return props.children;
  } else {
    return false;
  }
};
import {Entity} from 'aframe-react';
import React from 'react';

export default props => {
  return (
    <Entity
      text={{text: props.text}}
      material={{color: props.color}}
      position={{x: props.posX, y: props.posY, z: props.posZ}}
    />
  );
};

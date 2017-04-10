import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity
    text={{value: props.text, wrapCount: '30', align: 'center'}}
    events={{click: props.clickEvent}}
    geometry={{primitive: 'plane', width: props.width, height: 1}}
    material={{color: props.color, opacity: 0.3}}
    position={{x: props.posX, y: props.posY, z: props.posZ}}
	  rotation={{x: props.rotX, y: props.rotY, z: props.rotZ}}
    events={{
      click: props.click
    }}
  />
);


//text__appname="color: yellow; align: center; font: exo2bold; wrap-count: 12; z-offset: 0.01; baseline: bottom;
// value: aframe.city"
// text__cityname="color: white; align: center; font: exo2semibold; wrap-count: 24; z-offset: 0.01; baseline: top;
// value: #NewCity"

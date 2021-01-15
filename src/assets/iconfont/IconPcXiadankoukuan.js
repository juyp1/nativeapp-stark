/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconPcXiadankoukuan = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M344.32 267.52l350.72 61.44c14.08 3.84 23.04 16.64 20.48 30.72l-40.96 234.24c-2.56 14.08-15.36 23.04-29.44 20.48L294.4 552.96C280.32 550.4 271.36 537.6 273.92 523.52L314.88 289.28C317.44 275.2 330.24 264.96 344.32 267.52z"
        fill={getIconColor(color, 0, '#FEF5CE')}
      />
      <Path
        d="M277.3248 331.968h419.84c14.08 0 25.6 11.52 25.6 25.6v282.88c0 14.08-11.52 25.6-25.6 25.6H277.3248c-14.08 0-25.6-11.52-25.6-25.6V357.568c0-14.08 11.52-25.6 25.6-25.6z"
        fill={getIconColor(color, 1, '#FFD057')}
      />
      <Path
        d="M573.0048 331.968h125.44c14.08 0 25.6 11.52 25.6 25.6v282.88c0 14.08-11.52 25.6-25.6 25.6H375.8848L573.0048 331.968z"
        fill={getIconColor(color, 2, '#FEE081')}
      />
      <Path
        d="M251.7248 650.688h472.32v15.36H251.7248z"
        fill={getIconColor(color, 3, '#FF9F37')}
      />
      <Path
        d="M276.48 440.32h74.24c33.28 0 58.88 26.88 58.88 58.88 0 33.28-26.88 58.88-58.88 58.88H276.48c-32 1.28-58.88-25.6-58.88-58.88 0-32 26.88-58.88 58.88-58.88z"
        fill={getIconColor(color, 4, '#FF9F37')}
      />
      <Path
        d="M350.72 499.2m-34.56 0a34.56 34.56 0 1 0 69.12 0 34.56 34.56 0 1 0-69.12 0Z"
        fill={getIconColor(color, 5, '#FFD057')}
      />
      <Path
        d="M705.28 648.96m-101.12 0a101.12 101.12 0 1 0 202.24 0 101.12 101.12 0 1 0-202.24 0Z"
        fill={getIconColor(color, 6, '#FF9F37')}
      />
      <Path
        d="M705.28 648.96m-79.36 0a79.36 79.36 0 1 0 158.72 0 79.36 79.36 0 1 0-158.72 0Z"
        fill={getIconColor(color, 7, '#FF9F37')}
      />
      <Path
        d="M705.28 730.88c-44.8 0-81.92-37.12-81.92-81.92s37.12-81.92 81.92-81.92 81.92 37.12 81.92 81.92-37.12 81.92-81.92 81.92z m0-157.44c-42.24 0-75.52 34.56-75.52 75.52 0 42.24 34.56 75.52 75.52 75.52 42.24 0 75.52-34.56 75.52-75.52 0-42.24-34.56-75.52-75.52-75.52z"
        fill={getIconColor(color, 8, '#F8D4A4')}
      />
      <Path
        d="M716.8 660.48h23.04v11.52H716.8v23.04h-23.04v-23.04h-23.04v-11.52h23.04l-5.12-11.52h-17.92v-11.52h14.08l-14.08-33.28h17.92l14.08 33.28h6.4l14.08-33.28h16.64l-14.08 33.28h14.08v11.52h-17.92l-5.12 11.52z"
        fill={getIconColor(color, 9, '#FFFFFF')}
      />
    </Svg>
  );
};

IconPcXiadankoukuan.defaultProps = {
  size: 18,
};

IconPcXiadankoukuan = React.memo ? React.memo(IconPcXiadankoukuan) : IconPcXiadankoukuan;

export default IconPcXiadankoukuan;

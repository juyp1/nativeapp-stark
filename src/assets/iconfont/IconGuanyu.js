/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconGuanyu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M728.32 710.4l71.68 61.44c6.4 5.12 8.96 14.08 5.12 21.76-2.56 7.68-10.24 12.8-19.2 12.8H512c-162.56 0-294.4-131.84-294.4-294.4s131.84-294.4 294.4-294.4 294.4 131.84 294.4 294.4c0 74.24-28.16 144.64-78.08 198.4z m-154.88-106.24c-51.2 44.8-35.84-33.28-33.28-44.8 2.56-11.52 35.84-78.08 11.52-89.6-24.32-11.52-101.12 44.8-101.12 44.8s-12.8 8.96-11.52 11.52c7.68 14.08 44.8-11.52 44.8-11.52s12.8-10.24 11.52 0c-11.52 44.8-17.92 89.6-21.76 134.4 5.12 29.44 52.48 16.64 89.6-21.76 35.84-39.68 10.24-23.04 10.24-23.04zM544 435.2c14.08 1.28 26.88-6.4 34.56-17.92 7.68-11.52 8.96-26.88 2.56-39.68-6.4-12.8-19.2-20.48-33.28-21.76-14.08-1.28-26.88 6.4-34.56 17.92s-8.96 26.88-2.56 39.68c6.4 12.8 19.2 21.76 33.28 21.76z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconGuanyu.defaultProps = {
  size: 18,
};

IconGuanyu = React.memo ? React.memo(IconGuanyu) : IconGuanyu;

export default IconGuanyu;

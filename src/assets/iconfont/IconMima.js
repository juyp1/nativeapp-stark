/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconMima = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M490.24 606.72v67.84c0 8.96 7.68 16.64 16.64 16.64s16.64-7.68 16.64-16.64v-67.84c19.2-6.4 33.28-24.32 33.28-46.08 0-26.88-21.76-48.64-48.64-48.64s-48.64 21.76-48.64 48.64c-1.28 21.76 11.52 39.68 30.72 46.08z m115.2-275.2c0 12.8-11.52 24.32-24.32 24.32-12.8 0-24.32-10.24-24.32-24.32v-16.64c0-26.88-21.76-48.64-48.64-48.64s-48.64 21.76-48.64 48.64V396.8h222.72c21.76 0 38.4 16.64 38.4 38.4v332.8c0 21.76-16.64 38.4-38.4 38.4H332.8c-21.76 0-38.4-16.64-38.4-38.4V436.48c0-21.76 16.64-38.4 38.4-38.4h75.52V294.4c0-42.24 34.56-76.8 76.8-76.8h42.24c42.24 0 76.8 34.56 76.8 76.8l1.28 37.12z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconMima.defaultProps = {
  size: 18,
};

IconMima = React.memo ? React.memo(IconMima) : IconMima;

export default IconMima;

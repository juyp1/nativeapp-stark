/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconSuozhu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M490.24 606.72v67.84c0 8.96 7.68 16.64 16.64 16.64s16.64-7.68 16.64-16.64v-67.84c19.2-6.4 33.28-24.32 33.28-46.08 0-26.88-21.76-48.64-48.64-48.64s-48.64 21.76-48.64 48.64c-1.28 21.76 11.52 39.68 30.72 46.08z m-81.92-208.64V307.2c0-49.92 39.68-89.6 89.6-89.6h16.64c49.92 0 89.6 39.68 89.6 89.6v90.88h75.52c21.76 0 38.4 16.64 38.4 38.4V768c0 21.76-16.64 38.4-38.4 38.4H332.8c-21.76 0-38.4-16.64-38.4-38.4V436.48c0-21.76 16.64-38.4 38.4-38.4h75.52z m98.56-131.84c-26.88 0-48.64 21.76-48.64 48.64V396.8h98.56v-81.92c-1.28-26.88-23.04-48.64-49.92-48.64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconSuozhu.defaultProps = {
  size: 18,
};

IconSuozhu = React.memo ? React.memo(IconSuozhu) : IconSuozhu;

export default IconSuozhu;

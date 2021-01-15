/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconDianpuid = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M252.16 481.28c-8.96 7.68-21.76 6.4-29.44-1.28-7.68-8.96-6.4-21.76 1.28-29.44L460.8 236.8c28.16-25.6 71.68-25.6 101.12 0l236.8 213.76c8.96 7.68 8.96 20.48 1.28 29.44s-20.48 8.96-29.44 1.28L535.04 267.52c-12.8-11.52-33.28-11.52-46.08 0L252.16 481.28z m33.28 49.92c0-11.52 8.96-20.48 20.48-20.48 11.52 0 20.48 8.96 20.48 20.48v190.72c0 19.2 15.36 34.56 34.56 34.56h303.36c19.2 0 34.56-15.36 34.56-34.56V531.2c0-11.52 8.96-20.48 20.48-20.48s20.48 8.96 20.48 20.48v190.72c0 40.96-33.28 75.52-75.52 75.52H360.96c-40.96 0-75.52-33.28-75.52-75.52V531.2zM459.52 512v75.52c0 26.88 21.76 47.36 47.36 47.36s47.36-21.76 47.36-47.36V512h-94.72z m-21.76-40.96h136.96c11.52 0 20.48 8.96 20.48 20.48v96c0 48.64-39.68 89.6-89.6 89.6s-89.6-39.68-89.6-89.6v-96c1.28-11.52 11.52-20.48 21.76-20.48z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconDianpuid.defaultProps = {
  size: 18,
};

IconDianpuid = React.memo ? React.memo(IconDianpuid) : IconDianpuid;

export default IconDianpuid;

/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconDizhi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M501.76 217.6c101.12 0 181.76 80.64 183.04 181.76 0 101.12-99.84 224-181.76 327.68-83.2-102.4-181.76-227.84-181.76-327.68 1.28-101.12 81.92-181.76 180.48-181.76z m0 302.08c66.56 0 121.6-52.48 119.04-119.04 0-65.28-52.48-119.04-119.04-119.04-65.28 0-119.04 52.48-119.04 119.04 0 64 52.48 119.04 119.04 119.04z m-67.84-120.32c0-19.2 7.68-35.84 20.48-48.64s29.44-20.48 48.64-20.48c16.64 0 35.84 7.68 48.64 20.48s20.48 29.44 20.48 48.64c0 16.64-7.68 35.84-20.48 48.64s-29.44 20.48-48.64 20.48c-16.64 0-35.84-7.68-48.64-20.48s-20.48-29.44-20.48-48.64zM503.04 806.4c-115.2 0-234.24-37.12-234.24-107.52 0-38.4 38.4-71.68 107.52-92.16 12.8-2.56 24.32 2.56 28.16 15.36 2.56 12.8-2.56 24.32-15.36 28.16-51.2 14.08-74.24 34.56-74.24 48.64 0 24.32 74.24 62.72 190.72 62.72s190.72-37.12 190.72-62.72c0-14.08-28.16-35.84-79.36-49.92-12.8-2.56-19.2-15.36-15.36-28.16 2.56-12.8 15.36-19.2 28.16-15.36 71.68 19.2 113.92 52.48 113.92 93.44-5.12 70.4-124.16 107.52-240.64 107.52z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconDizhi.defaultProps = {
  size: 18,
};

IconDizhi = React.memo ? React.memo(IconDizhi) : IconDizhi;

export default IconDizhi;

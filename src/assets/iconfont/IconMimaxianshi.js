/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconMimaxianshi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M764.16 509.44c-30.72-48.64-74.24-89.6-125.44-116.48 12.8 21.76 20.48 47.36 20.48 74.24C659.2 547.84 592.64 614.4 512 614.4s-147.2-66.56-147.2-147.2c0-25.6 6.4-51.2 20.48-74.24-51.2 26.88-93.44 67.84-125.44 116.48 56.32 87.04 147.2 147.2 252.16 147.2s195.84-60.16 252.16-147.2z m-236.8-126.72c0-8.96-7.68-15.36-15.36-15.36-55.04 0-99.84 44.8-99.84 99.84 0 8.96 7.68 15.36 15.36 15.36 8.96 0 15.36-7.68 15.36-15.36 0-37.12 30.72-67.84 67.84-67.84 10.24 0 16.64-7.68 16.64-16.64zM806.4 509.44c0 7.68-2.56 15.36-6.4 23.04-60.16 99.84-171.52 166.4-288 166.4s-227.84-67.84-288-166.4c-3.84-7.68-6.4-15.36-6.4-23.04 0-7.68 2.56-15.36 6.4-23.04 60.16-99.84 171.52-166.4 288-166.4s227.84 67.84 288 166.4c3.84 7.68 6.4 14.08 6.4 23.04z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconMimaxianshi.defaultProps = {
  size: 18,
};

IconMimaxianshi = React.memo ? React.memo(IconMimaxianshi) : IconMimaxianshi;

export default IconMimaxianshi;

/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconDingdan = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M243.2 294.4c28.16 0 51.2 23.04 51.2 51.2v371.2c0 21.76 16.64 38.4 38.4 38.4h321.28c28.16 0 51.2 23.04 51.2 51.2H281.6c-21.76 0-38.4-16.64-38.4-38.4V294.4z m140.8-76.8h345.6c28.16 0 51.2 23.04 51.2 51.2v396.8c0 28.16-23.04 51.2-51.2 51.2H371.2c-21.76 0-38.4-16.64-38.4-38.4V268.8c0-28.16 23.04-51.2 51.2-51.2z m44.8 115.2c-10.24 0-19.2 8.96-19.2 19.2s8.96 19.2 19.2 19.2h268.8c10.24 0 19.2-8.96 19.2-19.2s-8.96-19.2-19.2-19.2h-268.8z m0 115.2c-10.24 0-19.2 8.96-19.2 19.2s8.96 19.2 19.2 19.2h268.8c10.24 0 19.2-8.96 19.2-19.2s-8.96-19.2-19.2-19.2h-268.8z m0 115.2c-10.24 0-19.2 8.96-19.2 19.2s8.96 19.2 19.2 19.2h128c10.24 0 19.2-8.96 19.2-19.2s-8.96-19.2-19.2-19.2h-128z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconDingdan.defaultProps = {
  size: 18,
};

IconDingdan = React.memo ? React.memo(IconDingdan) : IconDingdan;

export default IconDingdan;

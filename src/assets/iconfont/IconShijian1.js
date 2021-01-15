/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconShijian1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 806.4c-162.56 0-294.4-131.84-294.4-294.4s131.84-294.4 294.4-294.4 294.4 131.84 294.4 294.4-131.84 294.4-294.4 294.4z m0-37.12c142.08 0 257.28-115.2 257.28-257.28s-115.2-257.28-257.28-257.28-257.28 115.2-257.28 257.28 115.2 257.28 257.28 257.28z m113.92-170.24c7.68 7.68 7.68 19.2 0 26.88s-19.2 7.68-26.88 0L499.2 524.8c-3.84-3.84-5.12-7.68-5.12-12.8V355.84c0-10.24 8.96-19.2 19.2-19.2s19.2 8.96 19.2 19.2v148.48l93.44 94.72z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconShijian1.defaultProps = {
  size: 18,
};

IconShijian1 = React.memo ? React.memo(IconShijian1) : IconShijian1;

export default IconShijian1;

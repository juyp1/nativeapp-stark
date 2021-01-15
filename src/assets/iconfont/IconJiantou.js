/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconJiantou = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M332.8 276.48L567.04 512 332.8 747.52l58.88 58.88 294.4-294.4-294.4-294.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconJiantou.defaultProps = {
  size: 18,
};

IconJiantou = React.memo ? React.memo(IconJiantou) : IconJiantou;

export default IconJiantou;

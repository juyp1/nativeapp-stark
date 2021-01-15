/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconJiantouT = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M744.96 688.64L509.44 454.4 273.92 688.64l-58.88-58.88 294.4-294.4 294.4 294.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconJiantouT.defaultProps = {
  size: 18,
};

IconJiantouT = React.memo ? React.memo(IconJiantouT) : IconJiantouT;

export default IconJiantouT;

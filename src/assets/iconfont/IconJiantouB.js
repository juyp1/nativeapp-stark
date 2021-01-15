/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconJiantouB = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M744.96 335.36L509.44 569.6 273.92 335.36l-58.88 58.88 294.4 294.4 294.4-294.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconJiantouB.defaultProps = {
  size: 18,
};

IconJiantouB = React.memo ? React.memo(IconJiantouB) : IconJiantouB;

export default IconJiantouB;

/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconQueren = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M737.28 294.4l69.12 67.84-360.96 366.08L217.6 526.08l64-71.68 160 140.8z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconQueren.defaultProps = {
  size: 18,
};

IconQueren = React.memo ? React.memo(IconQueren) : IconQueren;

export default IconQueren;

/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconZuojiantou = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M256.05 512.904l322.21-322.646 45.119 45.204-322.21 322.646z"
        fill={getIconColor(color, 0, '#2c2c2c')}
      />
      <Path
        d="M301.189 467.719l316.599 317.035-45.12 45.203-316.599-317.035z"
        fill={getIconColor(color, 1, '#2c2c2c')}
      />
    </Svg>
  );
};

IconZuojiantou.defaultProps = {
  size: 18,
};

IconZuojiantou = React.memo ? React.memo(IconZuojiantou) : IconZuojiantou;

export default IconZuojiantou;

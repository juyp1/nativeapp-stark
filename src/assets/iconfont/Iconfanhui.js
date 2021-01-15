/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconFanhui = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M349.44 483.84H806.4v65.28H352l161.28 162.56-48.64 48.64L217.6 514.56 463.36 268.8l48.64 48.64-162.56 166.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconFanhui.defaultProps = {
  size: 18,
};

IconFanhui = React.memo ? React.memo(IconFanhui) : IconFanhui;

export default IconFanhui;

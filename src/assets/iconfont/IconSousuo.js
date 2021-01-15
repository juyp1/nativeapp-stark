/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconSousuo = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M650.24 633.6l136.96 135.68c8.96 8.96 8.96 21.76 0 30.72s-21.76 8.96-30.72 0L616.96 661.76c-39.68 28.16-89.6 44.8-142.08 44.8-134.4 1.28-244.48-108.8-244.48-244.48S340.48 217.6 474.88 217.6s244.48 110.08 244.48 244.48c1.28 66.56-25.6 128-69.12 171.52z m-175.36 30.72c111.36 0 200.96-90.88 200.96-200.96s-90.88-200.96-200.96-200.96-200.96 90.88-200.96 200.96 89.6 200.96 200.96 200.96z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconSousuo.defaultProps = {
  size: 18,
};

IconSousuo = React.memo ? React.memo(IconSousuo) : IconSousuo;

export default IconSousuo;

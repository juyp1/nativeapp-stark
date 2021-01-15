/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Icon1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1026 1024" width={size} height={size} {...rest}>
      <Path
        d="M513.024 0c-282.624 0-512 229.376-512 512s229.376 512 512 512 512-229.376 512-512S796.16 0 513.024 0zM667.648 499.2l0 338.432-308.736 0 0-338.432-126.976 0 140.8-156.16 140.8-156.16 140.8 156.16 140.8 156.16L667.648 499.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M636.416 432.128l-87.552 134.144 47.616 0 0 46.592-58.88 0 0 116.224-53.248 0 0-116.224-60.416 0 0-46.592 48.64 0-85.504-134.144 56.832 0 69.12 121.344 1.024 0 68.608-121.344L636.416 432.128z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Icon1.defaultProps = {
  size: 18,
};

Icon1 = React.memo ? React.memo(Icon1) : Icon1;

export default Icon1;

/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconGuanbi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 570.88L276.48 806.4 217.6 747.52 451.84 512 217.6 276.48l58.88-58.88L512 453.12 747.52 217.6l58.88 58.88L572.16 512 806.4 747.52 747.52 806.4 512 570.88z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconGuanbi.defaultProps = {
  size: 18,
};

IconGuanbi = React.memo ? React.memo(IconGuanbi) : IconGuanbi;

export default IconGuanbi;

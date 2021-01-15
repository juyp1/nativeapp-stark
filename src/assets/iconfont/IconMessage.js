/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconMessage = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M64 213.333333v682.666667h896V213.333333h-896z m820.053333 42.666667L512 569.6 139.946667 256h744.106666zM106.666667 853.333333V283.733333l405.333333 341.333334 405.333333-341.333334V853.333333h-810.666666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconMessage.defaultProps = {
  size: 18,
};

IconMessage = React.memo ? React.memo(IconMessage) : IconMessage;

export default IconMessage;

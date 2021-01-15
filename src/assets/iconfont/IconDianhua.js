/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconDianhua = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M509.44 604.16c-32-26.88-70.4-62.72-102.4-102.4-23.04-28.16-43.52-57.6-21.76-79.36L238.08 275.2c-21.76 26.88-69.12 153.6 134.4 360.96 213.76 218.88 352 171.52 375.04 147.2L605.44 641.28c-20.48 20.48-46.08 2.56-96-37.12z m290.56 97.28l-111.36-111.36c-8.96-8.96-23.04-8.96-32 0l-40.96 40.96 143.36 143.36 40.96-40.96c8.96-8.96 7.68-23.04 0-32zM436.48 371.2c8.96-8.96 8.96-23.04 0-32l-115.2-113.92c-8.96-8.96-23.04-8.96-32 0l-40.96 40.96 147.2 145.92c0-1.28 40.96-40.96 40.96-40.96z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconDianhua.defaultProps = {
  size: 18,
};

IconDianhua = React.memo ? React.memo(IconDianhua) : IconDianhua;

export default IconDianhua;

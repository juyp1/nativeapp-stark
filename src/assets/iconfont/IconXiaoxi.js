/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconXiaoxi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M509.44 730.88c23.04 0 47.36-2.56 70.4-7.68L678.4 780.8l-1.28-94.72c74.24-39.68 121.6-115.2 124.16-199.68 0-134.4-130.56-243.2-291.84-243.2S217.6 352 217.6 486.4s130.56 244.48 291.84 244.48z m0-284.16c21.76 0 39.68 19.2 39.68 40.96 0 21.76-19.2 39.68-40.96 39.68-21.76 0-39.68-17.92-39.68-40.96-1.28-21.76 17.92-40.96 40.96-39.68z m166.4 0c21.76 0 39.68 19.2 39.68 40.96 0 21.76-19.2 39.68-40.96 39.68s-39.68-17.92-39.68-40.96c-1.28-21.76 17.92-40.96 40.96-39.68z m-332.8 0c21.76 0 39.68 19.2 39.68 40.96 0 21.76-19.2 39.68-40.96 39.68s-40.96-17.92-40.96-40.96c0-21.76 19.2-40.96 42.24-39.68z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconXiaoxi.defaultProps = {
  size: 18,
};

IconXiaoxi = React.memo ? React.memo(IconXiaoxi) : IconXiaoxi;

export default IconXiaoxi;

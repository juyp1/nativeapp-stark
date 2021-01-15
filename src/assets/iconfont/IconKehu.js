/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconKehu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M377.6 683.52C284.16 651.52 217.6 561.92 217.6 456.96 217.6 325.12 325.12 217.6 456.96 217.6s239.36 107.52 239.36 239.36c0 104.96-66.56 193.28-160 226.56 26.88 23.04 40.96 58.88 40.96 98.56 0 11.52-8.96 20.48-20.48 20.48-11.52 0-20.48-8.96-20.48-20.48 0-48.64-29.44-84.48-80.64-84.48s-79.36 35.84-79.36 84.48c0 11.52-8.96 20.48-20.48 20.48-11.52 0-20.48-8.96-20.48-20.48 1.28-39.68 16.64-75.52 42.24-98.56z m79.36-26.88c110.08 0 198.4-89.6 198.4-198.4s-89.6-198.4-198.4-198.4-198.4 89.6-198.4 198.4 89.6 198.4 198.4 198.4z m-64-58.88c-10.24-5.12-12.8-17.92-7.68-28.16 5.12-10.24 17.92-12.8 28.16-7.68 12.8 7.68 28.16 11.52 43.52 11.52 15.36 0 30.72-3.84 44.8-11.52 10.24-5.12 23.04-2.56 28.16 7.68 5.12 10.24 2.56 23.04-7.68 28.16-19.2 11.52-42.24 17.92-65.28 17.92-21.76 0-44.8-6.4-64-17.92z m286.72 204.8c-11.52 0-20.48-8.96-20.48-20.48 0-11.52 8.96-20.48 20.48-20.48h106.24c11.52 0 20.48 8.96 20.48 20.48 0 11.52-8.96 20.48-20.48 20.48h-106.24z m0-81.92c-11.52 0-20.48-8.96-20.48-20.48s8.96-20.48 20.48-20.48h106.24c11.52 0 20.48 8.96 20.48 20.48s-8.96 20.48-20.48 20.48h-106.24z m52.48-83.2c-11.52 0-20.48-8.96-20.48-20.48 0-11.52 8.96-20.48 20.48-20.48h52.48c11.52 0 20.48 8.96 20.48 20.48 0 11.52-8.96 20.48-20.48 20.48h-52.48z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconKehu.defaultProps = {
  size: 18,
};

IconKehu = React.memo ? React.memo(IconKehu) : IconKehu;

export default IconKehu;

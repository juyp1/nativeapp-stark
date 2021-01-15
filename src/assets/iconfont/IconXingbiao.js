/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconXingbiao = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M806.4 448c0 6.4-5.12 12.8-8.96 16.64l-128 125.44 30.72 176.64v7.68c0 8.96-3.84 17.92-14.08 17.92-5.12 0-10.24-1.28-14.08-3.84L512 704l-158.72 83.2c-5.12 2.56-8.96 3.84-14.08 3.84-10.24 0-15.36-8.96-15.36-17.92 0-2.56 0-5.12 1.28-7.68L355.84 588.8l-129.28-125.44c-3.84-2.56-8.96-8.96-8.96-15.36 0-10.24 11.52-15.36 19.2-16.64l177.92-25.6 79.36-161.28c2.56-6.4 8.96-14.08 17.92-14.08s14.08 7.68 17.92 14.08l79.36 161.28 177.92 25.6c7.68 1.28 19.2 6.4 19.2 16.64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconXingbiao.defaultProps = {
  size: 18,
};

IconXingbiao = React.memo ? React.memo(IconXingbiao) : IconXingbiao;

export default IconXingbiao;

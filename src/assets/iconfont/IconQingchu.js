/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconQingchu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M588.8 285.44L221.44 652.8c-5.12 5.12-5.12 11.52 0 16.64l71.68 71.68c5.12 5.12 12.8 7.68 19.2 7.68h229.12c6.4 0 15.36-3.84 19.2-7.68L802.56 499.2c5.12-5.12 5.12-11.52 0-16.64L605.44 285.44c-5.12-5.12-11.52-5.12-16.64 0z m-49.92 412.16c-5.12 5.12-12.8 7.68-19.2 7.68H341.76c-6.4 0-15.36-3.84-19.2-7.68l-33.28-33.28c-5.12-5.12-5.12-11.52 0-16.64L422.4 512c5.12-5.12 11.52-5.12 16.64 0l134.4 134.4c5.12 5.12 5.12 11.52 0 16.64l-34.56 34.56z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconQingchu.defaultProps = {
  size: 18,
};

IconQingchu = React.memo ? React.memo(IconQingchu) : IconQingchu;

export default IconQingchu;

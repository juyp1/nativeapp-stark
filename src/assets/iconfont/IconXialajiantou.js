/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconXialajiantou = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M222.72 378.88c-3.84-3.84-5.12-8.96-5.12-16.64 0-8.96 2.56-15.36 8.96-21.76 6.4-5.12 14.08-7.68 21.76-7.68h526.08c8.96 0 15.36 2.56 21.76 7.68 6.4 5.12 8.96 12.8 8.96 21.76 0 6.4-1.28 11.52-5.12 15.36l-3.84 5.12-249.6 286.72c-11.52 11.52-23.04 16.64-34.56 16.64s-24.32-5.12-34.56-16.64L226.56 382.72l-3.84-3.84z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconXialajiantou.defaultProps = {
  size: 18,
};

IconXialajiantou = React.memo ? React.memo(IconXialajiantou) : IconXialajiantou;

export default IconXialajiantou;

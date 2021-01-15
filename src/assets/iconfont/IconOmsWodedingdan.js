/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconOmsWodedingdan = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M557.056 102.4l256 256v512c0 14.336-4.096 26.624-14.336 36.864s-20.48 14.336-36.864 14.336H276.48c-14.336 0-26.624-4.096-36.864-14.336s-14.336-22.528-14.336-36.864v-716.8c0-14.336 4.096-26.624 14.336-36.864s22.528-14.336 36.864-14.336h280.576z m204.8 278.528l-225.28-227.328H532.48v229.376h229.376v-2.048zM276.48 870.4h487.424V434.176H481.28V153.6h-204.8v716.8z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconOmsWodedingdan.defaultProps = {
  size: 18,
};

IconOmsWodedingdan = React.memo ? React.memo(IconOmsWodedingdan) : IconOmsWodedingdan;

export default IconOmsWodedingdan;

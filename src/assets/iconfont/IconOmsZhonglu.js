/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconOmsZhonglu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M716.8 102.4l204.8 204.8v460.8c0 14.336-4.096 26.624-14.336 36.864s-22.528 14.336-36.864 14.336h-180.224v-51.2h180.224v-409.6h-204.8v-204.8H385.024c0-14.336 4.096-26.624 14.336-36.864s20.48-14.336 34.816-14.336H716.8z m0 204.8h131.072L716.8 174.08V307.2zM153.6 204.8h282.624l204.8 204.8v460.8c0 14.336-4.096 26.624-14.336 36.864s-22.528 14.336-36.864 14.336H153.6c-14.336 0-26.624-4.096-36.864-14.336S102.4 884.736 102.4 870.4v-614.4c0-14.336 4.096-26.624 14.336-36.864s22.528-14.336 36.864-14.336z m436.224 665.6v-409.6h-204.8v-204.8H153.6v614.4h436.224zM434.176 409.6h131.072l-131.072-133.12V409.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconOmsZhonglu.defaultProps = {
  size: 18,
};

IconOmsZhonglu = React.memo ? React.memo(IconOmsZhonglu) : IconOmsZhonglu;

export default IconOmsZhonglu;

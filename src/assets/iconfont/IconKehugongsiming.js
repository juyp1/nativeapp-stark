/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconKehugongsiming = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M727.04 768V284.16l-76.8-66.56-254.72 96v24.32l230.4-78.08v544H780.8V768h-53.76zM312.32 618.24l120.32-24.32v-60.16l-120.32 30.72v53.76z m0 185.6h120.32v-65.28l-120.32 8.96v56.32z m0-93.44l120.32-11.52v-60.16l-120.32 20.48v51.2z m0-185.6l120.32-33.28v-62.72l-120.32 39.68V524.8z m256-157.44l-66.56-42.24L243.2 418.56V806.4h33.28V436.48l192-62.72v430.08h98.56V367.36z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconKehugongsiming.defaultProps = {
  size: 18,
};

IconKehugongsiming = React.memo ? React.memo(IconKehugongsiming) : IconKehugongsiming;

export default IconKehugongsiming;

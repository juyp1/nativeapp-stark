/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconOmsYidu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 102.4L102.4 331.776V819.2c0 55.296 45.056 102.4 102.4 102.4h614.4c55.296 0 102.4-45.056 102.4-102.4V331.776L512 102.4zM153.6 819.2V417.792l231.424 186.368L155.648 835.584c0-6.144-2.048-12.288-2.048-16.384z m38.912 49.152l235.52-235.52 83.968 57.344 83.968-57.344 235.52 235.52c-4.096 2.048-634.88 2.048-638.976 0zM870.4 819.2c0 4.096-2.048 10.24-2.048 16.384L638.976 604.16l231.424-186.368V819.2zM512 630.784L153.6 358.4 512 161.792l358.4 196.608L512 630.784z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconOmsYidu.defaultProps = {
  size: 18,
};

IconOmsYidu = React.memo ? React.memo(IconOmsYidu) : IconOmsYidu;

export default IconOmsYidu;

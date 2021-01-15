/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconGengduo = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M332.8 559.36c-12.8 12.8-28.16 19.2-47.36 19.2s-34.56-6.4-48.64-19.2c-12.8-12.8-19.2-28.16-19.2-46.08s6.4-33.28 19.2-46.08 29.44-19.2 48.64-19.2 34.56 6.4 48.64 19.2c12.8 12.8 19.2 28.16 19.2 46.08s-7.68 33.28-20.48 46.08z m226.56 0c-12.8 12.8-28.16 19.2-47.36 19.2s-34.56-6.4-48.64-19.2c-12.8-12.8-19.2-28.16-19.2-46.08s6.4-33.28 19.2-46.08S492.8 448 512 448s34.56 6.4 48.64 19.2c12.8 12.8 19.2 28.16 19.2 46.08s-6.4 33.28-20.48 46.08z m226.56 0c-12.8 12.8-28.16 19.2-47.36 19.2s-34.56-6.4-47.36-19.2-19.2-28.16-19.2-46.08 6.4-33.28 19.2-46.08 29.44-19.2 48.64-19.2 34.56 6.4 48.64 19.2c12.8 12.8 19.2 28.16 19.2 46.08s-7.68 33.28-21.76 46.08z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconGengduo.defaultProps = {
  size: 18,
};

IconGengduo = React.memo ? React.memo(IconGengduo) : IconGengduo;

export default IconGengduo;

/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconKanshipin = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M618.24 482.56L431.36 588.8V375.04l186.88 107.52z m134.4 161.28V322.56H271.36v321.28h481.28z m0-375.04c14.08 0 26.88 5.12 38.4 15.36 10.24 10.24 16.64 23.04 16.64 38.4L806.4 643.84c0 14.08-5.12 26.88-15.36 37.12-10.24 10.24-23.04 15.36-37.12 15.36H618.24v53.76H405.76v-53.76H271.36c-15.36 0-28.16-5.12-38.4-15.36-10.24-10.24-15.36-23.04-15.36-37.12V322.56c0-15.36 5.12-28.16 15.36-38.4 10.24-10.24 23.04-15.36 38.4-15.36h481.28z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconKanshipin.defaultProps = {
  size: 18,
};

IconKanshipin = React.memo ? React.memo(IconKanshipin) : IconKanshipin;

export default IconKanshipin;

/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconziyuanldpi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M896 1024a64 64 0 0 1-64-64V448a64 64 0 0 1 128 0v512a64 64 0 0 1-64 64z m-256 0a64 64 0 0 1-64-64V64a64 64 0 0 1 128 0v896a64 64 0 0 1-64 64z m-256 0a64 64 0 0 1-64-64v-256a64 64 0 0 1 128 0v256a64 64 0 0 1-64 64z m-256 0a64 64 0 0 1-64-64V320a64 64 0 0 1 128 0v640a64 64 0 0 1-64 64z"
        fill={getIconColor(color, 0, '#383B48')}
      />
    </Svg>
  );
};

Iconziyuanldpi.defaultProps = {
  size: 18,
};

Iconziyuanldpi = React.memo ? React.memo(Iconziyuanldpi) : Iconziyuanldpi;

export default Iconziyuanldpi;

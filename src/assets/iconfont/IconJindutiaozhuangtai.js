/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconJindutiaozhuangtai = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 806.4c162.56 0 294.4-131.84 294.4-294.4S674.56 217.6 512 217.6 217.6 349.44 217.6 512s131.84 294.4 294.4 294.4z m103.68-398.08c3.84 3.84 5.12 7.68 5.12 12.8s-1.28 8.96-5.12 12.8L537.6 512l78.08 78.08c3.84 3.84 5.12 7.68 5.12 12.8s-1.28 8.96-5.12 12.8-7.68 5.12-12.8 5.12-8.96-1.28-12.8-5.12L512 537.6l-78.08 78.08c-3.84 3.84-7.68 5.12-12.8 5.12s-8.96-1.28-12.8-5.12c-3.84-3.84-5.12-7.68-5.12-12.8s1.28-8.96 5.12-12.8L486.4 512l-78.08-78.08c-3.84-3.84-5.12-7.68-5.12-12.8s1.28-8.96 5.12-12.8c3.84-3.84 7.68-5.12 12.8-5.12s8.96 1.28 12.8 5.12L512 486.4l78.08-78.08c3.84-3.84 7.68-5.12 12.8-5.12s10.24 1.28 12.8 5.12z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconJindutiaozhuangtai.defaultProps = {
  size: 18,
};

IconJindutiaozhuangtai = React.memo ? React.memo(IconJindutiaozhuangtai) : IconJindutiaozhuangtai;

export default IconJindutiaozhuangtai;

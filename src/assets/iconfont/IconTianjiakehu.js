/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconTianjiakehu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M217.6 570.88v-117.76h235.52V217.6h117.76v235.52H806.4v117.76H570.88V806.4h-117.76V570.88z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconTianjiakehu.defaultProps = {
  size: 18,
};

IconTianjiakehu = React.memo ? React.memo(IconTianjiakehu) : IconTianjiakehu;

export default IconTianjiakehu;

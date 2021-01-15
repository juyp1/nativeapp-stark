/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconCaozuo = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M217.6 327.68V217.6h122.88v110.08H217.6z m232.96 0V217.6H806.4v110.08H450.56zM217.6 560.64v-110.08h122.88v110.08H217.6z m232.96 0v-110.08H806.4v110.08H450.56zM217.6 793.6v-110.08h122.88V793.6H217.6z m232.96 0v-110.08H806.4V793.6H450.56z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconCaozuo.defaultProps = {
  size: 18,
};

IconCaozuo = React.memo ? React.memo(IconCaozuo) : IconCaozuo;

export default IconCaozuo;

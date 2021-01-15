/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconShaixuan = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M723.2 592.64c0 7.68-2.56 14.08-7.68 19.2L527.36 798.72c-5.12 5.12-11.52 7.68-19.2 7.68s-14.08-2.56-19.2-7.68L302.08 610.56c-5.12-5.12-7.68-11.52-7.68-19.2 0-14.08 11.52-26.88 26.88-26.88h375.04c14.08 1.28 26.88 12.8 26.88 28.16z m0-161.28c0 14.08-11.52 26.88-26.88 26.88H321.28c-14.08 0-26.88-11.52-26.88-26.88 0-7.68 2.56-14.08 7.68-19.2l186.88-186.88c5.12-5.12 11.52-7.68 19.2-7.68s14.08 2.56 19.2 7.68l186.88 186.88c5.12 5.12 8.96 12.8 8.96 19.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconShaixuan.defaultProps = {
  size: 18,
};

IconShaixuan = React.memo ? React.memo(IconShaixuan) : IconShaixuan;

export default IconShaixuan;

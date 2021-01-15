/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconShuidian = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M416 518.4l80.64-17.92v303.36l-80.64-15.36V518.4zM350.72 768l53.76 16.64V495.36l92.16-23.04v-90.88l-92.16 21.76v-67.84l92.16-23.04v-90.88l-236.8 65.28v92.16l90.88-21.76v67.84l-90.88 21.76v93.44l90.88-21.76V768z m-90.88-202.24l79.36-17.92v215.04l-79.36-14.08V565.76z m263.68 239.36V531.2l83.2 17.92v238.08l-83.2 17.92z m162.56-226.56v126.72l-15.36 3.84V549.12l90.88 21.76V400.64l-238.08-62.72v170.24l97.28 23.04v253.44l140.8-34.56V593.92l-75.52-15.36z m-69.12-157.44l58.88 21.76v46.08l-58.88-21.76v-46.08z m144.64-138.24v92.16l-97.28-23.04v-93.44l97.28 24.32z m-238.08 29.44v-93.44l107.52 26.88v92.16l-107.52-25.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconShuidian.defaultProps = {
  size: 18,
};

IconShuidian = React.memo ? React.memo(IconShuidian) : IconShuidian;

export default IconShuidian;

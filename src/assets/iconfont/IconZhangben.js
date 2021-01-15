/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconZhangben = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M528.64 476.16l25.6-43.52c5.12-7.68 2.56-17.92-5.12-24.32 0 0-1.28 0-1.28-1.28-6.4-3.84-15.36-2.56-19.2 5.12l-43.52 70.4-43.52-70.4c-3.84-6.4-12.8-8.96-19.2-5.12 0 0-1.28 0-1.28 1.28-7.68 5.12-8.96 15.36-5.12 24.32l25.6 43.52h-28.16c-10.24 0-17.92 7.68-17.92 17.92s7.68 17.92 17.92 17.92H462.08l3.84 5.12 1.28 1.28v28.16h-52.48c-10.24 0-17.92 7.68-17.92 17.92s7.68 17.92 17.92 17.92h52.48v17.92c0 10.24 7.68 17.92 17.92 17.92s17.92-7.68 17.92-17.92v-17.92h52.48c10.24 0 17.92-7.68 17.92-17.92s-7.68-17.92-17.92-17.92h-52.48v-25.6c1.28-1.28 2.56-2.56 2.56-3.84l3.84-5.12h47.36c10.24 0 17.92-7.68 17.92-17.92s-7.68-17.92-17.92-17.92h-28.16zM678.4 217.6v588.8H341.76c-28.16 0-51.2-23.04-51.2-51.2v-66.56h-29.44c-10.24 0-17.92-7.68-17.92-17.92 0-10.24 7.68-17.92 17.92-17.92h29.44v-70.4h-29.44c-10.24 0-17.92-7.68-17.92-17.92s7.68-17.92 17.92-17.92h29.44v-70.4h-29.44c-10.24 0-17.92-7.68-17.92-17.92s7.68-17.92 17.92-17.92h29.44V371.2h-29.44c-10.24 0-17.92-7.68-17.92-17.92s7.68-17.92 17.92-17.92h29.44V268.8c0-28.16 23.04-51.2 51.2-51.2H678.4z m35.84 0c39.68 2.56 70.4 35.84 70.4 76.8v435.2c0 40.96-30.72 72.96-70.4 76.8V217.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconZhangben.defaultProps = {
  size: 18,
};

IconZhangben = React.memo ? React.memo(IconZhangben) : IconZhangben;

export default IconZhangben;

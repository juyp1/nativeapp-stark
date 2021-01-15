/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconTiaobozhongxin = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M294.4 288h439.04c28.16 0 51.2 23.04 51.2 51.2V755.2c0 28.16-23.04 51.2-51.2 51.2H294.4c-28.16 0-51.2-23.04-51.2-51.2V339.2c0-28.16 23.04-51.2 51.2-51.2z m272.64 153.6l40.96 40.96H378.88c-10.24 0-17.92 7.68-17.92 17.92s7.68 17.92 17.92 17.92h271.36c15.36 0 23.04-19.2 12.8-30.72l-70.4-70.4c-6.4-6.4-17.92-6.4-25.6 0-7.68 6.4-7.68 17.92 0 24.32zM462.08 652.8l-40.96-40.96h227.84c10.24 0 17.92-7.68 17.92-17.92s-7.68-17.92-17.92-17.92H378.88c-15.36 0-23.04 19.2-12.8 30.72l70.4 70.4c6.4 6.4 17.92 6.4 25.6 0 6.4-6.4 6.4-17.92 0-24.32zM331.52 217.6h364.8c10.24 0 17.92 7.68 17.92 17.92 0 10.24-7.68 17.92-17.92 17.92H331.52c-10.24 0-17.92-7.68-17.92-17.92 0-10.24 7.68-17.92 17.92-17.92z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconTiaobozhongxin.defaultProps = {
  size: 18,
};

IconTiaobozhongxin = React.memo ? React.memo(IconTiaobozhongxin) : IconTiaobozhongxin;

export default IconTiaobozhongxin;

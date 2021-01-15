/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconBianjiB = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M780.8 785.92c0 11.52-7.68 20.48-16.64 20.48H248.32c-10.24 0-17.92-8.96-17.92-20.48 0-11.52 7.68-20.48 16.64-20.48h514.56c11.52 1.28 19.2 10.24 19.2 20.48z m-65.28-421.12c-7.68 7.68-20.48 7.68-28.16 0l-83.2-84.48c-7.68-7.68-7.68-20.48 0-28.16l28.16-28.16c7.68-7.68 20.48-7.68 28.16 0l83.2 84.48c7.68 7.68 7.68 20.48 0 28.16l-28.16 28.16zM410.88 673.28c-7.68 7.68-20.48 7.68-28.16 0L299.52 588.8c-7.68-7.68-7.68-20.48 0-28.16l249.6-252.16c7.68-7.68 20.48-7.68 28.16 0l83.2 84.48c7.68 7.68 7.68 20.48 0 28.16L410.88 673.28z m-138.24-56.32l83.2 84.48c7.68 7.68 5.12 15.36-5.12 17.92l-99.84 20.48c-10.24 2.56-17.92-5.12-15.36-15.36l20.48-101.12c0-11.52 8.96-14.08 16.64-6.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconBianjiB.defaultProps = {
  size: 18,
};

IconBianjiB = React.memo ? React.memo(IconBianjiB) : IconBianjiB;

export default IconBianjiB;

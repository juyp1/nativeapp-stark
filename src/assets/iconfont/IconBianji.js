/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconBianji = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M783.36 759.04c6.4 0 11.52 2.56 16.64 6.4 5.12 5.12 6.4 10.24 6.4 16.64s-2.56 11.52-6.4 16.64-10.24 7.68-16.64 7.68H240.64c-6.4 0-11.52-2.56-16.64-6.4s-6.4-10.24-6.4-16.64 2.56-11.52 6.4-16.64c5.12-5.12 10.24-6.4 16.64-6.4h542.72z m-413.44-78.08c-8.96 3.84-16.64 2.56-23.04-5.12-6.4-6.4-7.68-14.08-5.12-23.04l66.56-153.6c1.28-2.56 2.56-5.12 5.12-7.68L674.56 230.4c8.96-8.96 20.48-14.08 33.28-14.08s24.32 5.12 33.28 14.08l52.48 52.48c8.96 8.96 14.08 20.48 14.08 33.28s-5.12 24.32-14.08 33.28L531.2 611.84c-2.56 1.28-3.84 2.56-6.4 3.84l-154.88 65.28z m336.64-416L665.6 305.92l52.48 52.48 40.96-40.96-52.48-52.48zM449.28 522.24l-38.4 89.6 89.6-38.4 183.04-183.04-52.48-52.48-181.76 184.32z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconBianji.defaultProps = {
  size: 18,
};

IconBianji = React.memo ? React.memo(IconBianji) : IconBianji;

export default IconBianji;

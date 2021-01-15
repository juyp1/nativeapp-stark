/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconPcZhifubao = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M806.4 620.8V217.6H217.6v588.8h588.8v-94.72c-107.52-44.8-184.32-78.08-230.4-99.84-51.2 62.72-104.96 99.84-186.88 99.84s-135.68-49.92-129.28-111.36c3.84-39.68 32-106.24 152.32-94.72 62.72 6.4 92.16 17.92 143.36 34.56 12.8-24.32 24.32-51.2 33.28-80.64H359.68v-23.04H473.6V396.8H335.36v-24.32H473.6v-58.88s1.28-8.96 11.52-8.96h56.32v67.84h147.2V396.8H541.44v40.96h120.32c-11.52 44.8-28.16 85.76-48.64 121.6 23.04 8.96 87.04 29.44 193.28 61.44z m-426.24 52.48c-85.76 0-99.84-53.76-94.72-76.8 5.12-23.04 29.44-52.48 76.8-52.48 55.04 0 103.68 14.08 163.84 42.24-40.96 55.04-92.16 87.04-145.92 87.04z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconPcZhifubao.defaultProps = {
  size: 18,
};

IconPcZhifubao = React.memo ? React.memo(IconPcZhifubao) : IconPcZhifubao;

export default IconPcZhifubao;

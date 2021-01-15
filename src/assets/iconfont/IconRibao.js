/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconRibao = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M294.4 217.6h439.04c28.16 0 51.2 23.04 51.2 51.2v486.4c0 28.16-23.04 51.2-51.2 51.2H294.4c-28.16 0-51.2-23.04-51.2-51.2V268.8c0-28.16 23.04-51.2 51.2-51.2z m154.88 330.24H499.2c21.76 0 38.4-5.12 49.92-16.64 11.52-11.52 16.64-28.16 16.64-52.48v-117.76c0-20.48-5.12-37.12-16.64-48.64-10.24-11.52-26.88-16.64-47.36-16.64H448v252.16z m37.12-217.6h16.64c10.24 0 17.92 2.56 21.76 7.68s6.4 12.8 6.4 23.04v121.6c0 10.24-2.56 19.2-6.4 24.32-3.84 5.12-11.52 7.68-21.76 7.68H486.4V330.24z m-107.52 288c-10.24 0-17.92 7.68-17.92 17.92s7.68 17.92 17.92 17.92h271.36c10.24 0 17.92-7.68 17.92-17.92s-7.68-17.92-17.92-17.92H378.88z m0 81.92c-10.24 0-17.92 7.68-17.92 17.92 0 10.24 7.68 17.92 17.92 17.92h271.36c10.24 0 17.92-7.68 17.92-17.92 0-10.24-7.68-17.92-17.92-17.92H378.88z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconRibao.defaultProps = {
  size: 18,
};

IconRibao = React.memo ? React.memo(IconRibao) : IconRibao;

export default IconRibao;

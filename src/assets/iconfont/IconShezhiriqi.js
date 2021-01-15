/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconShezhiriqi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M608 673.28l-15.36 15.36c-3.84 3.84-10.24 3.84-15.36 0l-61.44-62.72-61.44 62.72c-3.84 3.84-10.24 3.84-15.36 0l-15.36-15.36c-3.84-3.84-3.84-10.24 0-15.36l62.72-61.44-62.72-61.44c-3.84-3.84-3.84-10.24 0-15.36l15.36-15.36c3.84-3.84 10.24-3.84 15.36 0l61.44 61.44 61.44-61.44c3.84-3.84 10.24-3.84 15.36 0l15.36 15.36c3.84 3.84 3.84 10.24 0 15.36l-61.44 61.44 61.44 61.44c3.84 3.84 3.84 10.24 0 15.36z m-322.56 90.88h462.08V427.52H285.44v336.64z m125.44-399.36v-94.72c0-6.4-5.12-10.24-10.24-10.24h-20.48c-6.4 0-10.24 5.12-10.24 10.24v94.72c0 6.4 5.12 10.24 10.24 10.24h20.48c6.4 0 10.24-3.84 10.24-10.24z m253.44 0v-94.72c0-6.4-5.12-10.24-10.24-10.24h-20.48c-6.4 0-10.24 5.12-10.24 10.24v94.72c0 6.4 5.12 10.24 10.24 10.24H652.8c6.4 0 11.52-3.84 11.52-10.24z m125.44-20.48v421.12c0 23.04-19.2 42.24-42.24 42.24H285.44c-23.04 0-42.24-19.2-42.24-42.24V344.32c0-23.04 19.2-42.24 42.24-42.24h42.24v-32c0-29.44 23.04-52.48 52.48-52.48h20.48c29.44 0 52.48 23.04 52.48 52.48v32h126.72v-32c0-29.44 23.04-52.48 52.48-52.48H652.8c29.44 0 52.48 23.04 52.48 52.48v32h42.24c23.04 0 42.24 19.2 42.24 42.24z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconShezhiriqi.defaultProps = {
  size: 18,
};

IconShezhiriqi = React.memo ? React.memo(IconShezhiriqi) : IconShezhiriqi;

export default IconShezhiriqi;

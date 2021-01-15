/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconPaytype = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M751.232 771.136H272.768a79.712 79.712 0 0 1-79.712-79.712V332.576a79.712 79.712 0 0 1 79.712-79.712h478.464a79.712 79.712 0 0 1 79.712 79.712v358.88a79.616 79.616 0 0 1-79.712 79.68M272.768 731.328h478.464c22.016 0 39.904-17.856 39.904-39.904v-279.072H232.96v279.072c0 22.048 17.856 39.904 39.808 39.904M751.232 292.768H272.768c-22.016 0-39.904 17.856-39.904 39.904v39.904H791.04v-39.968a39.68 39.68 0 0 0-39.808-39.84M292.768 531.936h199.296a19.936 19.936 0 0 1 0 39.808H292.768a19.84 19.84 0 0 1-19.904-19.904 19.84 19.84 0 0 1 19.904-19.904m0 79.712h159.488a19.936 19.936 0 0 1 0 39.808H292.768a19.84 19.84 0 0 1-19.904-19.904 19.808 19.808 0 0 1 19.904-19.904m279.072-79.712h39.904a19.936 19.936 0 0 1 0 39.808H571.84a19.904 19.904 0 0 1 0-39.808m0 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconPaytype.defaultProps = {
  size: 18,
};

IconPaytype = React.memo ? React.memo(IconPaytype) : IconPaytype;

export default IconPaytype;

/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconDatu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M298.24 271.36c-15.36 0-26.88 11.52-26.88 26.88v107.52c0 15.36 11.52 26.88 26.88 26.88h107.52c15.36 0 26.88-11.52 26.88-26.88v-107.52c0-15.36-11.52-26.88-26.88-26.88h-107.52z m0-53.76h107.52c44.8 0 80.64 35.84 80.64 80.64v107.52c0 44.8-35.84 80.64-80.64 80.64h-107.52c-44.8 0-80.64-35.84-80.64-80.64v-107.52c0-44.8 35.84-80.64 80.64-80.64z m321.28 53.76c-15.36 0-26.88 11.52-26.88 26.88v107.52c0 15.36 11.52 26.88 26.88 26.88h107.52c15.36 0 26.88-11.52 26.88-26.88v-107.52c0-15.36-11.52-26.88-26.88-26.88h-107.52z m0-53.76h107.52c44.8 0 80.64 35.84 80.64 80.64v107.52c0 44.8-35.84 80.64-80.64 80.64h-107.52c-44.8 0-80.64-35.84-80.64-80.64v-107.52c0-44.8 35.84-80.64 80.64-80.64zM298.24 592.64c-15.36 0-26.88 11.52-26.88 26.88v107.52c0 15.36 11.52 26.88 26.88 26.88h107.52c15.36 0 26.88-11.52 26.88-26.88v-107.52c0-15.36-11.52-26.88-26.88-26.88h-107.52z m0-53.76h107.52c44.8 0 80.64 35.84 80.64 80.64v107.52c0 44.8-35.84 80.64-80.64 80.64h-107.52c-44.8 0-80.64-35.84-80.64-80.64v-107.52c0-44.8 35.84-80.64 80.64-80.64z m321.28 53.76c-15.36 0-26.88 11.52-26.88 26.88v107.52c0 15.36 11.52 26.88 26.88 26.88h107.52c15.36 0 26.88-11.52 26.88-26.88v-107.52c0-15.36-11.52-26.88-26.88-26.88h-107.52z m0-53.76h107.52c44.8 0 80.64 35.84 80.64 80.64v107.52c0 44.8-35.84 80.64-80.64 80.64h-107.52c-44.8 0-80.64-35.84-80.64-80.64v-107.52c0-44.8 35.84-80.64 80.64-80.64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconDatu.defaultProps = {
  size: 18,
};

IconDatu = React.memo ? React.memo(IconDatu) : IconDatu;

export default IconDatu;

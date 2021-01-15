/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconOmsQingchuhuancun = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M825.344 229.376c6.144 0 12.288 2.048 18.432 8.192s8.192 10.24 8.192 18.432c0 6.144-2.048 12.288-8.192 18.432-4.096 4.096-10.24 8.192-18.432 8.192h-34.816l-59.392 589.824c-2.048 14.336-6.144 24.576-16.384 34.816s-24.576 14.336-38.912 14.336H358.4c-14.336 0-26.624-4.096-36.864-14.336s-16.384-20.48-18.432-34.816L245.76 280.576h-34.816c-6.144 0-12.288-2.048-18.432-8.192-6.144-4.096-8.192-10.24-8.192-16.384 0-6.144 2.048-12.288 8.192-18.432 4.096-4.096 10.24-8.192 18.432-8.192H389.12V159.744c0-16.384 6.144-30.72 18.432-40.96 12.288-10.24 24.576-16.384 40.96-16.384h137.216c16.384 0 30.72 6.144 40.96 16.384 12.288 10.24 18.432 24.576 18.432 40.96v69.632h180.224zM440.32 159.744v69.632H593.92V159.744c0-2.048 0-4.096-2.048-6.144-2.048-2.048-4.096-2.048-6.144-2.048h-137.216c-2.048 0-4.096 0-6.144 2.048 0 4.096-2.048 4.096-2.048 6.144z m239.616 706.56L737.28 280.576H296.96l57.344 585.728s0 2.048 2.048 2.048l2.048 2.048h319.488c2.048-2.048 2.048-2.048 2.048-4.096z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconOmsQingchuhuancun.defaultProps = {
  size: 18,
};

IconOmsQingchuhuancun = React.memo ? React.memo(IconOmsQingchuhuancun) : IconOmsQingchuhuancun;

export default IconOmsQingchuhuancun;

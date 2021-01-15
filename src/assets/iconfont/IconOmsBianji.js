/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconOmsBianji = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M888.832 856.064c8.192 0 16.384 4.096 22.528 10.24 6.144 6.144 10.24 14.336 10.24 22.528s-4.096 16.384-10.24 22.528-14.336 10.24-22.528 10.24H135.168c-8.192 0-16.384-4.096-22.528-10.24s-10.24-14.336-10.24-22.528 4.096-16.384 10.24-22.528c6.144-6.144 14.336-10.24 22.528-10.24h753.664z m-573.44-108.544c-12.288 4.096-22.528 2.048-32.768-6.144-8.192-8.192-12.288-20.48-6.144-32.768L368.64 493.568c2.048-4.096 4.096-6.144 6.144-10.24L737.28 120.832c12.288-12.288 28.672-18.432 47.104-18.432 18.432 0 34.816 6.144 47.104 18.432l71.68 71.68c12.288 12.288 18.432 28.672 18.432 47.104 0 18.432-6.144 34.816-18.432 47.104L538.624 651.264c-2.048 2.048-6.144 4.096-8.192 6.144l-215.04 90.112zM784.384 167.936L727.04 225.28l71.68 71.68 57.344-57.344-71.68-71.68zM425.984 526.336l-53.248 124.928 124.928-53.248 256-256-71.68-71.68-256 256z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconOmsBianji.defaultProps = {
  size: 18,
};

IconOmsBianji = React.memo ? React.memo(IconOmsBianji) : IconOmsBianji;

export default IconOmsBianji;
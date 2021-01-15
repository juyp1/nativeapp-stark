/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconOmsWeidu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 585.728l83.968-69.632L884.736 819.2H129.024l296.96-303.104 86.016 69.632zM102.4 249.856l284.672 233.472L104.448 776.192c0-6.144-2.048-12.288-2.048-18.432V249.856zM894.976 204.8L512 512 126.976 204.8h768zM636.928 483.328L921.6 251.904V757.76c0 6.144-2.048 12.288-2.048 18.432L636.928 483.328z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconOmsWeidu.defaultProps = {
  size: 18,
};

IconOmsWeidu = React.memo ? React.memo(IconOmsWeidu) : IconOmsWeidu;

export default IconOmsWeidu;

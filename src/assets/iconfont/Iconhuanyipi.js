/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconhuanyipi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M517.688889 850.488889h36.977778c5.688889 0 14.222222-2.844444 19.911111-2.844445 2.844444 0 8.533333-2.844444 11.377778-2.844444 5.688889-2.844444 14.222222-2.844444 19.911111-5.688889 2.844444 0 5.688889-2.844444 8.533333-2.844444 8.533333-2.844444 14.222222-5.688889 22.755556-8.533334 2.844444 0 2.844444-2.844444 5.688888-2.844444 8.533333-2.844444 17.066667-8.533333 25.6-11.377778 28.444444-14.222222 51.2-34.133333 73.955556-56.888889 5.688889-5.688889 14.222222-14.222222 19.911111-22.755555 0-2.844444 2.844444-2.844444 2.844445-5.688889 45.511111-56.888889 71.111111-128 71.111111-204.8h-76.8c-2.844444 0-2.844444 0-5.688889-2.844445v-5.688889l133.688889-196.266666c0-2.844444 2.844444-2.844444 5.688889-2.844445s2.844444 0 5.688888 2.844445L1024 512v5.688889c0 2.844444-2.844444 2.844444-5.688889 2.844444h-76.8c0 91.022222-28.444444 176.355556-76.8 247.466667 0 0 0 2.844444-2.844444 2.844444-5.688889 8.533333-11.377778 14.222222-17.066667 19.911112-2.844444 2.844444-2.844444 5.688889-5.688889 8.533333-8.533333 8.533333-17.066667 19.911111-25.6 28.444444l-2.844444 2.844445c-28.444444 28.444444-62.577778 54.044444-96.711111 73.955555 0 0-2.844444 0-2.844445 2.844445-11.377778 5.688889-19.911111 11.377778-31.288889 14.222222-2.844444 0-5.688889 2.844444-8.533333 2.844444-8.533333 2.844444-17.066667 8.533333-28.444445 11.377778-5.688889 2.844444-8.533333 2.844444-14.222222 5.688889-8.533333 2.844444-17.066667 5.688889-25.6 5.688889-5.688889 0-11.377778 2.844444-17.066666 2.844444-2.844444 0-5.688889 0-5.688889 2.844445-8.533333 2.844444-17.066667 2.844444-22.755556 2.844444h-8.533333c-14.222222 0-28.444444 2.844444-42.666667 2.844445-88.177778 0-173.511111-28.444444-244.622222-79.644445-22.755556-17.066667-28.444444-48.355556-11.377778-73.955555 17.066667-22.755556 48.355556-28.444444 71.111111-11.377778 59.733333 36.977778 128 59.733333 196.266667 56.888889zM159.288889 275.911111s0-2.844444 2.844444-2.844444c5.688889-8.533333 11.377778-17.066667 19.911111-25.6l2.844445-2.844445C227.555556 190.577778 284.444444 150.755556 344.177778 122.311111c2.844444 0 2.844444-2.844444 5.688889-2.844444 8.533333-2.844444 19.911111-8.533333 31.288889-11.377778 2.844444 0 8.533333-2.844444 11.377777-2.844445 8.533333-2.844444 17.066667-5.688889 25.6-5.688888 5.688889 0 11.377778-2.844444 14.222223-2.844445 2.844444 0 5.688889 0 8.533333-2.844444 5.688889 0 14.222222-2.844444 19.911111-2.844445 5.688889 0 8.533333 0 14.222222-2.844444 8.533333 0 19.911111-2.844444 31.288889-2.844445h5.688889c88.177778 0 173.511111 28.444444 247.466667 79.644445 22.755556 17.066667 28.444444 48.355556 11.377777 73.955555-17.066667 22.755556-48.355556 28.444444-71.111111 11.377778-56.888889-39.822222-122.311111-59.733333-190.577777-59.733333-8.533333 0-19.911111 0-28.444445 2.844444h-8.533333c-8.533333 0-14.222222 2.844444-22.755556 2.844445-2.844444 0-5.688889 2.844444-8.533333 2.844444-8.533333 2.844444-14.222222 2.844444-22.755556 5.688889-2.844444 0-5.688889 2.844444-5.688889 2.844444l-25.6 8.533334h-2.844444c-48.355556 19.911111-91.022222 54.044444-122.311111 93.866666-45.511111 56.888889-73.955556 130.844444-73.955556 210.488889h76.8c2.844444 0 2.844444 0 5.688889 2.844445v5.688889L142.222222 722.488889c0 2.844444-2.844444 2.844444-5.688889 2.844444s-2.844444 0-5.688889-2.844444L2.844444 529.066667v-5.688889c0-2.844444 2.844444-2.844444 5.688889-2.844445H85.333333c-2.844444-91.022222 25.6-176.355556 73.955556-244.622222z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconhuanyipi.defaultProps = {
  size: 18,
};

Iconhuanyipi = React.memo ? React.memo(Iconhuanyipi) : Iconhuanyipi;

export default Iconhuanyipi;

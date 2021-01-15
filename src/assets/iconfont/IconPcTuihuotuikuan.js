/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconPcTuihuotuikuan = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M230.4 644.672h563.2c7.68 0 12.8 5.12 12.8 12.8v62.72c0 7.68-5.12 12.8-12.8 12.8H230.4c-7.68 0-12.8-5.12-12.8-12.8v-62.72c0-7.68 5.12-12.8 12.8-12.8z"
        fill={getIconColor(color, 0, '#A7CBB5')}
      />
      <Path
        d="M217.6 665.152h588.8v19.2H217.6z"
        fill={getIconColor(color, 1, '#C4E2CE')}
      />
      <Path
        d="M217.6 693.312h588.8v19.2H217.6z"
        fill={getIconColor(color, 2, '#91BA9F')}
      />
      <Path
        d="M304.64 665.152H448v48.64H304.64zM576 665.152h143.36v48.64H576z"
        fill={getIconColor(color, 3, '#E9F2EC')}
      />
      <Path
        d="M382.72 385.28h358.4v94.72h-358.4z"
        fill={getIconColor(color, 4, '#C3A17F')}
      />
      <Path
        d="M553.728 441.8304h208.64c7.68 0 12.8 5.12 12.8 12.8v189.44h-234.24v-189.44c0-7.68 5.12-12.8 12.8-12.8z"
        fill={getIconColor(color, 5, '#E6C59E')}
      />
      <Path
        d="M725.248 603.1104h17.92c7.68 0 12.8 5.12 12.8 12.8s-5.12 12.8-12.8 12.8h-17.92c-7.68 0-12.8-5.12-12.8-12.8 0-6.4 5.12-12.8 12.8-12.8z"
        fill={getIconColor(color, 6, '#7B9A85')}
      />
      <Path
        d="M577.2544 309.7728h156.16c7.68 0 12.8 5.12 12.8 12.8v119.04h-181.76v-119.04c0-7.68 5.12-12.8 12.8-12.8z"
        fill={getIconColor(color, 7, '#F0D5B4')}
      />
      <Path
        d="M695.0144 399.3728h20.48c6.4 0 11.52 5.12 11.52 11.52s-5.12 11.52-11.52 11.52h-20.48c-6.4 0-11.52-5.12-11.52-11.52s5.12-11.52 11.52-11.52z"
        fill={getIconColor(color, 8, '#7B9A85')}
      />
      <Path
        d="M259.84 418.56h232.96c7.68 0 12.8 5.12 12.8 12.8v213.76H247.04V431.36c0-6.4 5.12-12.8 12.8-12.8z"
        fill={getIconColor(color, 9, '#E6C59E')}
      />
      <Path
        d="M303.488 268.8h156.16c7.68 0 12.8 5.12 12.8 12.8v136.96h-181.76V281.6c0-7.68 5.12-12.8 12.8-12.8z"
        fill={getIconColor(color, 10, '#DABB94')}
      />
      <Path
        d="M414.848 376.32h20.48c6.4 0 11.52 5.12 11.52 11.52s-5.12 11.52-11.52 11.52h-20.48c-6.4 0-11.52-5.12-11.52-11.52s5.12-11.52 11.52-11.52z"
        fill={getIconColor(color, 11, '#7B9A85')}
      />
      <Path
        d="M358.4 503.04h299.52l29.44 142.08h-358.4z"
        fill={getIconColor(color, 12, '#D9B48A')}
      />
      <Path
        d="M388.6336 479.9744h244.48c7.68 0 12.8 5.12 12.8 12.8v156.16h-270.08v-156.16c0-7.68 5.12-12.8 12.8-12.8z"
        fill={getIconColor(color, 13, '#F4D2A8')}
      />
      <Path
        d="M571.6736 607.9744h42.24c7.68 0 12.8 5.12 12.8 12.8s-5.12 12.8-12.8 12.8h-42.24c-7.68 0-12.8-5.12-12.8-12.8 0-6.4 6.4-12.8 12.8-12.8z"
        fill={getIconColor(color, 14, '#7B9A85')}
      />
    </Svg>
  );
};

IconPcTuihuotuikuan.defaultProps = {
  size: 18,
};

IconPcTuihuotuikuan = React.memo ? React.memo(IconPcTuihuotuikuan) : IconPcTuihuotuikuan;

export default IconPcTuihuotuikuan;

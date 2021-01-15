/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconLogo = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 2172 1024" width={size} height={size} {...rest}>
      <Path
        d="M85.333333 10.860606l176.872728 17.066667v38.787879h527.515151L868.848485 1.551515l139.636363 108.606061-32.581818 41.890909v459.248485l-186.181818 13.963636v-43.442424H606.642424v127.224242h234.278788l63.612121-55.854545 102.4 97.745454-44.993939 43.442425H606.642424v148.945454h282.375758l63.612121-58.957576 97.745455 99.29697L1008.484848 1024H21.721212L0 943.321212h422.012121v-148.945454H74.472727l-20.169697-85.333334h367.709091v-127.224242H262.206061v43.442424L85.333333 651.636364V10.860606z m186.181819 134.981818v116.363637H434.424242V145.842424H271.515152z m349.090909 0v116.363637h162.909091V145.842424H620.606061zM271.515152 355.29697v139.636363H434.424242v-139.636363H271.515152z m349.090909 0v139.636363h162.909091v-139.636363H620.606061zM1463.078788 116.363636l58.957576-108.60606 211.00606 44.993939-34.133333 63.612121h294.787879l52.751515-49.648484 105.50303 83.781818-54.30303 52.751515h-211.006061c52.751515 38.787879 96.193939 66.715152 130.327273 82.230303s85.333333 35.684848 155.151515 57.40606l-103.951515 152.048485-158.254545-88.436363-43.442425 41.890909H1373.090909V418.909091c-29.478788 21.721212-55.854545 38.787879-79.127273 51.2-23.272727 13.963636-60.509091 32.581818-110.157575 57.406061l-58.957576-80.678788c71.369697-51.2 122.569697-91.539394 155.151515-121.018182 32.581818-27.927273 72.921212-69.818182 121.018182-124.121212H1158.981818l-21.721212-85.333334h325.818182z m170.666667 86.884849c-31.030303 35.684848-55.854545 60.509091-76.024243 79.127273-18.618182 17.066667-49.648485 43.442424-94.642424 79.127272h299.442424l48.09697-40.339394c-26.375758-26.375758-43.442424-46.545455-54.30303-60.509091s-20.169697-32.581818-29.478788-57.40606h-93.090909zM1200.872727 541.478788h733.866667l68.266667-57.406061 94.642424 88.436364-35.684849 49.648485h-316.509091V946.424242c0 43.442424-34.133333 77.575758-77.575757 77.575758h-144.290909c-12.412121-32.581818-24.824242-54.30303-37.236364-65.163636-12.412121-10.860606-38.787879-18.618182-77.575757-26.375758v-66.715151h116.363636c17.066667 0 31.030303-13.963636 31.030303-31.030303V622.157576H1219.490909l-18.618182-80.678788z m134.981818 85.333333l159.806061 85.333334c-57.406061 71.369697-103.951515 121.018182-136.533333 153.6-32.581818 31.030303-86.884848 72.921212-161.357576 127.224242l-74.472727-68.266667c54.30303-66.715152 94.642424-116.363636 119.466666-150.496969 23.272727-34.133333 54.30303-83.781818 93.090909-147.39394z m442.181819 65.163637l96.193939-65.163637c62.060606 52.751515 108.606061 93.090909 141.187879 124.121212 32.581818 31.030303 74.472727 74.472727 128.775757 133.430303l-159.80606 119.466667c-32.581818-68.266667-62.060606-121.018182-86.884849-158.254545-24.824242-38.787879-63.612121-89.987879-119.466666-153.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconLogo.defaultProps = {
  size: 18,
};

IconLogo = React.memo ? React.memo(IconLogo) : IconLogo;

export default IconLogo;
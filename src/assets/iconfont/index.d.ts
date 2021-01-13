/* eslint-disable */

import { FunctionComponent } from 'react';
// Don't forget to install package: @types/react-native
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';

interface Props extends GProps, ViewProps {
  name: 'iconbofang' | 'iconshengyin' | 'iconfanhui' | 'iconsearch' | 'iconerji' | 'iconziyuanldpi' | 'iconhuanyipi' | 'iconyoujiantou' | 'iconcainixihuan' | 'iconwode' | 'iconfaxian' | 'iconyinle' | 'iconHome';
  size?: number;
  color?: string | string[];
}

declare const IconFont: FunctionComponent<Props>;

export default IconFont;

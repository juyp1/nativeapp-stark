/* eslint-disable */

import React from 'react';

import Iconbofang from './Iconbofang';
import Iconshengyin from './Iconshengyin';
import Iconfanhui from './Iconfanhui';
import Iconsearch from './Iconsearch';
import Iconerji from './Iconerji';
import Iconziyuanldpi from './Iconziyuanldpi';
import Iconhuanyipi from './Iconhuanyipi';
import Iconyoujiantou from './Iconyoujiantou';
import Iconcainixihuan from './Iconcainixihuan';
import Iconwode from './Iconwode';
import Iconfaxian from './Iconfaxian';
import Iconyinle from './Iconyinle';
import IconHome from './IconHome';

let IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'iconbofang':
      return <Iconbofang key="1" {...rest} />;
    case 'iconshengyin':
      return <Iconshengyin key="2" {...rest} />;
    case 'iconfanhui':
      return <Iconfanhui key="3" {...rest} />;
    case 'iconsearch':
      return <Iconsearch key="4" {...rest} />;
    case 'iconerji':
      return <Iconerji key="5" {...rest} />;
    case 'iconziyuanldpi':
      return <Iconziyuanldpi key="6" {...rest} />;
    case 'iconhuanyipi':
      return <Iconhuanyipi key="7" {...rest} />;
    case 'iconyoujiantou':
      return <Iconyoujiantou key="8" {...rest} />;
    case 'iconcainixihuan':
      return <Iconcainixihuan key="9" {...rest} />;
    case 'iconwode':
      return <Iconwode key="10" {...rest} />;
    case 'iconfaxian':
      return <Iconfaxian key="11" {...rest} />;
    case 'iconyinle':
      return <Iconyinle key="12" {...rest} />;
    case 'iconHome':
      return <IconHome key="13" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;

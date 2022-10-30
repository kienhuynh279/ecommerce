import adminStyle from 'assets/css/admin';
import commonStyle from 'assets/css/common';
import positionStyle from 'assets/css/position';
import spacingStyle from 'assets/css/spacing';
import textStyle from 'assets/css/text';
import variablesStyle from 'assets/css/variables';
import { FC, memo } from 'react';
import '../../assets/css/vendor';

const GlobalCss: FC = () => {
  commonStyle();
  variablesStyle();
  textStyle();
  positionStyle();
  adminStyle();
  spacingStyle();

  return null;
};

export default memo(GlobalCss);

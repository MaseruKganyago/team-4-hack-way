import React, { FC, Fragment } from 'react';
import { IconBaseProps } from '@ant-design/icons/lib/components/Icon';

export interface IAppIconProps extends IconBaseProps {
  iconName: string;
  twoToneColor?: string;
}

const AppIcon: FC<IAppIconProps> = ({ iconName = 'BuildFilled', ...props }) => {
  const icons = require('@ant-design/icons');

  if (!icons[iconName]) {
    return <Fragment />;
  }

  const IconComponent = icons[iconName];

  return <IconComponent {...props} />;
};

export default AppIcon;

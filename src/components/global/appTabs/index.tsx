import { ITabItem } from '@/utils';
import { resolveTabItems } from '@/utils/appTabs';
import { Tabs, TabsProps } from 'antd';

export interface IAppTabPaneProps extends TabsProps {
  tabItems: ITabItem[];
}

export const AppTab: React.FC<IAppTabPaneProps> = ({ tabItems, ...pros }) => {
  const items = resolveTabItems(tabItems);
  return <Tabs {...pros} items={items} />;
};

export default AppTab;

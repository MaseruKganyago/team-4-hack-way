import { AppIcon } from '@/components';
import { Tab } from 'rc-tabs/lib/interface';

export type childrenType = 'TrackerList';

export interface ITabItem {
  key?: string;
  label: string;
  children: React.ReactNode | childrenType;
  iconName?: string;
}

export const resolveTabItems = (tabItems: ITabItem[]): Tab[] => {
  return tabItems.map((item, i) => {
    const key = String(i + 1);
    const { label, children, iconName } = item;

    const icon = iconName ? <AppIcon iconName={iconName} /> : null;

    const props: Tab = { key, label, children, icon: icon, animated: true };
    return props;
  });
};

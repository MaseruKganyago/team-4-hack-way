'use client';

import { ITabItem } from '@/utils';
import { StyledDashboardBody, StyledDashboardPage } from './styles';
import { AppTab, TrackerPlaner } from '@/components';
import { APP_TABS } from '@/app-constants';

interface IProps {}

export const Home: React.FC<IProps> = () => {
  //#region TO BE REFACTORED: Planner Information
  // const handlePlannerInfo = (info) => {
  //   const startDate = new Date(info.startDate);
  //   const endDate = new Date(info.endDate);

  //   const rangedTransaction = transactions?.filter((item) => {
  //     const itemDate = new Date(item.postingDate);
  //     return itemDate >= startDate && itemDate <= endDate;
  //   });
  //   const amounts = rangedTransaction?.map((a) => parseFloat(a.amount));
  //   const totalAmmount = amounts.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  //   setPlanner({
  //     startDate: info.startDate,
  //     endDate: info.endDate,
  //     totalAmmount,
  //     totalBudgetValue: info.totalBudgetValue,
  //   });
  // };

  // const plannerNotesInformation = () => {
  //   if (isEmpty(planner)) return 'Eish!! Gonna need you to. Capture some information on the planner form.';

  //   const { totalBudgetValue, totalAmmount } = planner;

  //   const startDate = moment(planner.startDate).format('lll');
  //   const endDate = moment(planner.endDate).format('lll');
  //   return `For the dates ${startDate} - ${endDate}. You had spend to spend a total of R${totalBudgetValue}. From you transaction records you actually spent in total, R${totalAmmount}`;
  // };
  //#endregion
  return (
    <StyledDashboardPage className="dashboard-page">
      <StyledDashboardBody>
        <AppTab tabItems={appTabsWithChildren(APP_TABS)} />
      </StyledDashboardBody>
    </StyledDashboardPage>
  );
};

export default Home;

const appTabsWithChildren = (tabs: ITabItem[]): ITabItem[] => {
  return tabs.map((tab) => {
    const { label, iconName, children } = tab;
    const childrenJsx = () => {
      switch (children) {
        case 'TrackerPlaner':
          return <TrackerPlaner />;

        default:
          break;
      }
    };

    return { label, iconName, children: childrenJsx() };
  });
};

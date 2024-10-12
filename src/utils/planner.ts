import { Moment } from "moment";

export interface IPlanner {
  dateRange: Moment[];
  totalBudgetValue: number;
  startDate?: string;
  endDate?: string;
}

export const withStartEndDates = (planner: IPlanner) => {
  const startDate = planner.dateRange[0].toISOString(true);
  const endDate = planner.dateRange[1].toISOString(true);

  return {
    ...planner,
    startDate,
    endDate,
  };
};

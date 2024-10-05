"use client";

import {
  StyledDashboardBody,
  StyledDashboardPage,
  StyledDashboardHeader,
} from "./styles";
import { SearchInput, TrackerList, PlannerFormModal } from "@/components";
import { useGet } from "restful-react";
import { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import { Spin, Button, Divider, Alert } from "antd";
import { FormOutlined } from "@ant-design/icons";
import moment  from 'moment'

interface IPlanner {
  totalAmmount?: number;
  startDate?: string;
  endDate?: string;
  totalBudgetValue?: number
}

export default function Home() {
  const { refetch, loading, data } = useGet({
    path: "https://team4.sandboxpay.co.za/za/pb/v1/accounts/4675778129910189600000003/transactions",
    lazy: true,
  });
  const [localTrans, setTrans] = useState([]);
  const transactions = data?.data?.transactions;

  const [open, setOpen] = useState<boolean>(false);
  const [planner, setPlanner] = useState<IPlanner>({})

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (data && !loading) setTrans(transactions);
  }, [data]);

  const handleSearch = (searchText: string) => {
    if (isEmpty(searchText)) refetch();
    const filtered = transactions?.filter((a) =>
      a.description?.includes(searchText),
    );

    setTrans(filtered);
  };

  const handleButtonClick = () => setOpen(!open);

  const handlePlannerInfo = (info) => {
    const startDate = new Date(info.startDate)
    const endDate = new Date(info.endDate)
    
    const rangedTransaction = transactions.filter(item => {
      const itemDate = new Date(item.postingDate);
      return itemDate >= startDate && itemDate <= endDate;
    });
    const amounts = rangedTransaction?.map(a => parseFloat(a.amount))
    const totalAmmount = amounts.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    setPlanner({
      startDate: info.startDate,
      endDate: info.endDate,
      totalAmmount,
      totalBudgetValue: info.totalBudgetValue
    })
  };

  const plannerNotesInformation = () => {
    if (isEmpty(planner))
      return "Eish!! Gonna need you to. Capture some information on the planner form.";
    
    const {totalBudgetValue, totalAmmount } = planner

    const startDate = moment(planner.startDate).format('lll')
    const endDate = moment(planner.endDate).format('lll')
    return `For the dates ${startDate} - ${endDate}. You had spend to spend a total of R${totalBudgetValue}. From you transaction records you actually spent in total, R${totalAmmount}`
  }
  return (
    <StyledDashboardPage className="dashboard-page">
      <StyledDashboardBody>
        <StyledDashboardHeader className="dashboard-header">
          <SearchInput handleSearch={handleSearch} />

          <Button type="link" onClick={handleButtonClick}>
            Planner
            <FormOutlined />
          </Button>
        </StyledDashboardHeader>

        <Spin spinning={loading}>
          <TrackerList transactions={localTrans} />
        </Spin>

        <div style={{ marginTop: "15px" }} />
        <Divider />
        <div style={{ marginBottom: "15px" }} />



        <PlannerFormModal
          open={open}
          setOpen={setOpen}
          storePlannerInfo={handlePlannerInfo}
        />

<Alert
      message="Planner Notes"
      description={plannerNotesInformation()}
      type="info"
      showIcon
    />
      </StyledDashboardBody>
    </StyledDashboardPage>
  );
}

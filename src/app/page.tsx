"use client";

import TrackerList from "./components/tracker-list";
import { StyledDashboardBody, StyledDashboardPage } from "./styles";

export default function Home() {
  return (
    <StyledDashboardPage className="dashboard-page">
      <StyledDashboardBody>
        <TrackerList />
      </StyledDashboardBody>
    </StyledDashboardPage>
  );
}

import React from "react";
import { Interpreter } from "xstate";
import { AuthMachineContext, AuthMachineEvents } from "../machines/authMachine";
import { AnalyticsChart, AnalyticsDashbord } from "components/Styled";
import ChartByDays from "../components/charts/ChartByDays";
import ChartByHours from "../components/charts/ChartByHours";
import ChartOSUsage from "../components/charts/ChartOSUsage";
import ChartPageViews from "../components/charts/ChartPageViews";
import ChartEventsLog from "../components/charts/ChartEventsLog";
import ChartRetention from "../components/charts/ChartRetention";
import ChartMap from "../components/charts/ChartMap";
import ErrorBoundary from "components/ErrorBoundary";

export interface Props {
  authService: Interpreter<AuthMachineContext, any, AuthMachineEvents, any>;
}

const DashBoard: React.FC = () => {
  return (
    <AnalyticsDashbord>
      <AnalyticsChart backgroundColor="#F4F4F4" gridArea={["3 / 1 / 4 / 4", "4 / 1 / 5 / 3"]}>
        <ErrorBoundary name="by days chart" >
          <ChartByDays />
        </ErrorBoundary>
      </AnalyticsChart>
      <AnalyticsChart backgroundColor="#E8E8E8" gridArea={["3 / 4 / 4 / 7", "5 / 1 / 6 / 3"]}>
        <ErrorBoundary name="by hours chart" >
          <ChartByHours />
        </ErrorBoundary>
      </AnalyticsChart>
      <AnalyticsChart backgroundColor="#E8E8E8" gridArea={["2 / 1 / 3 / 5", "3 / 1 / 4 / 3"]}>
        <ErrorBoundary name="event log chart" >
          <ChartEventsLog />
        </ErrorBoundary>
      </AnalyticsChart>
      <AnalyticsChart backgroundColor="#F4F4F4" gridArea={["1 / 1 / 2 / 5", "1 / 1 / 2 / 3"]}>
        <ErrorBoundary name="map chart" >
          <ChartMap />
        </ErrorBoundary>
      </AnalyticsChart>
      <AnalyticsChart backgroundColor="#E8E8E8" gridArea={["1 / 5 / 2 / 7", "2 / 1 / 3 / 2"]}>
        <ErrorBoundary name="os chart" >
          <ChartOSUsage />
        </ErrorBoundary>
      </AnalyticsChart>
      <AnalyticsChart backgroundColor="#F4F4F4" gridArea={["2 / 5 / 3 / 7", "2 / 2 / 3 / 3"]}>
        <ErrorBoundary name="page chart" >
          <ChartPageViews />
        </ErrorBoundary>
      </AnalyticsChart>
      <AnalyticsChart backgroundColor="#fff" gridArea={["4 / 1 / 5 / 7", "6 / 1 / 7 / 3"]}>
        <ErrorBoundary name="retention chart" >
          <ChartRetention />
        </ErrorBoundary>
      </AnalyticsChart>
    </AnalyticsDashbord>
  );
};

export default DashBoard;

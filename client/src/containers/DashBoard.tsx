import React from "react";
import { Interpreter } from "xstate";
import { AuthMachineContext, AuthMachineEvents } from "../machines/authMachine";
import { AnalyticsChart, AnalyticsDashbord } from "components/Styled";
import ChartByDays from "../components/ChartByDays";
import ChartByHours from "../components/ChartByHours";
import ChartOSUsage from "../components/ChartOSUsage";
import ChartPageViews from "../components/ChartPageViews";
import ChartEventsLog from "../components/ChartEventsLog";
import ChartRetention from "../components/ChartRetention";
import ChartMap from "components/ChartMap";
import ErrorBoundary from "components/ErrorBoundary";

export interface Props {
  authService: Interpreter<AuthMachineContext, any, AuthMachineEvents, any>;
}

const DashBoard: React.FC = () => {
  return (
    <AnalyticsDashbord>
      <AnalyticsChart backgroundColor="#F4F4F4" gridArea="1 / 1 / 2 / 5">
        <ErrorBoundary name="map chart" >
          <ChartMap />
        </ErrorBoundary>
      </AnalyticsChart>
      <AnalyticsChart backgroundColor="#F4F4F4" gridArea="3 / 1 / 4 / 4">
        <ErrorBoundary name="by days chart" >
          <ChartByDays />
        </ErrorBoundary>
      </AnalyticsChart>
      <AnalyticsChart backgroundColor="#E8E8E8" gridArea="3 / 4 / 4 / 7">
        <ErrorBoundary name="by hours chart" >
          <ChartByHours />
        </ErrorBoundary>
      </AnalyticsChart>
      <AnalyticsChart backgroundColor="#fff" gridArea="4 / 1 / 5 / 7">
        <ErrorBoundary name="retention chart" >
          <ChartRetention />
        </ErrorBoundary>
      </AnalyticsChart>
      <AnalyticsChart backgroundColor="#E8E8E8" gridArea="2 / 1 / 3 / 5">
        <ErrorBoundary name="event log chart" >
          <ChartEventsLog />
        </ErrorBoundary>
      </AnalyticsChart>
      <AnalyticsChart backgroundColor="#E8E8E8" gridArea="1 / 5 / 2 / 7">
        <ErrorBoundary name="os chart" >
          <ChartOSUsage />
        </ErrorBoundary>
      </AnalyticsChart>
      <AnalyticsChart backgroundColor="#F4F4F4" gridArea="2 / 5 / 3 / 7">
        <ErrorBoundary name="page chart" >
          <ChartPageViews />
        </ErrorBoundary>
      </AnalyticsChart>
    </AnalyticsDashbord>
  );
};

export default DashBoard;

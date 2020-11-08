import React from "react";
import { Interpreter } from "xstate";
import { AuthMachineContext, AuthMachineEvents } from "../machines/authMachine";
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
    <>
      <ErrorBoundary name="map chart" >
        <ChartMap />
      </ErrorBoundary>
      <ErrorBoundary name="by days chart" >
        <ChartByDays />
      </ErrorBoundary>
      <ErrorBoundary name="by hours chart" >
        <ChartByHours />
      </ErrorBoundary>
      <ErrorBoundary name="retention chart" >
        <ChartRetention />
      </ErrorBoundary>
      <ErrorBoundary name="map chart" >
        <ChartEventsLog />
      </ErrorBoundary>
      <ErrorBoundary name="os chart" >
        <ChartOSUsage />
      </ErrorBoundary>
      <ErrorBoundary name="page chart" >
        <ChartPageViews />
      </ErrorBoundary>
    </>
  );
};

export default DashBoard;

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
import "./DashBoard.css";

export interface Props {
  authService: Interpreter<AuthMachineContext, any, AuthMachineEvents, any>;
}

const DashBoard: React.FC = () => {
  return (
    <div id="analyticsDashbord">
      <div id="analyticsMap">
        <ErrorBoundary name="map chart" >
          <ChartMap />
        </ErrorBoundary>
      </div>
      <div id="analyticsByDays">
        <ErrorBoundary name="by days chart" >
          <ChartByDays />
        </ErrorBoundary>
      </div>
      <div id="analyticsByHours">
        <ErrorBoundary name="by hours chart" >
          <ChartByHours />
        </ErrorBoundary>
      </div>
      <div id="analyticsRetention">
        <ErrorBoundary name="retention chart" >
          <ChartRetention />
        </ErrorBoundary>
      </div>
      <div id="analyticsEventLog">
        <ErrorBoundary name="event log chart" >
          <ChartEventsLog />
        </ErrorBoundary>
      </div>
      <div id="analyticsOS">
        <ErrorBoundary name="os chart" >
          <ChartOSUsage />
        </ErrorBoundary>
      </div>
      <div id="analyticsPage">
        <ErrorBoundary name="page chart" >
          <ChartPageViews />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default DashBoard;

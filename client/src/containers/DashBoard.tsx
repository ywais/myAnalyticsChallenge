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

export interface Props {
  authService: Interpreter<AuthMachineContext, any, AuthMachineEvents, any>;
}

const DashBoard: React.FC = () => {
  return (
    <>
      <ChartMap />
      <ChartByDays />
      <ChartByHours />
      <ChartRetention />
      <ChartEventsLog />
      <ChartOSUsage />
      <ChartPageViews />
    </>
  );
};

export default DashBoard;

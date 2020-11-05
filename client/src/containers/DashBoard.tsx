import React from "react";
import { Interpreter } from "xstate";
import { AuthMachineContext, AuthMachineEvents } from "../machines/authMachine";
import ChartByDays from "../components/ChartByDays";
import ChartByHours from "components/ChartByHours";

export interface Props {
  authService: Interpreter<AuthMachineContext, any, AuthMachineEvents, any>;
}

const DashBoard: React.FC = () => {
  return (
    <>
      <ChartByDays />
      <ChartByHours />
    </>
  );
};

export default DashBoard;

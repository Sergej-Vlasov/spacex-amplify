import React from "react";
import { Global } from "./styledComponents";

import { Header, LaunchHistory, FirstStageRecovery, Rockets } from "./sections";

const App = () => {
  return (
    <>
      <Global />
      <Header />
      <LaunchHistory />
      <FirstStageRecovery />
      <Rockets />
    </>
  );
};

export default App;

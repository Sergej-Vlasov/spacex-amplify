import React from "react";
import { Global } from "./styledComponents";

import { Header, LaunchHistory, FirstStageRecovery } from "./sections";

const App = () => {
  return (
    <>
      <Global />
      <Header />
      <LaunchHistory />
      <FirstStageRecovery />
    </>
  );
};

export default App;

import React from "react";
import { Global, LoadingPlaceholder } from "./styledComponents";

import { Header, LaunchHistory } from "./sections";

const App = () => {
  return (
    <>
      <Global />
      <Header />
      <LaunchHistory />
    </>
  );
};

export default App;

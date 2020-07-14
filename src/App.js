import React from "react";
import { Container, LogoContainer, Global } from "./styledComponents";
import { SpacexLogo } from "./assets/spacexLogo";
// import {
//   LineChart,
//   BarChart,
//   StackedBarChart,
//   GroupedBarChart
// } from "./components";

const App = () => {
  return (
    <div>
      <Global />
      <LogoContainer>
        <SpacexLogo />
      </LogoContainer>

      {/* <Container>
        <GroupedBarChart />
      </Container>
      <Container>
        <LineChart />
      </Container>
      <Container>
        <BarChart />
      </Container>
      <Container>
        <StackedBarChart />
      </Container> */}
    </div>
  );
};

export default App;

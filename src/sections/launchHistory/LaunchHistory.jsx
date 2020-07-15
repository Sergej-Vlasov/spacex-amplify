import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listLaunchs } from "../../graphql/queries";
import {
  ChartContainer,
  ChartHeader,
  ComponentWrapper,
  ChartHeaderWrapper,
  Button,
  ChartBlockWrapper
} from "../../styledComponents";
import LaunchSuccessPerYear from "./components/LaunchSuccesPerYear";
import LaunchSuccessRate from "./components/LaunchSuccessRate";
import TotalSuccessFailure from "./components/TotalSuccessFailure";

const LaunchHistory = () => {
  const [launches, setLaunches] = useState(null);
  const [showRate, setShowRate] = useState(false);

  const fetchLaunches = async () => {
    try {
      const launches = await API.graphql(graphqlOperation(listLaunchs));
      setLaunches(launches.data.listLaunchs.items);
    } catch (err) {
      console.log("error fetching launches");
    }
  };

  useEffect(() => {
    fetchLaunches();
  }, []);

  return (
    <>
      <ComponentWrapper>
        <ChartBlockWrapper width="65%">
          <ChartHeaderWrapper>
            <ChartHeader>
              SpaceX Rocket Launch{" "}
              {!showRate
                ? "Success/Failed per Year"
                : "Success Rate per Launch"}
            </ChartHeader>
            <Button onClick={() => setShowRate(showRate => !showRate)}>
              {!showRate ? "Show success rate" : "Show per year"}
            </Button>
          </ChartHeaderWrapper>
          <ChartContainer>
            {showRate ? (
              <LaunchSuccessRate launches={launches} />
            ) : (
              <LaunchSuccessPerYear launches={launches} />
            )}
          </ChartContainer>
        </ChartBlockWrapper>
        <ChartBlockWrapper width="32%">
          <ChartHeader>Total Launch Success/Failed </ChartHeader>
          <ChartContainer>
            <TotalSuccessFailure launches={launches} />
          </ChartContainer>
        </ChartBlockWrapper>
      </ComponentWrapper>
    </>
  );
};

export default LaunchHistory;

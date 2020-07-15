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
import RecoverySuccessPerYear from "./components/RecoverySuccessPerYear";
import RecoverySuccessRate from "./components/RecoverySuccessRate";
import TotalRecoverySuccessFailure from "./components/TotalRecoverySuccessFailure";

const FirstStageRecovery = () => {
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
              Rocket 1st Stage Core Recovery{" "}
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
              <RecoverySuccessRate launches={launches} />
            ) : (
              <RecoverySuccessPerYear launches={launches} />
            )}
          </ChartContainer>
        </ChartBlockWrapper>
        <ChartBlockWrapper width="32%">
          <ChartHeader>Total Core Recovery Success/Failed </ChartHeader>
          <ChartContainer>
            <TotalRecoverySuccessFailure launches={launches} />
          </ChartContainer>
        </ChartBlockWrapper>
      </ComponentWrapper>
    </>
  );
};

export default FirstStageRecovery;

import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listRocketss } from "../../graphql/queries";
import {
  ChartContainer,
  ChartHeader,
  ComponentWrapper,
  ChartHeaderWrapper,
  Button,
  ChartBlockWrapper
} from "../../styledComponents";
import RocketDimensions from "./components/RocketDimensions";
import RocketWeight from "./components/RocketWeight";

const LaunchHistory = () => {
  const [rockets, setRockets] = useState(null);
  const [showMetric, setShowMetric] = useState(true);

  const fetchRockets = async () => {
    try {
      const rockets = await API.graphql(graphqlOperation(listRocketss));
      setRockets(rockets.data.listRocketss.items);
    } catch (err) {
      console.log("error fetching launches");
    }
  };

  useEffect(() => {
    fetchRockets();
  }, []);

  return (
    <>
      <ComponentWrapper>
        <ChartBlockWrapper width="48.5%">
          <ChartHeaderWrapper>
            <ChartHeader>
              SpaceX Rocket Dimensions {showMetric ? "in Meters" : "in feet"}
            </ChartHeader>
            <Button onClick={() => setShowMetric(metric => !metric)}>
              {showMetric ? "Show Imperial" : "Show Metric"}
            </Button>
          </ChartHeaderWrapper>
          <ChartContainer>
            <RocketDimensions rockets={rockets} showMetric={showMetric} />
          </ChartContainer>
        </ChartBlockWrapper>
        <ChartBlockWrapper width="48.5%">
          <ChartHeaderWrapper>
            <ChartHeader>
              SpaceX Rocket Weight {showMetric ? "in Kilograms" : "in Pounds"}
            </ChartHeader>
            <Button onClick={() => setShowMetric(metric => !metric)}>
              {showMetric ? "Show Imperial" : "Show Metric"}
            </Button>
          </ChartHeaderWrapper>
          <ChartContainer>
            <RocketWeight rockets={rockets} showMetric={showMetric} />
          </ChartContainer>
        </ChartBlockWrapper>
      </ComponentWrapper>
    </>
  );
};

export default LaunchHistory;

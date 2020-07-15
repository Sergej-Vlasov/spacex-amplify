import React, { useState, useEffect } from "react";
import { GroupedBarChart, LoadingLogo } from "../../../components";
import { LoadingWrapper } from "../../../styledComponents";

const RocketDimensions = ({ rockets, showMetric }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (rockets) {
      const chartData = rockets.reduce((acc, rocket) => {
        return {
          ...acc,
          [rocket.name]: {
            category: rocket.name,
            height: showMetric ? rocket.height.meters : rocket.height.feet,
            diameter: showMetric ? rocket.diameter.meters : rocket.diameter.feet
          }
        };
      }, {});
      setChartData({
        data: Object.values(chartData),
        categories: Object.keys(chartData),
        barChartFields: ["height", "diameter"],
        barChartColours: { height: "#2196f3", diameter: "#f57c00" }
      });
    }
  }, [rockets, showMetric]);
  return (
    <>
      {chartData ? (
        <GroupedBarChart
          data={chartData.data}
          categories={chartData.categories}
          barChartFields={chartData.barChartFields}
          barChartColours={chartData.barChartColours}
        />
      ) : (
        <LoadingWrapper>
          <LoadingLogo />
        </LoadingWrapper>
      )}
    </>
  );
};

export default RocketDimensions;

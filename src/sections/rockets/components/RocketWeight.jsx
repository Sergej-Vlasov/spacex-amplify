import React, { useState, useEffect } from "react";
import { BarChart, LoadingLogo } from "../../../components";
import { LoadingWrapper } from "../../../styledComponents";

const RocketWeight = ({ rockets, showMetric }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (rockets) {
      const chartData = rockets.reduce((acc, rocket) => {
        return {
          ...acc,
          [rocket.name]: showMetric ? rocket.mass.kg : rocket.mass.lb
        };
      }, {});
      setChartData({
        data: Object.values(chartData),
        categories: Object.keys(chartData),
        categoryColours: ["#64dd17", "#f44336", "#dbb2ff", "#e0e0e0"]
      });
    }
  }, [rockets, showMetric]);
  return (
    <>
      {chartData ? (
        <BarChart
          data={chartData.data}
          categories={chartData.categories}
          categoryColours={chartData.categoryColours}
        />
      ) : (
        <LoadingWrapper>
          <LoadingLogo />
        </LoadingWrapper>
      )}
    </>
  );
};

export default RocketWeight;

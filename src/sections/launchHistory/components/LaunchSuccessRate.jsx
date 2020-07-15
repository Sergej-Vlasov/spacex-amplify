import React, { useEffect, useState } from "react";
import { LineChart, LoadingLogo } from "../../../components";
import { LoadingWrapper } from "../../../styledComponents";

const LaunchSuccessRate = ({ launches }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (launches) {
      const chartData = launches
        .sort((a, b) => a.flight_number - b.flight_number)
        .reduce((acc, launch) => {
          if (!acc.length) {
            return [launch.success ? 1 : 0];
          } else {
            return [...acc, acc[acc.length - 1] + (launch.success ? 1 : 0)];
          }
        }, [])
        .map((rate, index) => (rate / (index + 1)) * 100);
      console.log(chartData);

      setChartData(chartData);
    }
  }, [launches]);

  return (
    <>
      {chartData ? (
        <LineChart
          data={chartData}
          customMaxY={100}
          sequenceAttribute={chartData.sequenceAttribute}
        />
      ) : (
        <LoadingWrapper>
          <LoadingLogo />
        </LoadingWrapper>
      )}
    </>
  );
};

export default LaunchSuccessRate;

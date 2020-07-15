import React, { useState, useEffect } from "react";
import { BarChart, LoadingLogo } from "../../../components";
import { LoadingWrapper } from "../../../styledComponents";

const TotalRecoverySuccessFailure = ({ launches }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (launches) {
      const chartData = launches.reduce(
        (acc, launch) => {
          const amountLanded = launch.cores.reduce(
            (acc, core) => (core.landing_success ? acc + 1 : acc),
            0
          );
          const amountFailed = launch.cores.reduce(
            (acc, core) =>
              core.landing_attempt && !core.landing_success ? acc + 1 : acc,
            0
          );
          return {
            ...acc,
            Success: acc.Success + amountLanded,
            Failed: acc.Failed + amountFailed
          };
        },
        { Success: 0, Failed: 0 }
      );

      setChartData({
        data: Object.values(chartData),
        categories: Object.keys(chartData),
        categoryColours: ["#03DAC5", "#CF6679"]
      });
    }
  }, [launches]);
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

export default TotalRecoverySuccessFailure;

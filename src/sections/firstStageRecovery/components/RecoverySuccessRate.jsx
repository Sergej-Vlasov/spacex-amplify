import React, { useEffect, useState } from "react";
import { LineChart, LoadingLogo } from "../../../components";
import { LoadingWrapper } from "../../../styledComponents";

const RecoverySuccessRate = ({ launches }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (launches) {
      const chartData = launches
        .sort((a, b) => a.flight_number - b.flight_number)
        .reduce((acc, launch) => {
          const didAttempt = launch.cores.reduce(
            (acc, core) => (acc ? acc : core.landing_attempt ? true : false),
            false
          );

          if (!didAttempt) return acc;

          const amountLanded = launch.cores.reduce(
            (acc, core) => (core.landing_success ? acc + 1 : acc),
            0
          );

          if (!acc.length) {
            return [amountLanded];
          } else {
            return [...acc, acc[acc.length - 1] + amountLanded];
          }
        }, [])
        .map((rate, index) => (rate / (index + 1)) * 100);

      setChartData(chartData);
    }
  }, [launches]);

  return (
    <>
      {chartData ? (
        <LineChart data={chartData} customMaxY={100} />
      ) : (
        <LoadingWrapper>
          <LoadingLogo />
        </LoadingWrapper>
      )}
    </>
  );
};

export default RecoverySuccessRate;

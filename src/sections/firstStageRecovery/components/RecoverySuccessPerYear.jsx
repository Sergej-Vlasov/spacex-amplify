import React, { useEffect, useState } from "react";
import { StackedBarChart, LoadingLogo } from "../../../components";
import { LoadingWrapper } from "../../../styledComponents";

const RecoverySuccessPerYear = ({ launches }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (launches) {
      const chartData = launches.reduce((acc, launch) => {
        const didAttempt = launch.cores.reduce(
          (acc, core) => (acc ? acc : core.landing_attempt ? true : false),
          false
        );

        if (!didAttempt) return acc;

        const amountLanded = launch.cores.reduce(
          (acc, core) => (core.landing_success ? acc + 1 : acc),
          0
        );
        const amountFailed = launch.cores.reduce(
          (acc, core) =>
            core.landing_attempt && !core.landing_success ? acc + 1 : acc,
          0
        );

        const year = new Date(launch.date_local).getFullYear();
        if (acc.hasOwnProperty(`${year}`)) {
          return {
            ...acc,
            [`${year}`]: {
              ...acc[`${year}`],
              success: acc[`${year}`].success + amountLanded,
              failure: acc[`${year}`].failure + amountFailed
            }
          };
        } else {
          return {
            ...acc,
            [`${year}`]: {
              year: year,
              success: amountLanded,
              failure: amountFailed
            }
          };
        }
      }, {});

      setChartData({
        data: Object.values(chartData),
        keys: ["success", "failure"],
        sequenceAttribute: "year",
        colors: { success: "#03DAC5", failure: "#CF6679" }
      });
    }
  }, [launches]);

  return (
    <>
      {chartData ? (
        <StackedBarChart
          data={chartData.data}
          keys={chartData.keys}
          colors={chartData.colors}
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

export default RecoverySuccessPerYear;

import React, { useEffect, useState } from "react";
import { StackedBarChart, LoadingLogo } from "../../../components";
import { LoadingWrapper } from "../../../styledComponents";

const LaunchSuccessPerYear = ({ launches }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (launches) {
      const chartData = launches.reduce((acc, launch) => {
        const year = new Date(launch.date_local).getFullYear();
        if (acc.hasOwnProperty(`${year}`)) {
          if (launch.success) {
            return {
              ...acc,
              [`${year}`]: {
                ...acc[`${year}`],
                success: acc[`${year}`].success + 1
              }
            };
          } else {
            return {
              ...acc,
              [`${year}`]: {
                ...acc[`${year}`],
                failure: acc[`${year}`].failure + 1
              }
            };
          }
        } else {
          return {
            ...acc,
            [`${year}`]: {
              year: year,
              success: launch.success ? 1 : 0,
              failure: launch.success ? 0 : 1
            }
          };
        }
      }, {});
      setChartData({
        data: Object.values(chartData),
        keys: ["success", "failure"],
        sequenceAttribute: "year",
        colors: { success: "#64dd17", failure: "#f44336" }
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

export default LaunchSuccessPerYear;

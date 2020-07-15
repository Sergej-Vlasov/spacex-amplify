import React, { useState, useEffect } from "react";
import { BarChart, LoadingLogo } from "../../../components";
import { LoadingWrapper } from "../../../styledComponents";

const TotalSuccessFailure = ({ launches }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (launches) {
      const chartData = launches.reduce(
        (acc, launch) => {
          if (launch.success) {
            return { ...acc, Success: acc.Success + 1 };
          } else {
            return { ...acc, Failed: acc.Failed + 1 };
          }
        },
        { Success: 0, Failed: 0 }
      );

      setChartData({
        data: Object.values(chartData),
        categories: Object.keys(chartData),
        categoryColours: ["#64dd17", "#f44336"]
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

export default TotalSuccessFailure;

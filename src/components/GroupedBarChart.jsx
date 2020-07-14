import React, { useRef, useEffect } from "react";
import {
  select,
  axisBottom,
  axisLeft,
  scaleLinear,
  scaleBand,
  event
} from "d3";
import { SVG, SVGWrapper } from "../styledComponents";
import { UseResizeObserver } from "../hooks";

/*
    PROP DESCRIPTION
    data: [
      {
      category: string,
      barChartCategory1: number
      barChartCategory2: number
      },
      ...
    ];

    categories: ["string1", "string2", ...];

    barChartFields: ["field1", "field2", ...];

    barChartColours: {
      string1: "#111111",
      string2: "#111111",
      ...
    };

    SAMPLE DATA:
    const data = [
  {
    category: "cat1",
    field1: 10,
    field2: 20
  },
  {
    category: "cat2",
    field1: 10,
    field2: 20
  },
  {
    category: "cat3",
    field1: 10,
    field2: 20
  },
  {
    category: "cat4",
    field1: 10,
    field2: 20
  }
];
const categories = ["cat1", "cat2", "cat3", "cat4"];

const barChartFields = ["field1", "field2"];

const barChartColours = { field1: "#03DAC5", field2: "#CF6679" };
 */

// const data = [
//   {
//     category: "cat1",
//     field1: 10,
//     field2: 20
//   },
//   {
//     category: "cat2",
//     field1: 10,
//     field2: 20
//   },
//   {
//     category: "cat3",
//     field1: 10,
//     field2: 20
//   },
//   {
//     category: "cat4",
//     field1: 10,
//     field2: 20
//   }
// ];
// const categories = ["cat1", "cat2", "cat3", "cat4"];

// const barChartFields = ["field1", "field2"];

// const barChartColours = { field1: "#03DAC5", field2: "#f44336" };

const GroupedBarChart = ({
  data,
  categories,
  barChartFields,
  barChartColours,
  chartColour = "#BB86FC"
}) => {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = UseResizeObserver(wrapperRef);

  const maxY = data.reduce((acc, data) => {
    let highestFieldValue;
    barChartFields.forEach(field => {
      if (highestFieldValue) {
        if (data[field] > highestFieldValue) highestFieldValue = data[field];
      } else highestFieldValue = data[field];
    });

    return highestFieldValue > acc ? highestFieldValue : acc;
  }, 0);

  useEffect(() => {
    if (!dimensions) return;

    const svg = select(svgRef.current);

    const wrapper = select(wrapperRef.current);

    const yScale = scaleLinear()
      .domain([0, Math.round(maxY * 1.3)])
      .range([dimensions.height, 0]);

    const xScale0 = scaleBand()
      .domain(categories)
      .range([0, dimensions.width])
      .padding(0.2);

    const xScale1 = scaleBand()
      .domain(barChartFields)
      .range([0, xScale0.bandwidth()]);

    const xAxis = axisBottom(xScale0).ticks(data.length);

    const yAxis = axisLeft(yScale);

    svg
      .select(".x-axis")
      .style("transform", `translateY(${dimensions.height}px)`)
      .style("color", chartColour)
      .style("opacity", "0")
      .call(xAxis)
      .transition()
      .style("opacity", "1")
      .duration(700);

    svg
      .select(".y-axis")
      .style("color", chartColour)
      .style("opacity", "0")
      .call(yAxis)
      .transition()
      .style("opacity", "1")
      .duration(700);

    const groups = svg
      .selectAll(".group")
      .data(data)
      .join("g")
      .attr("class", "group")
      .attr("transform", d => `translate(${xScale0(d.category)},0)`);

    groups
      .selectAll(".bar")
      .data(d => {
        const elementArray = [];
        barChartFields.forEach(field =>
          elementArray.push({ category: d.category, [field]: d[field] })
        );
        return elementArray;
      })
      .join("rect")
      .attr("class", "bar")
      .style("fill", (d, i) => barChartColours[barChartFields[i]])
      .attr("x", (d, i) => xScale1(barChartFields[i]))
      .attr("y", -dimensions.height)
      .attr("width", xScale1.bandwidth())
      .attr("transform", "scale(1, -1)")
      .on("mouseover", (d, i) => {
        wrapper
          .append("div")
          .attr("class", "tooltip")
          .style("opacity", 0)
          .style("position", "absolute")
          .style("text-align", "center")
          .style("width", "60px")
          .style("padding", "6px")
          .style("background-color", "#363636")
          .style("font-size", "0.75rem")
          .style("color", barChartColours[barChartFields[i]])
          .style("border", `2px solid ${barChartColours[barChartFields[i]]}`)
          .style("font-weight", "bold")
          .style("border-radius", "4px")
          .style("pointer-events", "none")
          .html(`${d[barChartFields[i]]}`)
          .style("left", `${event.pageX + 20}px`)
          .style("top", `${event.pageY}px`)
          .transition()
          .style("opacity", 1)
          .duration(200);
      })
      .on("mousemove", () => {
        wrapper
          .select(".tooltip")
          .style("left", `${event.pageX + 15}px`)
          .style("top", `${event.pageY}px`);
      })
      .on("mouseleave", () => {
        wrapper.select(".tooltip").remove();
      })
      .transition()
      .attr(
        "height",
        (d, i) => dimensions.height - yScale(d[barChartFields[i]])
      )
      .duration(1000);
  }, [
    data,
    dimensions,
    barChartColours,
    barChartFields,
    categories,
    chartColour,
    maxY
  ]);

  return (
    <>
      <SVGWrapper ref={wrapperRef}>
        <SVG ref={svgRef}>
          <g className="x-axis" />
          <g className="y-axis" />
        </SVG>
      </SVGWrapper>
    </>
  );
};

export default GroupedBarChart;

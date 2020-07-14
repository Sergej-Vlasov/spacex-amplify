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
    PROPS
    data: [1, 2, 3, 4, 5]

    categories: ['cat1', "cat2"...]

    categoryColours: ["#111111", "#222222", ...]

*/
// const sampleData = [3, 9, 4, 1, 10, 6, 8, 2];

// const categories = [
//   "cat1",
//   "cat2",
//   "cat3",
//   "cat4",
//   "cat5",
//   "cat6",
//   "cat7",
//   "cat8"
// ];

// const categoryColours = [
//   "#64dd17",
//   "#dd2c00",
//   "#64dd17",
//   "#f44336",
//   "#64dd17",
//   "#dd2c00",
//   "#64dd17",
//   "#f44336"
// ];

const BarChart = ({
  data,
  categories,
  categoryColours,
  chartColour = "#BB86FC"
}) => {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = UseResizeObserver(wrapperRef);

  const maxY = data.reduce((acc, val) => (val > acc ? val : acc), 0);

  useEffect(() => {
    if (!dimensions) return;

    const svg = select(svgRef.current);

    const wrapper = select(wrapperRef.current);

    const yScale = scaleLinear()
      .domain([0, Math.round(maxY * 1.3)])
      .range([dimensions.height, 0]);

    const xScale = scaleBand()
      .domain(categories)
      .range([0, dimensions.width])
      .padding(0.3);

    const xAxis = axisBottom(xScale).ticks(data.length);

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

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .attr("fill", (d, i) => categoryColours[i])
      .style("transform", "scale(1, -1)") //flipping bars to animate from bottom to top
      .attr("x", (d, i) => xScale(categories[i]))
      .attr("y", -dimensions.height) // setting to -150 because it flips relative to origin
      .attr("width", xScale.bandwidth())
      .on("mouseover", (value, index) => {
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
          .style("color", categoryColours[index])
          .style("border", `2px solid ${categoryColours[index]}`)
          .style("font-weight", "bold")
          .style("border-radius", "4px")
          .style("pointer-events", "none")
          .html(`${value}`)
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
      .attr("height", value => dimensions.height - yScale(value))
      .duration(1000);
  }, [data, dimensions, maxY, chartColour, categories, categoryColours]);

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

export default BarChart;

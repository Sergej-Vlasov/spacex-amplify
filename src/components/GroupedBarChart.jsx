import React, { useRef, useEffect, useState } from "react";
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

const initialData = [
  { rocket: "falcon1", length: 100, diameter: 10 },
  { rocket: "falcon2", length: 50, diameter: 5 },
  { rocket: "falcon3", length: 120, diameter: 60 },
  { rocket: "falcon4", length: 90, diameter: 30 }
];

const GroupedBarChart = () => {
  const [data] = useState(initialData);
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = UseResizeObserver(wrapperRef);

  const rockets = initialData.map(data => data.rocket);

  const maxLength = initialData.reduce(
    (acc, data) => (data.length > acc ? data.length : acc),
    0
  );

  useEffect(() => {
    if (!dimensions) return;

    const svg = select(svgRef.current);

    const wrapper = select(wrapperRef.current);

    const yScale = scaleLinear()
      .domain([0, maxLength])
      .range([dimensions.height, 0]);

    const xScale = scaleBand()
      .domain(rockets.map((val, ind) => ind))
      .range([0, dimensions.width])
      .padding(0.5);

    const xAxis = axisBottom(xScale).ticks(data.length);

    const yAxis = axisLeft(yScale);

    svg
      .select(".x-axis")
      .style("transform", `translateY(${dimensions.height}px)`)
      .style("color", "#BB86FC")
      .call(xAxis);

    svg.select(".y-axis").style("color", "#BB86FC").call(yAxis);

    console.log(yScale(1), xScale(1));

    svg
      .selectAll(".group")
      .data(data)
      .join("g")
      .attr("class", "group")
      .attr("x", (value, index) => xScale(index))
      .attr("y", dimensions.height)
      .attr("width", xScale.bandwidth())
      .selectAll(".bar")
      .data(data => data)
      .join("rect")
      .style("transform", "scale(1, -1)") //flipping bars to animate from bottom to top
      .attr("y", -dimensions.height) // setting to -150 because it flips relative to origin
      .attr("class", "bar")
      .attr("fill", "#3700b3")
      .on("mouseover", (value, index) => {
        wrapper
          .append("div")
          .attr("class", "tooltip")
          .style("opacity", 0)
          .style("position", "absolute")
          .style("text-align", "center")
          .style("width", "60px")
          .style("height", "28px")
          .style("padding", "2px")
          .style("background-color", "#A0A0A0")
          .style("font-size", "1rem")
          .style("color", index % 2 === 1 ? "#03DAC5" : "#CF6679")
          .style("border", "0px")
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
  }, [data, dimensions, maxLength, rockets]);

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

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

const BarChart = () => {
  const [data] = useState([25, 30, 45, 60, 20, 65, 75]);
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = UseResizeObserver(wrapperRef);

  useEffect(() => {
    if (!dimensions) return;

    const svg = select(svgRef.current);

    const wrapper = select(wrapperRef.current);

    const yScale = scaleLinear().domain([0, 150]).range([dimensions.height, 0]);

    const xScale = scaleBand()
      .domain(data.map((value, index) => index))
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

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .attr("fill", (value, index) => (index % 2 === 1 ? "#03DAC5" : "#CF6679"))
      .style("transform", "scale(1, -1)") //flipping bars to animate from bottom to top
      .attr("x", (value, index) => xScale(index))
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
  }, [data, dimensions]);

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

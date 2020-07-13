import React, { useRef, useEffect, useState } from "react";
import {
  select,
  line,
  curveCardinal,
  axisBottom,
  axisLeft,
  scaleLinear
} from "d3";
import { SVG, SVGWrapper } from "../styledComponents";
import { UseResizeObserver } from "../hooks";

const LineChart = () => {
  const [data] = useState([25, 30, 45, 60, 20, 65, 75]);
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = UseResizeObserver(wrapperRef);

  useEffect(() => {
    if (!dimensions) return;

    const svg = select(svgRef.current);

    const yScale = scaleLinear().domain([0, 150]).range([dimensions.height, 0]);

    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, dimensions.width]);

    const xAxis = axisBottom(xScale)
      .ticks(data.length)
      .tickFormat(index => index + 1);
    const yAxis = axisLeft(yScale);

    svg
      .select(".x-axis")
      .style("transform", `translateY(${dimensions.height}px)`)
      .style("color", "#BB86FC")
      .call(xAxis);

    svg.select(".y-axis").style("color", "#BB86FC").call(yAxis);

    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);

    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("class", "line")
      .attr("d", myLine)
      .attr("fill", "none")
      .attr("stroke", "#BB86FC")
      .attr("stroke-width", "3")
      .attr("stroke-dasharray", function () {
        const length = this.getTotalLength();
        return `${length} ${length}`;
      })
      .attr("stroke-dashoffset", function () {
        const length = this.getTotalLength();
        return length;
      })
      .transition()
      .attr("stroke-dashoffset", 0)
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

export default LineChart;

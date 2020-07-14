import React, { useRef, useEffect } from "react";
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

/*
    PROPS
    data: [1, 2, 3, 4, 5]


*/

// const data = [25, 30, 45, 60, 20, 65, 75];

const LineChart = ({ data, customMaxY, chartColour = "#BB86FC" }) => {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = UseResizeObserver(wrapperRef);

  const maxY = data.reduce((acc, val) => (val > acc ? val : acc), 0);

  useEffect(() => {
    if (!dimensions) return;

    const svg = select(svgRef.current);

    const yScale = scaleLinear()
      .domain([0, customMaxY || Math.round(maxY * 1.3)])
      .range([dimensions.height, 0]);

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
      .style("opacity", "0")
      .style("color", chartColour)
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
  }, [data, dimensions, chartColour, maxY]);

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

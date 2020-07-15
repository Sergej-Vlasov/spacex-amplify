import React, { useEffect, useRef } from "react";
import {
  select,
  scaleBand,
  axisBottom,
  stack,
  max,
  scaleLinear,
  axisLeft,
  event
} from "d3";
import { UseResizeObserver } from "../hooks";
import { SVG, SVGWrapper } from "../styledComponents";

// const data = [
//   {
//     year: 1980,
//     "🥑": 10,
//     "🍌": 20,
//     "🍆": 30
//   },
//   {
//     year: 1990,
//     "🥑": 20,
//     "🍌": 40,
//     "🍆": 60
//   },
//   {
//     year: 2000,
//     "🥑": 30,
//     "🍌": 45,
//     "🍆": 80
//   },
//   {
//     year: 2010,
//     "🥑": 40,
//     "🍌": 60,
//     "🍆": 100
//   },
//   {
//     year: 2020,
//     "🥑": 50,
//     "🍌": 80,
//     "🍆": 120
//   }
// ];

// const keys = ["🥑", "🍌", "🍆"];

// const sequenceAttribute = "year";

// const colors = {
//   "🥑": "#64dd17",
//   "🍌": "#dd3333",
//   "🍆": "#03DAC5"
// };

const StackedBarChart = ({
  data,
  keys,
  colors,
  sequenceAttribute,
  chartColour = "#BB86FC"
}) => {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = UseResizeObserver(wrapperRef);

  useEffect(() => {
    const wrapper = select(wrapperRef.current);
    const svg = select(svgRef.current);
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    const stackGenerator = stack().keys(keys);
    const layers = stackGenerator(data);
    const extent = [
      0,
      max(layers, layer => max(layer, sequence => sequence[1]))
    ];

    const xScale = scaleBand()
      .domain(data.map(d => d[sequenceAttribute]))
      .range([0, width])
      .padding(0.25);

    const yScale = scaleLinear().domain(extent).range([height, 0]);
    svg
      .selectAll(".layer")
      .data(layers)
      .join("g")
      .attr("class", "layer")
      .attr("fill", layer => colors[layer.key])
      .style("transform", "scale(1, -1)")
      .selectAll("rect")
      .data(layer => layer)
      .join("rect")
      .attr("x", sequence => xScale(sequence.data[sequenceAttribute]))
      .attr("width", xScale.bandwidth())
      .attr("y", sequence => -yScale(sequence[0]))
      .on("mouseover", (sequence, index) => {
        const key = Object.entries(sequence.data)
          .filter(([key]) => keys.includes(key))
          .find(([key, value]) => value === sequence[1] - sequence[0]);

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
          .style("font-weight", "bold")
          .style("color", colors[key[0]])
          .style("border", `2px solid ${colors[key[0]]}`)
          .style("border-radius", "4px")
          .style("pointer-events", "none")
          .html(`${sequence[1] - sequence[0]}`)
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
      .attr("height", sequence => yScale(sequence[0]) - yScale(sequence[1]))
      .duration(310)
      .delay(sequence => {
        const key = Object.entries(sequence.data)
          .filter(([key]) => keys.includes(key))
          .find(([key, value]) => value === sequence[1] - sequence[0])[0];
        return (930 / keys.length) * keys.indexOf(key);
      });

    const xAxis = axisBottom(xScale);
    svg
      .select(".x-axis")
      .style("color", chartColour)
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis);

    const yAxis = axisLeft(yScale);
    svg.select(".y-axis").style("color", chartColour).call(yAxis);
  }, [dimensions, chartColour, data, keys, colors, sequenceAttribute]);

  return (
    <SVGWrapper ref={wrapperRef}>
      <SVG ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </SVG>
    </SVGWrapper>
  );
};

export default StackedBarChart;

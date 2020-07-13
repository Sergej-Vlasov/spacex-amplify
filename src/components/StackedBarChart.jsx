import React, { useEffect, useRef } from "react";
import {
  select,
  scaleBand,
  axisBottom,
  stack,
  max,
  scaleLinear,
  axisLeft,
  stackOrderAscending,
  event
} from "d3";
import { UseResizeObserver } from "../hooks";
import { SVG, SVGWrapper } from "../styledComponents";

const data = [
  {
    year: 1980,
    "🥑": 10,
    "🍌": 20,
    "🍆": 30
  },
  {
    year: 1990,
    "🥑": 20,
    "🍌": 40,
    "🍆": 60
  },
  {
    year: 2000,
    "🥑": 30,
    "🍌": 45,
    "🍆": 80
  },
  {
    year: 2010,
    "🥑": 40,
    "🍌": 60,
    "🍆": 100
  },
  {
    year: 2020,
    "🥑": 50,
    "🍌": 80,
    "🍆": 120
  }
];

const keys = ["🥑", "🍌", "🍆"];

const colors = {
  "🥑": "#03DAC5",
  "🍌": "#CF6679",
  "🍆": "#03DAC5"
};

const StackedBarChart = () => {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = UseResizeObserver(wrapperRef);

  // will be called initially and on every data change
  useEffect(() => {
    const wrapper = select(wrapperRef.current);
    const svg = select(svgRef.current);
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    // stacks / layers
    const stackGenerator = stack().keys(keys).order(stackOrderAscending);
    const layers = stackGenerator(data);
    const extent = [
      0,
      max(layers, layer => max(layer, sequence => sequence[1]))
    ];

    // scales
    const xScale = scaleBand()
      .domain(data.map(d => d.year))
      .range([0, width])
      .padding(0.25);

    const yScale = scaleLinear().domain(extent).range([height, 0]);

    // rendering
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
      .attr("x", sequence => xScale(sequence.data.year))
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
          .style("height", "28px")
          .style("padding", "2px")
          .style("background-color", "#A0A0A0")
          .style("font-size", "1rem")
          .style("color", colors[key[0]])
          .style("border", "0px")
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
          .find(([key, value]) => value === sequence[1] - sequence[0]);
        switch (key[0]) {
          case "🥑":
            return 0;
          case "🍌":
            return 310;
          case "🍆":
            return 620;
          default:
            return 0;
        }
      });

    // axes
    const xAxis = axisBottom(xScale);
    svg
      .select(".x-axis")
      .style("color", "#BB86FC")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis);

    const yAxis = axisLeft(yScale);
    svg.select(".y-axis").style("color", "#BB86FC").call(yAxis);
  }, [dimensions]);

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

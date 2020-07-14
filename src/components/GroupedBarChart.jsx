import React, { useRef, useEffect, useState } from "react";
import {
  select,
  axisBottom,
  axisLeft,
  scaleLinear,
  scaleBand,
  event,
  scaleOrdinal
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

    const xScale0 = scaleBand()
      .domain(rockets)
      .range([0, dimensions.width])
      .padding(0.2);

    const xScale1 = scaleBand()
      .domain(["length", "diameter"])
      .range([0, xScale0.bandwidth()]);
    // .domain(["length", "diameter"])
    // .range([0, dimensions.width / rockets.length]);

    const xAxis = axisBottom(xScale0).ticks(data.length);

    const yAxis = axisLeft(yScale);

    svg
      .select(".x-axis")
      .style("transform", `translateY(${dimensions.height}px)`)
      .style("color", "#BB86FC")
      .call(xAxis);

    svg.select(".y-axis").style("color", "#BB86FC").call(yAxis);

    // console.log(yScale(), x0Scale());

    const groups = svg
      .selectAll(".group")
      .data(data)
      .join("g")
      .attr("class", "group")
      .attr("transform", data => `translate(${xScale0(data.rocket)},0)`);

    groups
      .selectAll(".bar.length")
      .data(data => [data])
      .join("rect")
      .attr("class", "bar length")
      .style("fill", "green")
      .attr("x", d => xScale1("length"))
      .attr("y", d => -dimensions.height)
      .attr("width", xScale1.bandwidth())
      .attr("transform", "scale(1, -1)")
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
          .style("color", index % 2 === 1 ? "#03DAC5" : "#CF6679")
          .style(
            "border",
            `2px solid ${index % 2 === 1 ? "#03DAC5" : "#CF6679"}`
          )
          .style("font-weight", "bold")
          .style("border-radius", "4px")
          .style("pointer-events", "none")
          .html(`${value.length}`)
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
      .attr("height", d => dimensions.height - yScale(d.length))
      .duration(1000);

    groups
      .selectAll(".bar.diameter")
      .data(data => [data])
      .join("rect")
      .attr("class", "bar diameter")
      .style("fill", "blue")
      .attr("x", d => xScale1("diameter"))
      .attr("y", d => -dimensions.height)
      .attr("width", xScale1.bandwidth())
      .attr("transform", "scale(1, -1)")
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
          .style("color", index % 2 === 1 ? "#03DAC5" : "#CF6679")
          .style(
            "border",
            `2px solid ${index % 2 === 1 ? "#03DAC5" : "#CF6679"}`
          )
          .style("font-weight", "bold")
          .style("border-radius", "4px")
          .style("pointer-events", "none")
          .html(`${value.diameter}`)
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
      .attr("height", d => dimensions.height - yScale(d.diameter))
      .duration(1000);

    // .on("mouseover", (value, index) => {
    //   wrapper
    //     .append("div")
    //     .attr("class", "tooltip")
    //     .style("opacity", 0)
    //     .style("position", "absolute")
    //     .style("text-align", "center")
    //     .style("width", "60px")
    //     .style("height", "28px")
    //     .style("padding", "2px")
    //     .style("background-color", "#A0A0A0")
    //     .style("font-size", "1rem")
    //     .style("color", index % 2 === 1 ? "#03DAC5" : "#CF6679")
    //     .style("border", "0px")
    //     .style("border-radius", "4px")
    //     .style("pointer-events", "none")
    //     .html(`${value}`)
    //     .style("left", `${event.pageX + 20}px`)
    //     .style("top", `${event.pageY}px`)
    //     .transition()
    //     .style("opacity", 1)
    //     .duration(200);
    // })
    // .on("mousemove", () => {
    //   wrapper
    //     .select(".tooltip")
    //     .style("left", `${event.pageX + 15}px`)
    //     .style("top", `${event.pageY}px`);
    // })
    // .on("mouseleave", () => {
    //   wrapper.select(".tooltip").remove();
    // })

    // svg.selectAll(".bar")
    // .transition()
    // .attr("height", value => dimensions.height - yScale(value))
    // .duration(1000);
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

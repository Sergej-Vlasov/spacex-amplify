import styled, { createGlobalStyle } from "styled-components/macro";

export const Global = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    background-color: #121212;
    color: #ffffff;
    font-size: 1rem;
  }
`;

export const Container = styled.div`
  margin: 1rem auto;
  height: 40vh;
  width: 40vw;
  background-color: #363636;
  border-radius: 0.25rem;
  text-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SVG = styled.svg`
  overflow: visible;
  width: 100%;
  display: block;
  position: relative;
`;

export const SVGWrapper = styled.div`
  padding: 1.25rem 0.5rem 1.25rem 1.75rem;
`;

export const LogoContainer = styled.div`
  padding: 1rem;
  height: 2rem;
`;

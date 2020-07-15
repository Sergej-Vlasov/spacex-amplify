import styled, { createGlobalStyle, keyframes } from "styled-components/macro";

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

export const ChartContainer = styled.div`
  margin: 0 auto;
  height: 50vh;
  width: 100%;
  background-color: #363636;
  border-radius: 0.25rem;
  text-align: middle;
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
  height: 100%;
  width: 100%;
`;

export const LogoContainer = styled.div`
  display: inline-block;
  width: 20rem;
  padding: 0.5rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  border-bottom: 2px solid #2f2f2f;
  box-shadow: 0 3px 6px #2f2f2f;
`;

const glow = keyframes`
  0% { opacity: 0.2 }
  50% { opacity: 0.8 }
  100% { opacity: 0.2 }
`;

export const LoadingPlaceholder = styled.div`
  display: inline-block;
  margin: auto;
  width: 10rem;
  animation: ${glow} 2s ease-in-out infinite;
`;

export const LoadingWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

export const ChartHeader = styled.h3`
  display: block;
  text-align: center;
  padding-bottom: 1rem;
  color: #bb86fc;
`;

export const ChartHeaderWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const ChartComponentWrapper = styled.div`
  background: #363636;
  height: 100%;
  margin: 1rem auto;
`;

export const Button = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 0;
  border-radius: 4px;
  color: #bb86fc;
  text-transform: uppercase;
  font-weight: bold;
  background: transparent;
  padding: 0.25rem;
  cursor: pointer;
  font-size: 0.75rem;
`;

export const ComponentWrapper = styled.div`
  background: transparent;
  display: flex;
  justify-content: space-around;
  height: 100%;
  margin: 1rem 0;
`;

export const ChartBlockWrapper = styled.div`
  background: #363636;
  padding: 2rem;
  width: ${props => props.width};
  height: 100%;
`;

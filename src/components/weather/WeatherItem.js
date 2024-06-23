import React from "react";
import styled from "styled-components";
import { Body1, Body2 } from "../../styles/font";

const WeatherItem = ({ location, woosan, temperature }) => {
  return (
    <WeatherItemWrapper>
      <div className="location">
        <Body1>{location}</Body1>
      </div>
      <div className="temperature">
        <Body2>{temperature} °C</Body2>
      </div>
    </WeatherItemWrapper>
  );
};

const WeatherItemWrapper = styled.div`
  padding: 1rem;
  width: 45%;
  .location {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    margin-bottom: 10px;
  }
  .temperature {
    margin-top: 0.5rem;
    justify-content: center;
    text-align: center;
  }
`;

export default WeatherItem;

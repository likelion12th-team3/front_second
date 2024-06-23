import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Body3 } from "../../styles/font";
// import { useParams } from "react-router-dom";
import WeatherItem from "./WeatherItem";
import { instance } from "../../api/instance";

const WeatherListSection = () => {
  //   const { postid } = useParams();
  const [weatherList, setWeatherList] = useState([]);

  const fetchWeatherList = async () => {
    try {
      const res = await instance.get("/userdata/users/");
      setWeatherList(res.data[0].locations);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchWeatherList();
  }, []);

  const isWoosan = weatherList.some((item) => item.woosan === true);

  return (
    <WeatherListSectionWrapper>
      <div className="weather">
        {weatherList?.map((item) => (
          <WeatherItem
            key={item.id}
            location={item.gu_name}
            woosan={item.woosan}
            temperature={item.temperature}
          />
        ))}
      </div>
      <div className="comment">
        {isWoosan ? (
          <div>
            <Body3>오늘 비가 와요 ☂️</Body3>
          </div>
        ) : (
          <div>
            <Body3>오늘 비가 오지 않아요 ☀️</Body3>
          </div>
        )}
      </div>
    </WeatherListSectionWrapper>
  );
};

const WeatherListSectionWrapper = styled.section`
  padding: 2rem 2rem;
  .weather {
    display: flex;
    justify-content: space-between;
  }
  .comment {
    margin-top: 2rem;
    text-align: center;
  }
`;

export default WeatherListSection;

import React from "react";
import User from "../user/User.js";
import NewsListSection from "../news/NewsListSection.js";
import WeatherListSection from "../weather/WeatherListSection.js";

const Main = () => {
  return (
    <div>
      <User></User>
      <WeatherListSection></WeatherListSection>
      <NewsListSection></NewsListSection>
    </div>
  );
};

export default Main;

import "./App.css";
import styled from "styled-components";
import React from "react";
import Main from "./components/main/Main";
import { useState, useEffect } from "react";

function App() {
  const [weatherList, setWeatherList] = useState([]);
  const [bgUrl, setBgUrl] = useState("");

  const fetchWeatherList = async () => {
    //     try {
    //       const res = await instance.get(
    //         `/board/post-detail/${postid}/comment-list/`
    //       );
    setWeatherList([
      {
        location: "마포구",
        temperature: 26.5,
        woosan: false,
      },
      {
        location: "노원구",
        temperature: 30.5,
        woosan: false,
      },
    ]);
    //     } catch (err) {
    //       alert(err);
    //     }
  };

  useEffect(() => {
    fetchWeatherList();
    const isWoosan = weatherList.some((item) => item.woosan === true);
    const bg_url = isWoosan
      ? "https://get.pxhere.com/photo/cloud-sky-sunlight-atmosphere-weather-storm-cumulus-darkness-overcast-grey-cloudy-sky-depression-meteorological-phenomenon-1092280.jpg"
      : "https://cdn.pixabay.com/photo/2018/08/06/22/55/sun-3588618_1280.jpg";
    setBgUrl(bg_url);
  }, [weatherList]);

  return (
    <AppContainer bgUrl={bgUrl}>
      <Main />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 376px;
  height: 100vh;
  overflow: scroll;
  margin: 0 auto;
  //background-image: url("https://cdn.pixabay.com/photo/2018/08/06/22/55/sun-3588618_1280.jpg");
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-position: top center;
`;

export default App;

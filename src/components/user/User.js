import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const User = () => {
  const [userName, setUserName] = useState("");

  // useEffect(() => {
  //   axios.get("YOUR_BACKEND_API_URL")
  //     .then(response => {
  //       setUserName(response.data.name);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  return (
    <GreetingContainer>
      <UserName>서아님</UserName>
      <GreetingMessage>오늘 하루도 화이팅:)</GreetingMessage>
    </GreetingContainer>
  );
};

const GreetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  height: 150px;
  margin: 0 auto;
  color: #f9f9f9;
  opacity: 80%;
`;
//#f9f9f9

const UserName = styled.div`
  font-size: 35px;
  margin-left: 20px;
  margin-top: 25px;
`;

const GreetingMessage = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 25px;
`;

export default User;

import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { instance } from "../../api/instance";

const User = () => {
  const [userName, setUserName] = useState("");

  const fetchUserName = async () => {
    try {
      const res = await instance.get("/userdata/users/");
      setUserName(res.data[0].name);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchUserName();
  }, []);

  return (
    <GreetingContainer>
      <UserName>{userName}님</UserName>
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
  height: 130px;
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

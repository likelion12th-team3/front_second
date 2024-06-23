import React from "react";
import NewsItem from "./NewsItem";
import { useState } from "react";
import axios from "axios";
import useEffect from "axios";
import styled from "styled-components";

const NewsListSection = () => {
  const [news, setNews] = useState([]);
  const [tags, setTags] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("API_URL")
  //     .then((response) => {
  //       setNews(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  const handleClickTagButton = async () => {
    alert("hihi");
  };

  return (
    <ListContainer>
      <TagContainer>
        {tags.map((tag, index) => (
          <Tag key={index}>#{tag}</Tag>
        ))}

        <Tag onClick={handleClickTagButton} key={11}>
          #정치
        </Tag>
        <Tag key={12}> #경제</Tag>
        <Tag key={13}> #연예</Tag>
      </TagContainer>
      {news.map((item, index) => (
        <NewsItem
          key={index}
          title={item.title}
          content={item.content}
          link={item.link}
        />
      ))}

      <NewsItem
        key={1}
        title={"[속보] 집가고 싶다"}
        content={"집이 가고 싶다고 밝혀져"}
        link={"https://hihi.com"}
      />

      <NewsItem
        key={2}
        title={"Asd"}
        content={"SDfsdfsdf"}
        link={"sdfsdfsdfsdfzxczxc"}
      />
    </ListContainer>
  );
};

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 15px;
`;

const Tag = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
  border-radius: 15px;
  padding: 5px 10px;
  margin-right: 10px;
  font-size: 14px;
  cursor: pointer;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export default NewsListSection;

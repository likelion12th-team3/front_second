import React, { useState, useRef, useEffect } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";
import styled from "styled-components";
import { instance } from "../../api/instance";

const NewsListSection = () => {
  const [news, setNewsList] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const newsRefs = useRef([]);

  const fetchNewsList = async () => {
    // Mock data fetching
    try {
      // 실제 API 호출
      const res = await instance.get("/userdata/users/");
      setNewsList(res.data[0].news);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchNewsList();
  }, []);

  const handleClickTagButton = (category) => {
    const index = news.findIndex((item) => item.category === category);
    if (index !== -1) {
      setHighlightedIndex(index);
    }
  };

  return (
    <ListContainer>
      <TagContainer>
        {news.map((item, index) => (
          <Tag
            onMouseEnter={() => handleClickTagButton(item.category)}
            key={index}
          >
            #{item.category}
          </Tag>
        ))}
        {/* 
        <Tag onClick={() => handleClickTagButton("정치")}>#정치</Tag>
        <Tag onClick={() => handleClickTagButton("경제")}>#경제</Tag>
        <Tag onClick={() => handleClickTagButton("연예")}>#연예</Tag> */}
      </TagContainer>
      {news.map((item, index) => (
        <NewsItemContainer
          key={item.id}
          ref={(el) => (newsRefs.current[index] = el)}
          highlighted={highlightedIndex === index}
        >
          <NewsItem
            title={item.title}
            content={item.content}
            link={item.link}
          />
        </NewsItemContainer>
      ))}
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
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const NewsItemContainer = styled.div`
  background-color: ${(props) =>
    props.highlighted ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.0)"};
  transition: background-color 0.3s;
`;

export default NewsListSection;

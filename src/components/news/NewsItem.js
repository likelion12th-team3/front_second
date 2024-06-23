import React from "react";
import styled from "styled-components";

const NewsItem = ({ title, content, link }) => {
  return (
    <NewsContainer>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <StyledLink href={link} aria-label="뉴스 링크">
        {link}
      </StyledLink>
    </NewsContainer>
  );
};

const NewsContainer = styled.div`
  width: 330px;
  height: 80px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: 20px;
  border-radius: 5px;
  border-bottom: solid 1px rgba(255, 255, 255, 0.2);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 15px;
  color: #f9f9f9;
`;

const Content = styled.div`
  font-size: 10px;
  color: #f9f9f9;
`;

const StyledLink = styled.a`
  color: #1a0dab;
  text-decoration: none;
  target="_blank" &:hover {
    text-decoration: underline;
  }
`;

export default NewsItem;

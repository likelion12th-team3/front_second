import styled from "styled-components";

export const Body1 = styled.div`
  font-family: "SUITE-Regular";
  color: ${(props) =>
    props.color ||
    "#f9f9f9"}; //color를 props으로 넘겨주지 않을시 (undefind) 기본값은 검은색
  font-size: 1.5rem;
  font-weight: 400;
  font-style: normal;
  line-height: 100%;
  padding: ${(props) => props.padding || ""};
  margin: ${(props) => props.margin || ""};
  text-decoration-line: ${(props) => props.underline && "underline"};
`;

export const Body2 = styled.div`
  font-family: "SUITE-Regular";
  color: ${(props) =>
    props.color ||
    "#f9f9f9"}; //color를 props으로 넘겨주지 않을시 (undefind) 기본값은 검은색
  font-size: 3.5rem;
  font-weight: 400;
  font-style: normal;
  opacity: 80%;
  line-height: 100%;
  padding: ${(props) => props.padding || ""};
  margin: ${(props) => props.margin || ""};
  text-decoration-line: ${(props) => props.underline && "underline"};
`;

export const Body3 = styled.div`
  font-family: "SUITE-Regular";
  color: ${(props) =>
    props.color ||
    "#f9f9f9"}; //color를 props으로 넘겨주지 않을시 (undefind) 기본값은 검은색
  font-size: 2.5rem;
  font-weight: 400;
  font-style: normal;
  opacity: 80%;
  line-height: 100%;
  padding: ${(props) => props.padding || ""};
  margin: ${(props) => props.margin || ""};
  text-decoration-line: ${(props) => props.underline && "underline"};
`;

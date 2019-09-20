import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    float: left;
    margin-right: 30px;
  }
`;

const Social = ({ children }) => {
  return (
    <Wrapper>
      <ul>
        {children.map((child, index) => (
          <li key={index}>{child}</li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Social;

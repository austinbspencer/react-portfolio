import styled from "styled-components";

export const Div = styled.div`
  //   display: ${({ showSkills }) => (showSkills ? "block" : "none")};
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

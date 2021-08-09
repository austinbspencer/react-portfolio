import styled from "styled-components";

export const Container = styled.div`
  padding-top: 80px; // To keep below new sticky navbar
  max-width: 1280px;
  width: 100%;
  margin: auto;
  z-index: 1;
`;

export const ArrowContainer = styled.div`
  z-index: 1;
  /* height: 100vh; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2); */
  /* object-fit: contain; */
`;

export const DownArrow = styled.div`
  padding-top: 100px;
  color: #01bf71;

  @media ${(props) => props.theme.breakpoints.lg} {
    padding-top: 80px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding-top: 60px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-top: 40px;
  }
`;

export const BouncyLink = styled.a`
  display: inline-block;
  position: relative;
  -moz-animation: bounce 0.7s infinite linear;
  -o-animation: bounce 0.7s infinite linear;
  -webkit-animation: bounce 0.7s infinite linear;
  animation: bounce 0.7s infinite linear;

  &:hover {
    display: inline-block;
    position: relative;
    -moz-animation: none;
    -o-animation: none;
    -webkit-animation: none;
    animation: none;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.5);
  }

  @-webkit-keyframes bounce {
    0% {
      top: 0;
    }
    50% {
      top: -0.2em;
    }
    70% {
      top: -0.3em;
    }
    100% {
      top: 0;
    }
  }
  @-moz-keyframes bounce {
    0% {
      top: 0;
    }
    50% {
      top: -0.2em;
    }
    70% {
      top: -0.3em;
    }
    100% {
      top: 0;
    }
  }
  @-o-keyframes bounce {
    0% {
      top: 0;
    }
    50% {
      top: -0.2em;
    }
    70% {
      top: -0.3em;
    }
    100% {
      top: 0;
    }
  }
  @-ms-keyframes bounce {
    0% {
      top: 0;
    }
    50% {
      top: -0.2em;
    }
    70% {
      top: -0.3em;
    }
    100% {
      top: 0;
    }
  }
  @keyframes bounce {
    0% {
      top: 0;
    }
    50% {
      top: -0.2em;
    }
    70% {
      top: -0.3em;
    }
    100% {
      top: 0;
    }
  }
`;

import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const DownArrow = styled.div`
  padding-top: 200px;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.lg} {
    padding-top: 120px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-top: 60px;
  }
`;

export const BouncyLink = styled.a`
  display: inline-block;
  position: relative;
  padding-left: 45vw;
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
    color: #01bf71;
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

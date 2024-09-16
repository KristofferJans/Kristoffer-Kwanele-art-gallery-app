import { createGlobalStyle } from "styled-components";

const breakpoints = {
  mobile: "768px",
  tablet: "1024px",
  desktop: "1280px",
};

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background-image: url(/white-gradient3.jpg)
  }

  a {
    text-decoration: none; 
  }
`;

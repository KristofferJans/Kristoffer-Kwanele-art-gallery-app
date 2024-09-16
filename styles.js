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

    @media (max-width: ${breakpoints.mobile}) {
    body {
      font-size: 14px; 
      padding: 0 10px; 
    }
  }

  @media (max-width: ${breakpoints.tablet}) 

  @media (min-width: ${breakpoints.laptop}) 

  @media (min-width: ${breakpoints.desktop}) 


  a {
    text-decoration: none; 
  }
`;

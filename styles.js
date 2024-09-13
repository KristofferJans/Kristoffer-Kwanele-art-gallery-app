import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    
  }

  .button_detailspage {
  padding: 20px;
  margin-left: -110px;
  margin-top: 165px;
  
  background-color: red;
  border: none;
  border-radius: 10px;
  position: absolute;

  font-family: Open-Sans, ;

  &:hover {
  background-color: blue;
}
  
  }
`;

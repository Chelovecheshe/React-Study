import styled from "styled-components";

export const AccordionStyled = styled.div`
  background-color: #ffffff;
  margin-bottom: 20px;
  box-sizing: border-box;
  border-radius: 3px;
  line-height: 20px;
  padding: 5px 10px;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Arrow = styled.button`
  height: 20px;
  width: 20px;
  background-repeat: no-repeat;
  outline: none;
  border: none;
  background-color: #c0c0c0;
  float: right;
  cursor: pointer;
  padding: 0;
`;

export const AccordionContent = styled.div`
  display: block;
  width: 100%;
`;

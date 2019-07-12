import styled from "styled-components";

export const AccordionStyled = styled.div`
  background-color: #ffffff;
  margin: 0 12px 12px 12px;
  border-radius: 3px;
  line-height: 20px;
  padding: 5px 10px;

  &:nth-child(1) {
    margin-top: 12px;
  }
`;

export const Arrow = styled.button`
  height: 20px;
  width: 20px;
  background-repeat: no-repeat;
  outline: none;
  border: none;
  background-color: #fcbf49;
  float: right;
  cursor: pointer;
  padding: 0;
`;

export const AccordionContent = styled.div`
  display: block;
  width: 100%;
`;

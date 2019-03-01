import styled from "styled-components";

export const AccordionStyled = styled.div`
  background-color: #ffffff;
  margin-bottom: 10px;
  border-radius: 3px;
  line-height: 20px;
  padding: 5px 10px;

  &:last-child {
    margin-bottom: 0;
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
  transition: 4s easy;
  transition-delay: 2s;
`;

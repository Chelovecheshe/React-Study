import styled from "styled-components";

export const StyledListNavigation = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 10px;
  float: right;
`;

export const StyledLink = styled.li`
  display: inline;
  box-sizing: border-box;
  padding-left: 10px;

  &:nth-child(1) {
    padding-left: 0;
  }

  & > a {
    color: black;
    text-decoration: none;
    &:visited {
      color: black;
    }
    &:link {
      color: black;
    }
    &:hover {
      color: #609da0;
    }
  }
`;

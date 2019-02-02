import styled from "styled-components";

const TableWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(
    ${props => props.columnNames.length},
    minmax(max-content, 1fr)
  );
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #f3fcfe;
  border-radius: 0 0 2px 2px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 14px;

  li {
    display: grid;
    text-align: right;
    padding: 20px 30px;
    box-sizing: border-box;
  }

  li:nth-child(${props => props.columnNames.length}n+1) {
    text-align: left;
  }
`;

export default TableWrapper;
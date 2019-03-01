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

  li {
    display: grid;
    text-align: right;
    padding: 20px 30px;
  }

  li:nth-child(${props => props.columnNames.length}n+1) {
    text-align: left;
  }

  @media (max-width: 850px) {
    li {
      padding: 5px 10px;
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    li {
      padding: 1px 5px;
    }
  }
`;

export default TableWrapper;

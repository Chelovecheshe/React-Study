import React from "react";
import PropTypes from "prop-types";
// styles
import TableWrapper from "themes/table/tableWrapper";
import TableHead from "themes/table/tableHead";
import TableContent from "themes/table/tableContent";

const Table = ({ columnNames, tableContent }) => {
  return (
    <TableWrapper columnNames={columnNames}>
      {columnNames.map((item, index) => <TableHead key={index}>{item}</TableHead>)}
      {tableContent.map(item =>
        Object.keys(item).map(key => (
          <TableContent key={key}>{item[key]}</TableContent>
        )))
      }
    </TableWrapper>
  );
};

Table.propTypes = {
  columnNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  tableContent: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      calories: PropTypes.number,
      carbs: PropTypes.number,
      fat: PropTypes.number,
      protein: PropTypes.number
    })
  ).isRequired
};

export default Table;

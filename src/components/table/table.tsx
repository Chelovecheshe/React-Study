import React, { FunctionComponent } from "react";

// styles
import TableWrapper from "../../themes/table/tableWrapper";
import TableHead from "../../themes/table/tableHead";
import TableContent from "../../themes/table/tableContent";

type TableComponent = {
  columnNames: string[],
  tableContent: object[]
}

const Table: FunctionComponent<TableComponent> = ({ columnNames, tableContent }) => {
  return (
    <TableWrapper columnNames={columnNames}>
      {columnNames.map((item: string, index: number) => (
        <TableHead key={index}>{item}</TableHead>
      ))}
      {tableContent.map((item: object) =>
        Object.keys(item).map((key: string) => (
          <TableContent key={key}>{item[key]}</TableContent>
        ))
      )}
    </TableWrapper>
  );
};

export default Table;

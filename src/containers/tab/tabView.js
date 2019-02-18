import React from "react";
import PropTypes from "prop-types";
// components
import Table from "../../components/table/table";
// containers
import Accordion from "../../containers/accordion/accordion";
// libs
import AccordionWrapper from "../../libs/withAccordion";
// styles
import TabContent from "../../themes/tab/tabContent";
// constants
import {
  ENUM,
  accordionsNames,
  contentList,
  tableColumnNames,
  tableContent
} from "../../constants/constans";

const TabView = ({ active }) => {
  return (
    <TabContent>
      {active === ENUM.FIRST && (
        <AccordionWrapper
          accordion={
            <Accordion names={accordionsNames} content={contentList} />
          }
        />
      )}
      {active === ENUM.SECOND && (
        <Table columnNames={tableColumnNames} tableContent={tableContent} />
      )}
      {active === ENUM.THIRD && <>Snack bar creator arrives soon here</>}
    </TabContent>
  );
};

TabView.propTypes = {
  active: PropTypes.number.isRequired
};

export default TabView;

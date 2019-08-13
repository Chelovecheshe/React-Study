import React from "react";
import PropTypes from "prop-types";
// components
import Table from "components/table/table";
import Snackbar from "components/snackbar/snackbar";
// containers
import Accordion from "components/accordion/accordion";
// styles
import TabContent from "themes/tab/tabContent";
// constants
import {
  ENUM,
  accordionsNames,
  contentList,
  tableColumnNames,
  tableContent,
  options,
  position,
  controlDirection
} from "constants/constants";

const TabView = ({
  active,
  changeTextAction,
  changeSnackbarVisibilityAction,
  snackbarIsVisible
}) => {
  return (
    <TabContent>
      {active === ENUM.FIRST && (
        <Accordion names={accordionsNames} content={contentList} />
      )}
      {active === ENUM.SECOND && (
        <Table columnNames={tableColumnNames} tableContent={tableContent} />
      )}
      {active === ENUM.THIRD && (
        <Snackbar
          buttonName={snackbarIsVisible ? "Hide" : "Create"}
          textHint={"Enter name of new snackbar"}
          options={options}
          position={position}
          controlDirection={controlDirection}
          changeTextAction={changeTextAction}
          changeSnackbarVisibilityAction={changeSnackbarVisibilityAction}
          snackbarIsVisible={snackbarIsVisible}
        />
      )}
    </TabContent>
  );
};

TabView.propTypes = {
  active: PropTypes.number.isRequired
};

export default TabView;

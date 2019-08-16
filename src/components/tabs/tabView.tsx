import React, { FunctionComponent } from "react";

// components
import Table from "../table/table";
import Snackbar from "../snackbar/snackbar";
// containers
import Accordion from "../accordion/accordion";
// styles
import TabContent from "../../themes/tab/tabContent";
// constants
import {
  ENUM,
  accordionsNames,
  contentList,
  tableColumnNames,
  tableContent,
  snackbarType,
  snackbarPosition,
  controlDirection
} from "../../constants/constants";

type TabViewComponent = {
  active: number,
  changeSnackbarPositionAction: (snackbarPosition: string) => { type: string; payload: string; },
  changeSnackbarTypeAction: (snackbarType: string) => { type: string; payload: string; },
  changeSnackbarTextAction: (snackbarText: string) => { type: string; payload: string; },
  changeSnackbarVisibilityAction: (snackbarVisibility: boolean) => { type: string; payload: boolean; },
  snackbarVisibility: boolean
}

const TabView: FunctionComponent<TabViewComponent> = ({
  active,
  changeSnackbarPositionAction,
  changeSnackbarTypeAction,
  changeSnackbarTextAction,
  changeSnackbarVisibilityAction,
  snackbarVisibility
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
          buttonName={snackbarVisibility ? "Hide" : "Create"}
          textHint={"Enter name of new snackbar"}
          snackbarType={snackbarType}
          snackbarPosition={snackbarPosition}
          controlDirection={controlDirection}
          changeSnackbarPositionAction={changeSnackbarPositionAction}
          changeSnackbarTypeAction={changeSnackbarTypeAction}
          changeSnackbarTextAction={changeSnackbarTextAction}
          changeSnackbarVisibilityAction={changeSnackbarVisibilityAction}
          snackbarVisibility={snackbarVisibility}
        />
      )}
    </TabContent>
  );
};

export default TabView;

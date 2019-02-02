import React, { Component } from "react";

// components
import Wrapper from "./themes/wrapper.js";
import Tabs from "./components/tab/tabs.js";
import TabContent from "./themes/tab/tabContent.js";
import Accordion from "./containers/accordion/accordion.js";
import Table from "./components/table/table.js";
// styles
import "./App.css";
// constants
import {
  accordionsNames,
  buttonsNames,
  contentList,
  tableColumnNames,
  tableContent
} from "./constants/constans.js";

class App extends Component {
  state = {
    active: 1
  };

  setActiveTab = number => {
    this.setState({ active: number });
  };

  render() {
    return (
      <Wrapper>
        <Tabs
          names={buttonsNames}
          setActiveTab={this.setActiveTab}
          active={this.state.active}
        />
        {this.state.active === 0 && (
          <TabContent>
            <Accordion names={accordionsNames} content={contentList} />
          </TabContent>
        )}
        {this.state.active === 1 && (
          <TabContent>
            <Table columnNames={tableColumnNames} tableContent={tableContent} />
          </TabContent>
        )}
        {this.state.active === 2 && (
          <TabContent>Snack bar creator arrives soon here</TabContent>
        )}
      </Wrapper>
    );
  }
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
// import faker from "faker";
import ContainerDetail from "./ContainerDetail";
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
      <ContainerDetail
        author="Sam"
        date="Toady at 6 pm"
        text="This is good!"
      ></ContainerDetail>
      </ApprovalCard>
      
      <ApprovalCard>
      <ContainerDetail
        author="Alex"
        date="Toady at 7 pm"
        text="This is good!"
      ></ContainerDetail>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

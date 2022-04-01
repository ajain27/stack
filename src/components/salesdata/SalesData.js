import React from "react";
import Graph from "../graph/Graph";
import Sales from "../sales/Sales";
import "./SalesData.css";

function SalesData() {
  return (
    <div className="salesdata m-2">
      <Graph />
      <Sales />
    </div>
  );
}

export default SalesData;

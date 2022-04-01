import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
// import Graph from "../graph/Graph";
import SalesData from "../salesdata/SalesData";

function Stackline() {
  return (
    <div>
      <Header />
      <div className=" wrapper flex h-full p-2 m-3 mt-5">
        <Sidebar />
        <SalesData />
      </div>
    </div>
  );
}

export default Stackline;

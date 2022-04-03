import { useState } from "react";
import Graph from "../graph/Graph";
import Sales from "../table/Sales";
import "./SalesData.css";
import { useStackline } from "../../context/StacklineContext";

function SalesData() {
  const sales = useStackline();
  const retailSales = sales[0].sales?.map((units) => units.retailSales);
  const unitsSold = sales[0].sales?.map((units) => units.unitsSold);
  const [salesData] = useState({
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
    datasets: [
      {
        label: "RETAIL SALES",
        data: retailSales,
        borderColor: "#0076CE",
        yAxisID: "y",
      },
      {
        label: "UNITS SOLD",
        data: unitsSold,
        borderColor: "grey",
        yAxisID: "y1",
      },
    ],
  });
  return (
    <div className="salesData m-3">
      <Graph salesData={salesData} />
      <Sales />
    </div>
  );
}

export default SalesData;

import React from "react";
import Table from "react-bootstrap/Table";
import { useStackline } from "../../context/StacklineContext";
import "./Sales.css";

function Sales() {
  const salesData = useStackline();

  const filteredData = salesData[0].sales.slice(0, 10);

  return (
    <>
      <div className="panel m-3">
        <Table hover className="table">
          <thead>
            <tr>
              <th>Week Ending</th>
              <th>Retail Sales</th>
              <th>Wholesale Sales</th>
              <th>Units Sold</th>
              <th>Retailer Margin</th>
            </tr>
          </thead>
          <tbody>
            {filteredData &&
              filteredData.map((sales) => (
                <tr>
                  <td>{sales.weekEnding}</td>
                  <td>{sales.retailSales}</td>
                  <td>{sales.wholesaleSales}</td>
                  <td>{sales.unitsSold}</td>
                  <td>{sales.retailerMargin}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Sales;

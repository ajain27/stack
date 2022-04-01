import React from "react";
import Table from "react-bootstrap/Table";
import { useStackline } from "../../context/StacklineContext";
import "./Sales.css";

function Sales() {
  const apiData = useStackline();
  const salesData = apiData[0].sales;

  const currencyFormat = (num) => {
    return (
      "$" +
      num
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
        .slice(0, -3)
    );
  };

  const changeDateFormat = (inputDate) => {
    var splitDate = inputDate.split("-");
    if (splitDate.count === 0) {
      return null;
    }
    var year = splitDate[0];
    var month = splitDate[1];
    var day = splitDate[2];

    return month + "-" + day + "-" + year;
  };

  return (
    <div className="panel m-3 salesTable">
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
          {salesData &&
            salesData.map((sales) => (
              <tr>
                <td>{changeDateFormat(sales.weekEnding)}</td>
                <td>{currencyFormat(sales.retailSales)}</td>
                <td>{currencyFormat(sales.wholesaleSales)}</td>
                <td>{sales.unitsSold}</td>
                <td>{currencyFormat(sales.retailerMargin)}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Sales;

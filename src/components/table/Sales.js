import { useState } from "react";
import Table from "react-bootstrap/Table";
import { useStackline } from "../../context/StacklineContext";
import "./Sales.css";
import { currencyFormat, changeDateFormat } from "../../utils/Custom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Sales() {
  const apiData = useStackline();
  const salesData = apiData[0].sales;

  const [sortedData, setSortedData] = useState(salesData);
  const [order, setOrder] = useState("ASC");
  const [icon, setIcon] = useState(faAngleDown);

  const sort = (col) => {
    console.log(col);
    if (order === "ASC") {
      const sorted = [...salesData].sort((a, b) => {
        return a[col] > b[col] ? 1 : -1;
      });
      setSortedData(sorted);
      setOrder("DSC");
      setIcon(faAngleUp);
    }
    if (order === "DSC") {
      const sorted = [...salesData].sort((a, b) => {
        return a[col] < b[col] ? 1 : -1;
      });
      setSortedData(sorted);
      setOrder("ASC");
      setIcon(faAngleDown);
    }
  };

  return (
    <div className="panel m-3 salesTable">
      <Table hover className="table">
        <thead>
          <tr>
            <th className="hand" onClick={() => sort("weekEnding")}>
              Week Ending <FontAwesomeIcon icon={icon} className="sort" />
            </th>
            <th className="hand" onClick={() => sort("retailSales")}>
              Retail Sales <FontAwesomeIcon icon={icon} className="sort" />
            </th>
            <th className="hand" onClick={() => sort("wholesaleSales")}>
              Wholesale Sales <FontAwesomeIcon icon={icon} className="sort" />
            </th>
            <th className="hand" onClick={() => sort("unitsSold")}>
              Units Sold <FontAwesomeIcon icon={icon} className="sort" />
            </th>
            <th className="hand" onClick={() => sort("retailerMargin")}>
              Retailer Margin <FontAwesomeIcon icon={icon} className="sort" />
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData &&
            sortedData.map((sales, i) => (
              <tr key={i}>
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

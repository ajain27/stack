import Table from "react-bootstrap/Table";
import { useStackline } from "../../context/StacklineContext";
import "./Sales.css";
import { currencyFormat, changeDateFormat } from "../../utils/Custom";

function Sales() {
  const apiData = useStackline();
  const salesData = apiData[0].sales;

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
            salesData.map((sales, i) => (
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

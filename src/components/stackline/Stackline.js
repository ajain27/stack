import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import SalesData from "../salesdata/SalesData";

import { useStackline } from "../../context/StacklineContext";

function Stackline() {
  const sales = useStackline();

  const tags = sales[0].tags;

  return (
    <div>
      <Header />
      <div className="flex m-3 mt-5 mb-5">
        <Sidebar tags={tags} />
        <SalesData />
      </div>
    </div>
  );
}

export default Stackline;

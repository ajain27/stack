import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Stackline from "./components/stackline/Stackline";
import { StacklineContext } from "./context/StacklineContext";
import SalesData from "./sample.json";

function App() {
  return (
    <>
      <StacklineContext.Provider value={SalesData}>
        <Stackline />
      </StacklineContext.Provider>
    </>
  );
}

export default App;

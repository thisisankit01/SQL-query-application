import { useState, useEffect } from "react";
import Papa from "papaparse";
import ResultTable from "./components/ResultTable";
import QueryInput from "./components/QueryInput";

// eslint-disable-next-line no-unused-vars
import { query1 } from "./utils/queries";
// eslint-disable-next-line no-unused-vars
import { query2 } from "./utils/queries";
// eslint-disable-next-line no-unused-vars
import { query3 } from "./utils/queries";
import SpinShimmer from "./components/Spin";

const App = () => {
  const csvFilePath = "https://dummy-data-csv.onrender.com/api/csv";
  const [filteredData, setFilteredData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [selectedQuery, setSelectedQuery] = useState(null); // Add selectedQuery state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(csvFilePath);
        const csvData = await response.text();
        Papa.parse(csvData, {
          header: true,
          complete: (result) => {
            setOriginalData(result.data);
          },
        });
      } catch (error) {
        console.error("Error fetching or parsing CSV data:", error);
      }
    };

    fetchData();
  }, [csvFilePath]);

  const handleQuerySubmit = (query) => {
    setSelectedQuery(query);

    const filteredResult = originalData.filter((item) => {
      if (query === "query1") {
        return item.shipCountry === "Germany";
      }
      if (query === "query2") {
        return item.employeeID === "5";
      }
      if (query === "query3") {
        return item.orderDate > "1996-07-05";
      }
      return true; // Default condition
    });

    setFilteredData(filteredResult);
  };

  const displayData = selectedQuery ? filteredData : originalData;

  return (
    <div className="max-w-[90%]">
      <h1 className="text-left my-5 text-xl font-semibold">
        SQL-like Query Application
      </h1>
      <QueryInput onQuerySelect={handleQuerySubmit} />
      {displayData.length > 0 ? (
        <ResultTable csvFilePath={csvFilePath} data={displayData} />
      ) : (
        <SpinShimmer />
      )}
    </div>
  );
};

export default App;

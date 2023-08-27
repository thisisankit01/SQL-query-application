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
    if (query === "query1") {
      const filteredResult = originalData.filter(
        (item) => item.shipCountry === "Germany"
      );
      setFilteredData(filteredResult);
    } else if (query === "query2") {
      const filteredResult = originalData.filter(
        (item) => item.employeeID === "5"
      );
      setFilteredData(filteredResult);
    } else if (query === "query3") {
      const filteredResult = originalData.filter(
        (item) => item.orderDate > "1996-07-05"
      );
      setFilteredData(filteredResult);
    }
  };

  const displayData = selectedQuery ? filteredData : originalData;

  return (
    <div className="max-w-[90%]">
      <h1 className="text-center my-5">SQL-like Query Application</h1>
      <QueryInput onQuerySelect={handleQuerySubmit} />
      <ResultTable csvFilePath={csvFilePath} data={displayData} />
    </div>
  );
};

export default App;

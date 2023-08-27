import { Select } from "antd";

// eslint-disable-next-line react/prop-types
const QueryInput = ({ onQuerySelect }) => {
  const handleQuerySelect = (value) => {
    if (value) {
      onQuerySelect(value);
    }
  };

  return (
    <div className="w-2xl py-5">
      <Select
        placeholder="Select a SQL-like query to continue"
        onChange={handleQuerySelect}
      >
        <Select.Option value="query1">shipCountry = Germany</Select.Option>
        <Select.Option value="query2">employeeID = 5</Select.Option>
        <Select.Option value="query3">orderDate above 1996-07-05</Select.Option>
      </Select>
    </div>
  );
};

export default QueryInput;

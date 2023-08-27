import { Table } from "antd";
import generateColumns from "../utils/generateColumns";

// eslint-disable-next-line react/prop-types
const ResultTable = ({ data }) => {
  const columns = generateColumns(data);

  return (
    <Table
      dataSource={data}
      columns={columns}
      pagination={{ pageSize: 10, size: "small" }}
      rowKey="orderID"
      scroll={{ x: true }}
    />
  );
};

export default ResultTable;

const generateColumns = (data) => {
  if (data.length === 0) {
    return [];
  }

  const columns = Object.keys(data[0]).map((key) => ({
    title: key,
    dataIndex: key,
    key: key,
  }));

  return columns;
};

export default generateColumns;

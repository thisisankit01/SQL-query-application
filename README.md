# SQL Query Application

This is a dummy web-based application that allows users to input SQL-like queries and displays the results of the queries in tabular form. The application fetches data from a CSV file and provides predefined queries for users to choose from.

## Features

- User-friendly interface to input and run SQL-like queries.
- Predefined queries for quick data filtering.
- Displays query results in a table format.
- Data is hosted as API on [Data API](https://dummy-data-csv.onrender.com/api/csv)
- Data is fetched from a CSV file using [PapaParse](https://www.papaparse.com/).
- Built using [React](https://reactjs.org/) framework and [Ant Design](https://ant.design/) UI library.
- Deployed on [Netlify](https://www.netlify.com/).

## Usage

1. Visit the deployed application on [Netlify](https://sql-ops.netlify.app/).
2. Choose a query from the dropdown menu or input your custom query in the textarea.
3. Click the "Submit" button to see the query results displayed in a table.

## Predefined Queries

1. **shipCountry = Germany**: Displays orders shipped to Germany.
2. **employeeID = 5**: Displays orders associated with Employee ID 5.
3. **orderDate above 1996-07-05**: Displays orders with an order date later than July 5, 1996.

## Notes

- The application does not perform actual SQL queries but demonstrates query filtering on predefined data.
- The focus of this application is to showcase basic functionality and structure, not production-level features.

---

_This application was created as part of a coding challenge. The focus was on implementing basic query filtering and displaying results using React, Ant Design, and PapaParse._

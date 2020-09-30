import React, { useState, useEffect } from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, TableSortLabel, Checkbox } from '@material-ui/core';

import './App.css';

const backendUri = process.env["BACKEND_URI"] || "http://localhost:8000";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${backendUri}/table-data`)
        .then(response => response.json())
        .then(data => setData(data.brandsSummary.brands));
  }, []);
  
  if (data !== null) {
    return (
      <div className="App">
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                    <TableCell>Brand Name</TableCell>
                    <TableCell>Revenue</TableCell>
                    <TableCell>Units Sold</TableCell>
                    <TableCell>Average Price</TableCell>
                </TableRow>
              </TableHead>
            <TableBody>
              {data.map(brand => {
                return (
                  <TableRow>
                    <TableCell>{brand['name']}</TableCell>
                    <TableCell>£{brand['details']['revenue']['value']}</TableCell>
                    <TableCell>{brand['details']['salesUnits']['value']}</TableCell>
                    <TableCell>£{brand['details']['averagePrice']['value']}</TableCell>
                  </TableRow>
                )}
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  } else {
    return (
      <div className="App">LOADING...</div>
    )
  }
}

export default App;

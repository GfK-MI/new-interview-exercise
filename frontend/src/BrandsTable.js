// src/BrandsTable.js
import React, { useMemo, useState } from 'react';
import mockData from './mockData';

const BrandsTable = () => {
  const { brands } = mockData().brandsSummary;
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const totals = useMemo(() => {
    return brands.reduce((acc, brand) => {
      acc.revenue += brand.details.revenue.value;
      acc.salesUnits += brand.details.salesUnits.value;
      acc.averagePrice += brand.details.averagePrice.value; // Note: This calculation might need refinement.
      return acc;
    }, { revenue: 0, salesUnits: 0, averagePrice: 0 });
  }, [brands]);

  totals.averagePrice = totals.averagePrice / brands.length; // Adjust if necessary.

  const getSortIndicator = (columnName) => {
    if (sortConfig.key !== columnName) return '';
    return sortConfig.direction === 'ascending' ? '▲' : '▼';
  };

  const sortedBrands = useMemo(() => {
    let sortableItems = [...brands];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        if (a.details[sortConfig.key].value < b.details[sortConfig.key].value) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a.details[sortConfig.key].value > b.details[sortConfig.key].value) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [brands, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    } else {
      direction = 'ascending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => requestSort('name')}>Brand Name <span className="sort-indicator">{getSortIndicator('name')}</span></th>
          <th onClick={() => requestSort('revenue')}>Revenue <span className="sort-indicator">{getSortIndicator('revenue')}</span></th>
          <th onClick={() => requestSort('salesUnits')}>Units <span className="sort-indicator">{getSortIndicator('salesUnits')}</span></th>
          <th onClick={() => requestSort('averagePrice')}>Average Price <span className="sort-indicator">{getSortIndicator('averagePrice')}</span></th>
          <th onClick={() => requestSort('revenueShare')}>Revenue Share <span className="sort-indicator">{getSortIndicator('revenueShare')}</span></th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ backgroundColor: '#f0f0f0', fontWeight: 'bold' }}>
          <th>Totals</th>
          <th>${totals.revenue.toFixed(2)}</th>
          <th>{totals.salesUnits}</th>
          <th>${totals.averagePrice.toFixed(2)}</th>
          <th>100%</th>
        </tr>
        {sortedBrands.map((brand) => {
          const revenueShare = (brand.details.revenue.value / totals.revenue) * 100;
          return (
            <tr key={brand.name}>
              <td>{brand.name}</td>
              <td>${brand.details.revenue.value.toFixed(2)}</td>
              <td>{brand.details.salesUnits.value}</td>
              <td>${brand.details.averagePrice.value.toFixed(2)}</td>
              <td>{revenueShare.toFixed(2)}%</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BrandsTable;

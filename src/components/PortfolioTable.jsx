import React from 'react';

const PortfolioTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Loan No.</th>
          <th>Loan Type</th>
          <th>Borrower</th>
          <th>Borrower Address</th>
          <th>Co Borrower</th>
          <th>Current DPD</th>
          <th>Sanction Amount</th>
          <th>Region</th>
        </tr>
      </thead>
      <tbody>
  {data.length === 0 ? (
    <tr><td colSpan="8">No results found</td></tr>
  ) : (
    data.map((row, index) => (
      <tr key={index} className={index === data.length - 1 ? 'highlight-row' : ''}>
        <td>{row.loanNo}</td>
        <td>{row.loanType}</td>
        <td>{row.borrower}</td>
        <td>{row.borrowerAddress}</td>
        <td>{row.coBorrower}</td>
        <td>{row.currentDPD}</td>
        <td>{row.sanctionAmount}</td>
        <td>{row.region}</td>
      </tr>
    ))
  )}
</tbody>

    </table>
  );
};

export default PortfolioTable;

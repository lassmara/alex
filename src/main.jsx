import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Dummy Data for Portfolio Table
const portfolioData = [
  { loanNo: 'L28U3247', loanType: 'Home Loan', borrower: 'Vedika Sachar', borrowerAddress: '83 Yogi Ganj', coBorrower: 'Divit Vora', coBorrowerAddress: '24/543, Acharya Path Ongole-052360', currentDPD: 91, sanctionAmount: '₹1934068', region: 'West' },
  { loanNo: 'L28U3243', loanType: 'Car Loan', borrower: 'Hrishta Agrawal', borrowerAddress: '86/622, Deo Path, Berhampore 841186', coBorrower: 'Mahika Tak', coBorrowerAddress: '58 Tella Road, Sultan Pur Majha 919878', currentDPD: 100, sanctionAmount: '₹1842143', region: 'North' },
  { loanNo: 'L28U3250', loanType: 'Car Loan', borrower: 'Priyansh Soman', borrowerAddress: 'H.No. 152 Andra Street Amritsar-411762', coBorrower: 'Zaina Dara', coBorrowerAddress: 'H.No. 42, Srivastava Marg, Junagadh-191124', currentDPD: 100, sanctionAmount: '₹4537889', region: 'East' },
  { loanNo: 'L28U3248', loanType: 'Home Loan', borrower: 'Priyansh Chanda', borrowerAddress: '24, Ray Chowk Quntakal 809332', coBorrower: 'Zain Ghosh', coBorrowerAddress: 'H.No. 59, Dugar Street Kolhapur-543900', currentDPD: 100, sanctionAmount: '₹2681712', region: 'West' },
  { loanNo: 'L28U3260', loanType: 'Home Loan', borrower: 'Hrishta Sen', borrowerAddress: '94/36 Barad, Hubli-Dharwad-408790', coBorrower: 'Shiv Kal', coBorrowerAddress: '63/86, Bhardwaj Street Bokaro 662204', currentDPD: 100, sanctionAmount: '₹4456808', region: 'West' },
  // Add more dummy data as needed
];

// Upload Modal Component
const UploadModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Upload Document</h2>
        <form>
          <div className="form-group">
            <label>Document Name</label>
            <select>
              <option>Select</option>
              <option>Loan Agreement</option>
              <option>Receipt</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="form-group">
            <label>Document Type</label>
            <select>
              <option>Select</option>
              <option>PDF</option>
              <option>Image</option>
            </select>
          </div>

          <div className="form-group">
            <label>Document Remarks</label>
            <input type="text" placeholder="Type" />
          </div>

          <div className="form-group">
            <label>Select File</label>
            <input type="file" />
          </div>

          <button className="submit-btn" type="submit">Submit</button>
        </form>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

// Portfolio Table Component
const PortfolioTable = ({ searchQuery }) => {
  const filteredData = portfolioData.filter(item =>
    item.loanNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="portfolio-table">
      <h2>Portfolio</h2>
      <div className="filters">
        <button>Pre Sarfaesi</button>
        <button>NPA</button>
        <button>13(3) Responses</button>
        <button>Symbolic Possession</button>
        <button>DM Order</button>
        <button>Physical Possessions</button>
        <button>Auctions</button>
        <button className="more-filters-btn">More Filters</button>
      </div>
      
      {/* Upper Search Bar only */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => searchQuery(e.target.value)}  // Correctly updating searchQuery here
        placeholder="Search for a loan number"
        className="search-bar"
      />
      
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
          {filteredData.length === 0 ? (
            <tr><td colSpan="8">No results found</td></tr>
          ) : (
            filteredData.map((row, index) => (
              <tr key={index}>
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
    </div>
  );
};

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>Dashboard</li>
        <li>Portfolio</li>
        <li>Notifications</li>
        <li>Notices</li>
        <li>Auction</li>
        <li>Data Upload</li>
        <li>Control Panel</li>
        <li>User Management</li>
        <li>Permissions</li>
      </ul>
    </div>
  );
};

// Main App Component
const App = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');  // Properly defined useState here

  const handleShowUploadModal = () => {
    setShowUploadModal(true);
  };

  const handleCloseUploadModal = () => {
    setShowUploadModal(false);
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <h1>Dashboard</h1>
        <PortfolioTable searchQuery={searchQuery} />
        {/* Only the top search bar */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}  // Correctly updating searchQuery here
          placeholder="Search for a loan number"
          className="search-bar"
        />
        <button onClick={handleShowUploadModal}>Upload Document</button>
        <UploadModal show={showUploadModal} onClose={handleCloseUploadModal} />
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

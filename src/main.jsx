import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Sidebar from './components/Sidebar';
import UploadModal from './components/UploadModal';
import UploadForm from './components/UploadForm';
import PortfolioTable from './components/PortfolioTable';
import Filters from './components/Filters';

const initialPortfolio = [
  { loanNo: 'L28U3247', loanType: 'Home Loan', borrower: 'Vedika Sachar', borrowerAddress: '83 Yogi Ganj', coBorrower: 'Divit Vora', coBorrowerAddress: '24/543, Acharya Path Ongole-052360', currentDPD: 91, sanctionAmount: '₹1,934,068', region: 'West' },
  { loanNo: 'L28U3243', loanType: 'Car Loan', borrower: 'Hrishta Agrawal', borrowerAddress: '86/622, Deo Path, Berhampore 841186', coBorrower: 'Mahika Tak', coBorrowerAddress: '58 Tella Road, Sultan Pur Majha 919878', currentDPD: 100, sanctionAmount: '₹1,842,143', region: 'North' },
  { loanNo: 'L28U3250', loanType: 'Car Loan', borrower: 'Priyansh Soman', borrowerAddress: 'H.No. 152 Andra Street Amritsar-411762', coBorrower: 'Zaina Dara', coBorrowerAddress: 'H.No. 42, Srivastava Marg, Junagadh-191124', currentDPD: 100, sanctionAmount: '₹4,537,889', region: 'East' },
  { loanNo: 'L28U3248', loanType: 'Home Loan', borrower: 'Priyansh Chanda', borrowerAddress: '24, Ray Chowk Quntakal 809332', coBorrower: 'Zain Ghosh', coBorrowerAddress: 'H.No. 59, Dugar Street Kolhapur-543900', currentDPD: 100, sanctionAmount: '₹2,681,712', region: 'West' },
  { loanNo: 'L28U3260', loanType: 'Home Loan', borrower: 'Hrishta Sen', borrowerAddress: '94/36 Barad, Hubli-Dharwad-408790', coBorrower: 'Shiv Kal', coBorrowerAddress: '63/86, Bhardwaj Street Bokaro 662204', currentDPD: 100, sanctionAmount: '₹4,456,808', region: 'West' },
];

const App = () => {
  const [portfolioData, setPortfolioData] = useState(initialPortfolio);
  const [searchQuery, setSearchQuery] = useState('');
  const [showMoreFiltersModal, setShowMoreFiltersModal] = useState(false);
  const [activeSection, setActiveSection] = useState('Dashboard');
  const [showToast, setShowToast] = useState(false);

  const handleUploadSubmit = (newEntry) => {
    setPortfolioData(prev => [...prev, newEntry]);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const filteredData =
    searchQuery.trim() === ''
      ? portfolioData
      : portfolioData.filter(item =>
          item.loanNo.toLowerCase().includes(searchQuery.toLowerCase())
        );

  useEffect(() => {
    if (activeSection === 'Portfolio') {
      setSearchQuery('');
    }
  }, [activeSection]);

  return (
    <div className="app">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="main-content">
        <h1>{activeSection}</h1>

        {activeSection === 'Portfolio' && (
          <>
            <Filters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onMoreFiltersClick={() => setShowMoreFiltersModal(true)}
            />
            <PortfolioTable data={filteredData} />
          </>
        )}

        {activeSection === 'Data Upload' && (
          <UploadForm onSubmit={handleUploadSubmit} />
        )}

        <UploadModal
          show={showMoreFiltersModal}
          onClose={() => setShowMoreFiltersModal(false)}
        />

        {showToast && (
          <div className="toast-success">
            Entry added successfully!
          </div>
        )}
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

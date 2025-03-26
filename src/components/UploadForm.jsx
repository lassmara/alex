import React, { useState } from 'react';

const UploadForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    loanNo: '',
    loanType: 'Home Loan',
    borrower: '',
    borrowerAddress: '',
    coBorrower: '',
    coBorrowerAddress: '',
    currentDPD: '',
    sanctionAmount: '',
    region: 'North',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = {
      ...formData,
      currentDPD: parseInt(formData.currentDPD),
      sanctionAmount: `₹${parseInt(formData.sanctionAmount).toLocaleString()}`,
    };
    onSubmit(entry);
    alert('Data Uploaded Successfully!');
    setFormData({
      loanNo: '',
      loanType: 'Home Loan',
      borrower: '',
      borrowerAddress: '',
      coBorrower: '',
      coBorrowerAddress: '',
      currentDPD: '',
      sanctionAmount: '',
      region: 'North',
    });
  };

  return (
    <div className="upload-form">
      <h2>Enter Loan Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Loan No.</label>
          <input name="loanNo" value={formData.loanNo} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Loan Type</label>
          <select name="loanType" value={formData.loanType} onChange={handleChange}>
            <option>Home Loan</option>
            <option>Car Loan</option>
          </select>
        </div>

        <div className="form-group">
          <label>Borrower</label>
          <input name="borrower" value={formData.borrower} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Borrower Address</label>
          <input name="borrowerAddress" value={formData.borrowerAddress} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Co-Borrower</label>
          <input name="coBorrower" value={formData.coBorrower} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Co-Borrower Address</label>
          <input name="coBorrowerAddress" value={formData.coBorrowerAddress} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Current DPD</label>
          <input type="number" name="currentDPD" value={formData.currentDPD} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Sanction Amount</label>
          <input type="number" name="sanctionAmount" value={formData.sanctionAmount} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Region</label>
          <select name="region" value={formData.region} onChange={handleChange}>
            <option>North</option>
            <option>South</option>
            <option>East</option>
            <option>West</option>
          </select>
        </div>

        <button className="submit-btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UploadForm;

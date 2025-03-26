import React, { useState } from 'react';

const UploadModal = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    documentName: '',
    documentType: '',
    remarks: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData(prev => ({ ...prev, file: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`File "${formData.file?.name}" uploaded successfully!`);
    onClose();
  };

  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Upload Document</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Document Name</label>
            <select name="documentName" onChange={handleChange} value={formData.documentName} required>
              <option value="">Select</option>
              <option value="Loan Agreement">Loan Agreement</option>
              <option value="Receipt">Receipt</option>
              <option value="Statement">Statement</option>
            </select>
          </div>

          <div className="form-group">
            <label>Document Type</label>
            <select name="documentType" onChange={handleChange} value={formData.documentType} required>
              <option value="">Select</option>
              <option value="PDF">PDF</option>
              <option value="Image">Image</option>
            </select>
          </div>

          <div className="form-group">
            <label>Document Remarks</label>
            <input type="text" name="remarks" onChange={handleChange} value={formData.remarks} placeholder="Type..." />
          </div>

          <div className="form-group">
            <label>Select File</label>
            <input type="file" name="file" onChange={handleChange} required />
          </div>

          <button className="submit-btn" type="submit">Submit</button>
        </form>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default UploadModal;

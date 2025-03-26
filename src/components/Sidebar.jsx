import React from 'react';

const Sidebar = ({ setActiveSection }) => (
  <div className="sidebar">
    <ul>
      <li onClick={() => setActiveSection('Dashboard')}>Dashboard</li>
      <li onClick={() => setActiveSection('Portfolio')}>Portfolio</li>
      <li onClick={() => setActiveSection('Notifications')}>Notifications</li>
      <li onClick={() => setActiveSection('Notices')}>Notices</li>
      <li onClick={() => setActiveSection('Auction')}>Auction</li>
      <li onClick={() => setActiveSection('Data Upload')}>Data Upload</li>
      <li onClick={() => setActiveSection('Control Panel')}>Control Panel</li>
      <li onClick={() => setActiveSection('User Management')}>User Management</li>
      <li onClick={() => setActiveSection('Permissions')}>Permissions</li>
    </ul>
  </div>
);

export default Sidebar;

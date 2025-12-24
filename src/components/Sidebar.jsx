import React from 'react';
import { Home, BarChart2, Users, Settings, PieChart, Layers } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar glass">
      <div className="logo-container">
        <div className="logo-icon">
          <Layers size={24} color="white" />
        </div>
        <h1 className="logo-text text-gradient">Lumina</h1>
      </div>
      
      <nav className="nav-menu">
        <a href="#" className="nav-item active">
          <Home size={20} />
          <span>Dashboard</span>
        </a>
        <a href="#" className="nav-item">
          <BarChart2 size={20} />
          <span>Analytics</span>
        </a>
        <a href="#" className="nav-item">
          <PieChart size={20} />
          <span>Reports</span>
        </a>
        <a href="#" className="nav-item">
          <Users size={20} />
          <span>Customers</span>
        </a>
      </nav>

      <div className="sidebar-footer">
        <a href="#" className="nav-item">
          <Settings size={20} />
          <span>Settings</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;

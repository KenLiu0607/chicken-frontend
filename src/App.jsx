import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import KPICard from './components/KPICard';
import SalesChart from './components/SalesChart';
import MaiAgentChat from './components/MaiAgentChat';
import { DollarSign, Users, ShoppingBag, TrendingUp } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        
        <main className="dashboard-content">
          <div className="dashboard-header">
            <div>
              <h2 className="page-title">Dashboard Overview</h2>
              <p className="page-subtitle">Here's what's happening with your store today.</p>
            </div>
            <button className="primary-btn">Download Report</button>
          </div>

          <div className="kpi-grid">
            <KPICard 
              title="Total Revenue" 
              value="$54,239" 
              change={12.5} 
              isPositive={true} 
              icon={DollarSign} 
              color="#3b82f6" 
            />
            <KPICard 
              title="Total Customers" 
              value="8,549" 
              change={8.2} 
              isPositive={true} 
              icon={Users} 
              color="#8b5cf6" 
            />
            <KPICard 
              title="Total Orders" 
              value="1,423" 
              change={-2.4} 
              isPositive={false} 
              icon={ShoppingBag} 
              color="#f59e0b" 
            />
            <KPICard 
              title="Growth Rate" 
              value="+24.5%" 
              change={5.6} 
              isPositive={true} 
              icon={TrendingUp} 
              color="#10b981" 
            />
          </div>

          <div className="dashboard-charts-row">
            <div className="chart-large">
              <SalesChart />
            </div>
            <div className="chart-wrapper glass-card">
              {/* Placeholder for another widget */}
              <div style={{ padding: '20px' }}>
                <h3>Recent Activity</h3>
                <div className="activity-list">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="activity-item">
                      <div className="activity-dot"></div>
                      <div className="activity-info">
                        <span className="activity-text">New order #423{i} received</span>
                        <span className="activity-time">{i * 15} min ago</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <MaiAgentChat />
    </div>
  );
}

export default App;

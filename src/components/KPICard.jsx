import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import "./KPICard.css";

const KPICard = ({ title, value, change, isPositive, icon: Icon, color }) => {
    return (
        <div className="glass-card kpi-card">
            <div className="kpi-header">
                <div className="kpi-icon-wrapper" style={{ backgroundColor: `${color}20`, color: color }}>
                    <Icon size={20} />
                </div>
                <span className="kpi-change" style={{ color: isPositive ? "var(--accent-success)" : "var(--accent-danger)" }}>
                    {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                    {change}%
                </span>
            </div>
            <div className="kpi-content">
                <p className="kpi-title">{title}</p>
                <h3 className="kpi-value">{value}</h3>
            </div>
        </div>
    );
};

export default KPICard;

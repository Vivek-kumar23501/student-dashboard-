import React, { useState } from 'react';
import './MessReductionForm.css';

import HostelAllotment from './HostelAllotment';
import MessTracking from './MessTracking';
import MessCalendar from './MessCalendar';
import GrievanceSupport from './GrievanceSupport';
import RulesRegulations from './RulesRegulations';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('mess-reduction');
  const [showSidebar, setShowSidebar] = useState(false); // default closed for mobile

  const handleMenuClick = (tab) => {
    setActiveTab(tab);
    if (window.innerWidth <= 768) {
      setShowSidebar(false); // auto-close sidebar on mobile
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'hostel-allotment':
        return <HostelAllotment />;
      case 'mess-tracking':
        return <MessTracking />;
      case 'calendar':
        return <MessCalendar />;
      case 'grievance':
        return <GrievanceSupport />;
      case 'rules':
        return <RulesRegulations />;
      case 'mess-reduction':
      default:
        return (
          <div className="formContainer">
            <h2>Mess Reduction</h2>
            <div className="formGrid">
              <input className="input" type="text" placeholder="Enter your first name" />
              <input className="input" type="text" placeholder="Enter your last name" />
              <input className="input" type="text" placeholder="Enter your college roll no" />
              <select className="input">
                <option value="">Branch</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="Mechanical">Mechanical</option>
              </select>
              <select className="input">
                <option value="">Enter your Session</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
              </select>
              <select className="input">
                <option value="">Select</option>
                {[...Array(8).keys()].map((i) => (
                  <option key={i + 1} value={i + 1}>Semester {i + 1}</option>
                ))}
              </select>
              <input className="input" type="text" placeholder="Enter your room no" />
              <div className="date-range">
                <input className="input date-input" type="date" />
                <input className="input date-input" type="date" />
              </div>
              <input className="input" type="number" placeholder="Number of days" />
            </div>

            <textarea className="textarea" placeholder="Reason"></textarea>

            <div className="file-upload-section">
              <label>Upload Document (Optional)</label>
              <div className="file-input-container">
                <input type="file" className="upload-input" />
                <button className="upload-btn">Upload</button>
              </div>
            </div>

            <button className="submit-button">Submit</button>
          </div>
        );
    }
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className={`sidebar ${showSidebar ? 'visible' : 'hidden'}`}>
        <div>
          <h2>Student Dashboard</h2>
          <ul>
            <li className={activeTab === 'hostel-allotment' ? 'active' : 'inactive'} onClick={() => handleMenuClick('hostel-allotment')}>Hostel Allotment</li>
            <li className={activeTab === 'mess-reduction' ? 'active' : 'inactive'} onClick={() => handleMenuClick('mess-reduction')}>Mess Reduction</li>
            <li className={activeTab === 'mess-tracking' ? 'active' : 'inactive'} onClick={() => handleMenuClick('mess-tracking')}>Mess Tracking</li>
            <li className={activeTab === 'calendar' ? 'active' : 'inactive'} onClick={() => handleMenuClick('calendar')}>Mess Calendar</li>
            <li className={activeTab === 'grievance' ? 'active' : 'inactive'} onClick={() => handleMenuClick('grievance')}>Grievance Support</li>
            <li className={activeTab === 'rules' ? 'active' : 'inactive'} onClick={() => handleMenuClick('rules')}>Rules & Regulations</li>
          </ul>
        </div>
        <div>
          <button className="contact-btn">Contact</button>
          <button className="logout-btn">Logout</button>
        </div>
      </aside>

      {/* Optional Overlay on Mobile */}
      {showSidebar && window.innerWidth <= 768 && (
        <div className="overlay" onClick={() => setShowSidebar(false)}></div>
      )}

      {/* Main */}
      <main>
        <div className="topbar">
          <button className="menu-toggle" onClick={() => setShowSidebar(!showSidebar)}>☰</button>
          <div className="notification">🔔<span className="notification-badge">3</span></div>
          <div className="profile-container">
            <img className="profile-pic" src="https://via.placeholder.com/40" alt="Profile" />
            <div>
              <p className="profile-name">Vivek Tiwari</p>
              <p className="profile-role">Student</p>
            </div>
          </div>
        </div>
        <div className="content-body">
          {renderTabContent()}
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;

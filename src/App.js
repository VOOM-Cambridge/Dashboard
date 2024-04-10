import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Card, Row, Col, Dropdown, Button, Frame } from 'react-bootstrap';
const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [error, setError] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setError(false);
  };

 const websites = [
    { name: "Dashboards", link: 'http://localhost:3000/Dashboards/' },
    { name: "Database", link: 'http://localhost:8086' },
    { name: "MES Sheduling", link: 'http://localhost:9000' },
    { name: [{name: "Scrap Monitoring", link: 'http://localhost:7000'},
            {name: "Scrap Monitoring Edit", link: 'http://localhost:7001/admin'},
            ]},
    { name: [
        { name: "Tracking", link: '' },
        { name: "Location Tracking", link: 'http://localhost' },
        { name: "Admin Location Tracking", link: 'http://localhost:8001' },
        { name: "Composition Tracking", link: 'http://localhost:8001' },
      ]
    },
    { name: [{name: "AAS Sending", link: 'http://localhost:5050'},
            {name: "AAS Printing", link: 'http://localhost:6050'},
            ]},
    {name: "Workers", link: 'http://localhost:4050' },
    {name: "Printer", link: 'http://localhost:5001' },
  ];

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between', padding: '6px', backgroundColor: '#6669ff', color:'white'}}>
        <div key={1} style={{ cursor: 'pointer', marginRight: '20px' }}>VOOM Dashboard</div>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', padding: '4px', backgroundColor: '#6669ff', color:'white'}}>
        <div key={websites[0].name} onClick={() => handleItemClick(websites[0].link)} style={{ cursor: 'pointer', marginRight: '20px' }}>{websites[0].name}</div>
        <div key={websites[1].name} onClick={() => handleItemClick(websites[1].link)} style={{ cursor: 'pointer', marginRight: '20px' }}>{websites[1].name}</div>
        <div key={websites[2].name} onClick={() => handleItemClick(websites[2].link)} style={{ cursor: 'pointer', marginRight: '20px' }}>{websites[2].name}</div>
         <div class="dropdown">
          <button class="dropbtn">{websites[3].name[0].name}</button>
          <div class="dropdown-content">
            <a >
              <div key={websites[3].name[0].name} onClick={() => handleItemClick(websites[3].name[0].link)} style={{ cursor: 'pointer', marginRight: '20px' }}>{websites[3].name[0].name}</div>
            </a>
            <a >
              <div key={websites[3].name[1].name} onClick={() => handleItemClick(websites[3].name[1].link)} style={{ cursor: 'pointer', marginRight: '20px' }}>{websites[3].name[1].name}</div>
            </a>
          </div>
          </div>
          <div class="dropdown">
          <button class="dropbtn">{websites[4].name[0].name}</button>
          <div class="dropdown-content">
            <a >
              <div key={websites[4].name[0].name} onClick={() => handleItemClick(websites[4].name[0].link)} style={{ cursor: 'pointer', marginRight: '20px' }}>{websites[4].name[0].name}</div>
            </a>
            <a >
              <div key={websites[4].name[1].name} onClick={() => handleItemClick(websites[4].name[1].link)} style={{ cursor: 'pointer', marginRight: '20px' }}>{websites[4].name[1].name}</div>
            </a>
            <a >
              <div key={websites[4].name[2].name} onClick={() => handleItemClick(websites[4].name[2].link)} style={{ cursor: 'pointer', marginRight: '20px' }}>{websites[4].name[2].name}</div>
            </a>
            <a >
              <div key={websites[4].name[3].name} onClick={() => handleItemClick(websites[4].name[3].link)} style={{ cursor: 'pointer', marginRight: '20px' }}>{websites[4].name[3].name}</div>
            </a>
          </div>
          </div>
          <div class="dropdown">
          <button class="dropbtn">{websites[5].name[0].name}</button>
          <div class="dropdown-content">
            <a >
              <div key={websites[5].name[0].name} onClick={() => handleItemClick(websites[5].name[0].link)} style={{ cursor: 'pointer', marginRight: '20px' }}>{websites[5].name[0].name}</div>
            </a>
            <a>
              <div key={websites[5].name[1].name} onClick={() => handleItemClick(websites[5].name[1].link)} style={{ cursor: 'pointer', marginRight: '20px' }}>{websites[5].name[1].name}</div>
            </a>
          </div>
          </div>
          <div key={websites[6].name} onClick={() => handleItemClick(websites[6].link)} style={{ cursor: 'pointer', marginRight: '20px' }}>{websites[6].name}</div>
          <div key={websites[7].name} onClick={() => handleItemClick(websites[7].link)} style={{ cursor: 'pointer', marginRight: '20px' }}>{websites[7].name}</div>
      </div>
     

      <div style={{ marginTop: '20px' }}>
        {error && <div style={{ color: 'red' }}>Website not found!</div>}
        {selectedItem && (
          <iframe
            title={selectedItem}
            src={selectedItem}
            style={{ width: '100%', height: '500px' }}
            onError={() => setError(true)}
          />
        )}
      </div>
    </div>
  );
};

export default App;
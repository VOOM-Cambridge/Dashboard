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
  let url =  window.location.hostname 

 const websites = [
    { name: [{name: "Dashboards (all)", link: 'http://' + url + ':3000/dashboards'},
            {name: "Power Consumption", link: 'http://' + url + ":3000/d/q39y6tRgkV2/machine-dashboard-energy?orgId=1&refresh=5s&from=1713712676265&to=1713712976265&theme=light" },
            {name: "Scrap Recorded", link: 'http://' + url + ":3000//d/YMtDdAX4k/overview?orgId=1&from=1713108106422&to=1713712906422&theme=light" },
            {name: "Utilisation", link: 'http://' + url + ":3000/d/q39y6tRgk/machine-dashboard?orgId=1&refresh=5s&from=1713712384153&to=1713712684153" },
            ]},
    { name: "Database", link: 'http://' + url + ':8086' },
    { name: "MES Sheduling", link: 'http://' + url + ':9000' },
    { name: [{name: "Scrap Monitoring", link: 'http://' + url + ':7000'},
            {name: "Scrap Monitoring Edit", link: 'http://' + url + ':7001/admin'},
            ]},
    { name: [
        { name: "Tracking", link: '' },
        { name: "Location Tracking", link: 'http://' + url},
        { name: "Admin Location Tracking", link: 'http://' + url + ':8001' },
        { name: "Composition Tracking", link: 'http://' + url + ':8001' },
      ]
    },
    { name: [{name: "AAS Sending", link: 'http://' + url + ':6060'},
            {name: "AAS Printing", link: 'http://' + url + ':6050'},
            ]},
    {name: "Workers", link: 'http://' + url + ':5050' },
    {name: "Printer", link: 'http://' + url + ':5001' },
  ];

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between', padding: '6px', backgroundColor: '#6669ff', color:'white'}}>
        <div key={1} style={{ cursor: 'pointer', marginRight: '20px' }}>VOOM Dashboard</div>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', padding: '4px', backgroundColor: '#6669ff', color:'white'}}>
        <div class="dropdown">
          <button class="dropbtn">{websites[0].name[0].name}</button>
          <div class="dropdown-content">
            <a >
              <div key={websites[0].name[0].name} onClick={() => handleItemClick(websites[0].name[0].link)} style={{ cursor: 'pointer', marginRight: '20px' }}>{websites[0].name[0].name}</div>
            </a>
            <a>
              <div key={websites[0].name[1].name} onClick={() => handleItemClick(websites[0].name[1].link)} style={{ cursor: 'pointer', marginRight: '20px' }}>{websites[0].name[1].name}</div>
            </a>
            <a>
              <div key={websites[0].name[2].name} onClick={() => handleItemClick(websites[0].name[2].link)} style={{ cursor: 'pointer', marginRight: '20px' }}>{websites[0].name[2].name}</div>
            </a>
          </div>
          </div>
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
     

      <div style={{ marginTop: '5px' }}>
        {error && <div style={{ color: 'red' }}>Website not found!</div>}
        {selectedItem && (
          <iframe
            title={selectedItem}
            src={selectedItem}
            style={{ width: '100%', height: '800px' }}
            onError={() => setError(true)}
            frameborder="0"
          /> 
        )}
      </div>
    </div>
  );
};

export default App;
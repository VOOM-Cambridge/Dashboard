import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Card, Row, Col, Dropdown, Button } from 'react-bootstrap';


const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [error, setError] = useState(false);
  const colourBar = "primary"

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setError(false);
  };

  let url = window.location.hostname;

  // Assuming your websites data structure has been updated to be more consistent
const websites = [
  {
    name: "Dashboards",
    children: [
      { name: "Dashboards (all)", link: `http://${url}:3000/dashboards` },
      { name: "Power Consumption", link: `http://${url}:3000/d/q39y6tRgkV2/machine-dashboard-energy?orgId=1&refresh=5s&from=1713712676265&to=1713712976265&theme=light` },
      { name: "Scrap Recorded", link: `http://${url}:3000//d/YMtDdAX4k/overview?orgId=1&from=1713108106422&to=1713712906422&theme=light` },
      { name: "Utilisation", link: `http://${url}:3000/d/q39y6tRgk/machine-dashboard?orgId=1&refresh=5s&from=1713712384153&to=1713712684153` },
    ]
  },
  { name: "Database", link: `http://${url}:8086` , children: null},
  { name: "MES Planning", link: `http://${url}:9000` , children: null},
  {
    name: "Scrap Monitoring",
    children: [
      { name: "Scrap Monitoring", link: `http://${url}:7000` },
      { name: "Scrap Monitoring Edit", link: `http://${url}:7001/admin` },
    ]
  },
  {
    name: "Tracking",
    children: [
      { name: "Location Tracking", link: `http://${url}:8000`},
      { name: "Admin Location Tracking", link: `http://${url}:8001`},
      { name: "Composition Tracking", link: `http://${url}:8001`},
    ]
  },
  {
    name: "AAS",
    children: [
      { name: "AAS Sending", link: `http://${url}:6060` , children: null},
      { name: "AAS Printing", link: `http://${url}:6050` , children: null},
    ]
  },
  { name: "Workers", link: `http://${url}:5050`, children: null},
  { name: "Printer", link: `http://${url}:5001`, children: null},
];


  return (
    <div className="app-container">
      <div className="header">VOOM Dashboard</div>
      <Row className={"link-row bg-" + colourBar}>
        {websites.map((website, index) =>
          website.children ? (
                <Dropdown as={Col} className="dropdown-col">
                  <Dropdown.Toggle variant={colourBar} id="dropdown-basic">
                    {website.name}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {website.children.map((child) => (
                      <Dropdown.Item onClick={() => handleItemClick(child.link)} 
                      key={child.name}
                      >{child.name}</Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
          ) : (
            <Col key={index} className="link-col">
              {website.name =="MES Planning" ? (
                <Button variant={colourBar}
                  onClick={() => handleItemClick(website.link)}
                  href = {website.link}>
                  {website.name}
                </Button>
              ):(
                <Button variant={colourBar}
                onClick={() => handleItemClick(website.link)}>
                {website.name}
                </Button>
              )}
            </Col>
          )
        )}
      </Row>

      <div className="iframe-container">
        {error && <div className="error">Website not found!</div>}
        {selectedItem && (
          <iframe
            title="content"
            src={selectedItem}
            width="100%"
            height="800"
            onError={() => setError(true)}
          />
        )}
      </div>
    </div>
  );
};

export default App;
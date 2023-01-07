import React, { useState } from 'react';
import './tabsv1.css';

export default function TabsV1() {
  const [active, setActive] = useState('tab-1');

  const handleClick = (event) => {
    setActive(event.target.id);
  };

  return (
    <div>
      <div className="container">
        <div className="tabs-pills">
          <button
            className={`tab-button ${active === 'tab-1' ? 'active' : ''}`}
            id="tab-1"
            onClick={handleClick}
          >
            Tab 1
          </button>
          <button
            className={`tab-button ${active === 'tab-2' ? 'active' : ''}`}
            id="tab-2"
            onClick={handleClick}
          >
            Tab 2
          </button>
          <button
            className={`tab-button ${active === 'tab-3' ? 'active' : ''}`}
            id="tab-3"
            onClick={handleClick}
          >
            Tab 3
          </button>
        </div>
        <div className="tabs-content">
          <div className={`tab-page ${active === 'tab-1' ? 'active' : ''}`}>
            <p>This is page 1</p>
          </div>
          <div className={`tab-page ${active === 'tab-2' ? 'active' : ''}`}>
            <p>This is page 2</p>
          </div>
          <div className={`tab-page ${active === 'tab-3' ? 'active' : ''}`}>
            <p>This is page 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './style.css';
import Tabs from './components/Tabs';
import DisabledTabs from './components/DisabledTabs';
import TabsV2 from './components/TabsV2';
import TabsV3 from './components/TabsV3';

export default function App() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">Default</Link>
        <Link to="/disabled">Disabled</Link>
        <Link to="/v2">Version 2</Link>
        <Link to="/v3">Version 3</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Tabs />} />
        <Route path="/disabled" element={<DisabledTabs />} />
        <Route path="/v2" element={<TabsV2 />} />
        <Route path="/v3" element={<TabsV3 />} />
      </Routes>
    </div>
  );
}

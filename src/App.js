import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './style.css';
import Tabs from './components/Tabs';
import DisabledTabs from './components/DisabledTabs';
import TabsV1 from './components/TabsV1';
import TabsV2 from './components/TabsV2';

export default function App() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">Default</Link>
        <Link to="/disabled">Disabled</Link>
        <Link to="/v1">Version 1</Link>
        <Link to="/v2">Version 2</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Tabs />} />
        <Route path="/disabled" element={<DisabledTabs />} />
        <Route path="/v1" element={<TabsV1 />} />
        <Route path="/v2" element={<TabsV2 />} />
      </Routes>
    </div>
  );
}

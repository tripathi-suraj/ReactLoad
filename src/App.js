import React from 'react';
import './style.css';
import ClickCounter from './components/HOC/ClickCounter';
import HoverCounter from './components/HOC/HoverCounter';
export default function App() {
  return (
    <div>
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}

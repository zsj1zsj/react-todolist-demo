import React from 'react';
import GenerateNumber from '../components/GenerateNumber';
import JsonFormat from '../components/JsonFormat';
import { useState } from 'react';
import Timestmap from '../components/Timestamp';

function Tools() {
  const [activeTool, setActiveTool] = useState('number');
  const handleToolChange = (toolName) => {
    setActiveTool(toolName);
  };

  return (
    <div>
      <h1>Tools Page</h1>
      <nav>
        <button onClick={() => handleToolChange('number')}>Number Generator</button>
        <button onClick={() => handleToolChange('json')}>JSON Formatter</button>
        <button onClick={() => handleToolChange('timestamp')}>Timestamp</button>
      </nav>
      <hr />

      {activeTool === 'number' && <GenerateNumber />}
      {activeTool === 'json' && <JsonFormat />}
      {activeTool === 'timestamp' && <Timestmap />}
    </div>
  );
}

export default Tools;

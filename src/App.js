import React from 'react';
import DragDrawBox from './components/DragDrawBox';
import WebCam from './components/Camera';

function App() {
  return (
    <WebCam>
      <DragDrawBox/>
    </WebCam>
  );
}

export default App;

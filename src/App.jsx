import React from 'react';
import { createRoot } from 'react-dom';

const App = () => {
  return <div>HOLA!!!!</div>;
};

const root = createRoot(document.getElementById('root'));
root.render(React.createElement(App));

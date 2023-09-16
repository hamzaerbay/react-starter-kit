import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return <div>HOLA!!!!</div>;
};

const root = createRoot(document.getElementById('root')!);
root.render(React.createElement(App));

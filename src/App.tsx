import React from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './components/Header'
export const App = () => {
  return <div>
    <Header title='HOLA!!' />
    <p>🙌🙌🙌🙌</p>
  </div>;
};

const root = createRoot(document.getElementById('root')!);
root.render(React.createElement(App));

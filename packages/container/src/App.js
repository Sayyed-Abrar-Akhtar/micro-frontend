import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './component/MarketingApp';
import Header from './component/Header';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <MarketingApp />
      </div>
    </BrowserRouter>
  );
}

export default App;

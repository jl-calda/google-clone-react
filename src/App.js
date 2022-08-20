import React, { useState } from 'react';

import { Footer, Navbar, RoutesEl, Search } from './components/index';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <RoutesEl />
        <Footer />
      </div>
    </div>
  );
};

export default App;

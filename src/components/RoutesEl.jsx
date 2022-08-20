import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { Results } from './';

const RoutesEl = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path="*" element={<Results />} />
        {['search', 'image', 'news', 'video'].map((path, index) => (
          <Route path={path} element={<Results />} key={uuidv4()} />
        ))}
      </Routes>
    </div>
  );
};
export default RoutesEl;

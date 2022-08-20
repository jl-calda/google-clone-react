import React from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const links = [
  { url: '/search', text: '🔎All' },
  { url: '/news', text: '📰News' },
  { url: '/image', text: '🖼️Images' },
  { url: '/video', text: '📹Videos' },
];

const Links = () => {
  return (
    <div className="flex items-center mt-4 space-x-2 sm:justify-around">
      {links.map(({ url, text }) => (
        <NavLink
          to={url}
          className="m-2 active:mb-0 active:text-blue-700 active:border-b-2 active:pb-2 active:border-blue-700 dark:active:text-blue-300"
          key={uuidv4()}
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;

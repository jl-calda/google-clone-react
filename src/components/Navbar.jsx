import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { Search } from './';

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="flex flex-wrap items-center justify-center p-5 pb-0 border-b border-gray-200 dark:border-gray-700 sm:justify-between">
      <div className="flex items-center justify-between w-screen space-x-5">
        <Link to="/">
          <p className="px-2 py-1 text-2xl font-bold text-white bg-blue-500 rounded dark:bg-gray-500 dark:text-gray-900">
            Goggl🔎
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="px-2 py-1 text-xl bg-white border rounded-full dark:bg-gray-50 dark:text-gray-900 hover:shadow-lg"
        >
          {darkTheme ? 'Light☀️' : 'Dark🌙'}
        </button>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;

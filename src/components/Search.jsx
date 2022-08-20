import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { useResultContext } from '../contexts/ResultContextProvider';
import { Links } from './';

const Search = () => {
  const [text, setText] = useState('Javascript');
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative mx-auto -mt-10">
      <input
        value={text}
        type="text"
        className="h-10 p-6 text-black border rounded-full shadow-sm outline-none sm:w-96 w-80 dark:bg-gray-200 hover:shadow-lg"
        placeholder="Search on googl or type URL"
        onChange={(e) => setText(e.target.value)}
      />
      <Links />
      {text && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-2xl text-gray-500"
          onClick={() => setText('')}
        >
          X
        </button>
      )}
    </div>
  );
};

export default Search;

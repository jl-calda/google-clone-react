import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { v4 as uuidv4 } from 'uuid';

import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from './';

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    if (searchTerm) {
      getResults(`${location.pathname}/q=${searchTerm}&num=40`);
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;
  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {/* {console.log('results', results.results)} */}
          {results?.map(({ link, title }) => (
            <div key={uuidv4()} className="w-full md:w-2/5">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg text-blue-700 hover:underline dark:text-blue-300">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case '/image':
      return (
        <div className="flex flex-wrap items-center justify-center">
          {results?.map(({ image, link: { href, title } }) => (
            <a
              className="p-5 sm:p-3"
              href={href}
              key={uuidv4()}
              target="_blank"
              rel="noreferrer"
            >
              <img src={image?.src} alt={title} loading="lazy" />
              <p className="mt-2 text-sm break-words w-36">{title}</p>
            </a>
          ))}
        </div>
      );
    case '/news':
      return (
        <div className="flex flex-wrap items-center justify-between space-y-6 sm:px-56">
          {/* {console.log(results)} */}
          {results?.map(({ links, id, source, title }) => (
            <div key={uuidv4()} className="w-full md:w-2/5">
              <a
                href={links?.[0]}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                <p className="text-lg text-blue-700 dark:text-blue-300">
                  {title}
                </p>
              </a>
              <div className="flex gap-4">
                <a href={source?.href} target="_blank" rel="noreferer">
                  {source?.href}
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    case '/video':
      return (
        <div className="flex flex-wrap items-center justify-center">
          {results.map((video) => (
            <div key={uuidv4()} className="p-2">
              <ReactPlayer
                url={video.additional_links?.[0].href}
                controls
                width="355px"
                height="200px"
              />
            </div>
          ))}
        </div>
      );

    default:
      break;
  }

  return (
    <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
      {/* {console.log('results', results.results)} */}
      {results?.map(({ link, title }) => (
        <div key={uuidv4()} className="w-full md:w-2/5">
          <a href={link} target="_blank" rel="noreferrer">
            <p className="text-sm">
              {link.length > 30 ? link.substring(0, 30) : link}
            </p>
            <p className="text-lg text-blue-700 hover:underline dark:text-blue-300">
              {title}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Results;

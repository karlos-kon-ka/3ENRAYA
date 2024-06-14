import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto flex justify-center">
        
        <a
          href="https://github.com/karlos-kon-ka"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900 mx-2 transition duration-300"
        >
          <svg
            className="w-4 h-4 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.865 8.17 6.839 9.49.5.09.684-.217.684-.482 0-.237-.009-.866-.014-1.701-2.782.604-3.37-1.346-3.37-1.346-.455-1.156-1.113-1.464-1.113-1.464-.908-.622.069-.609.069-.609 1.005.071 1.533 1.032 1.533 1.032.893 1.528 2.344 1.087 2.915.831.092-.647.35-1.087.636-1.337-2.225-.257-4.566-1.112-4.566-4.948 0-1.092.39-1.984 1.032-2.682-.103-.256-.447-1.268.098-2.64 0 0 .837-.268 2.742 1.021A9.582 9.582 0 0112 7.325c.85.003 1.705.114 2.506.337 1.904-1.289 2.739-1.021 2.739-1.021.546 1.372.202 2.384.1 2.64.642.698 1.029 1.59 1.029 2.682 0 3.845-2.344 4.688-4.576 4.941.36.308.678.919.678 1.854 0 1.338-.012 2.416-.012 2.745 0 .267.18.577.689.48C19.138 20.168 22 16.417 22 12c0-5.52-4.48-10-10-10z"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

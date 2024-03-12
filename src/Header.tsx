import React from 'react';

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="bg-[#323031] text-white py-2 border border-[#645f5fa1]">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <h1 className="text-sm font-bold">Welcome to ollcome</h1>
                <div className="flex items-center space-x-4">
                  <span className="text-sm flex font-bold" >Eng
                  <svg className="w-3 h-3  mt-1 ml-1 text-white-800  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                  </svg>
                  </span>
                  <span className="text-sm flex font-bold">SAR
                  <svg className="w-3 h-3  mt-1 ml-1 text-white-800  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                  </svg>
                  </span>
                </div>
            </div>
          </div>

  )
};

export default Header;
import React from 'react';
import { FiSearch, FiDownload } from 'react-icons/fi';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="w-full   bg-gray-100 font-semibold text-lg py-4 px-8 flex flex-col items-center justify-between shadow-sm">

            <div className='w-full gap-6 py-4  px-8  flex justify-end'>
                <div className="relative w-[500px]">
                    <input
                        type="text"
                        placeholder=""
                        className="w-full px-4 py-2 bg-white border-gray-300 rounded-full focus:outline-none focus:border-gray-400 text-sm"
                    />
                    <FiSearch className="absolute top-2.5 right-4 text-gray-400" />
                </div>
                <div className="flex items-center space-x-6">
                    <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">
                        Premium
                    </a>
                    <button className="px-4 py-2 bg-black text-white rounded-full flex items-center space-x-2 text-sm hover:bg-gray-800">
                        <FiDownload />
                        <span>Get app</span>
                    </button>
                    <FaBell className="text-gray-600 hover:text-gray-800 text-lg" />
                    <FaUserCircle className="text-gray-600 hover:text-gray-800 text-2xl" />
                </div>
            </div>
            <div className="flex w-full items-center space-x-4">
                <a href="/" className="text-gray-500 hover:text-gray-700 text-sm">
                    Back to Library
                </a>
            </div>

            <div className="flex items-center space-x-8">
                {/* Tabs */}
                <div className="flex items-center space-x-2">
                    <button className="px-4 py-2 text-yellow-600 bg-yellow-100 rounded-full text-sm">All</button>
                    <button className="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-full text-sm">Listening</button>
                    <button className="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-full text-sm">Learning</button>
                    <button className="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-full text-sm">Rehearsal</button>
                    <button className="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-full text-sm">Perform</button>
                </div>


            </div>
        </div>
    );
};

export default Header;

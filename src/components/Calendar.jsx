import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Switch } from '@headlessui/react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import ChatUI from './ChatUI';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Calendar = () => {
    const [enabled, setEnabled] = useState(false);

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Monthly Activity',
                data: [65, 59, 80, 81, 56, 55],
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.6)',
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="w-full bg-white p-6 shadow-lg rounded-lg">
            {/* Calendar Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-semibold">Calendar</h1>

                <div className="flex items-center space-x-4">
                    <button className="bg-yellow-400 text-white px-4 py-2 rounded-full font-semibold">
                        + Schedule session
                    </button>

                    <div className="flex items-center space-x-2">
                        <span className="text-gray-500">Google Calendar</span>
                        <Switch
                            checked={enabled}
                            onChange={setEnabled}
                            className={`${enabled ? 'bg-yellow-400' : 'bg-gray-300'}
                relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out`}
                        >
                            <span
                                className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                                    } inline-block h-4 w-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out`}
                            />
                        </Switch>
                    </div>
                </div>
            </div>

            <div className="flex space-x-6">
                {/* Left - Calendar details */}
                <div className="flex flex-col w-3/4">
                    {/* Date selection */}
                    <div className="flex justify-between items-center mb-4">
                        <button className="flex items-center text-gray-500">
                            <FiChevronLeft className="mr-2 text-xl" />
                            <span>May 27, 2022 Today</span>
                        </button>
                        <div className="flex space-x-2">
                            <button className="px-4 py-2 rounded-full bg-yellow-400 text-white font-semibold">Day</button>
                            <button className="px-4 py-2 rounded-full text-gray-600 hover:bg-gray-200 transition">Week</button>
                            <button className="px-4 py-2 rounded-full text-gray-600 hover:bg-gray-200 transition">Month</button>
                        </div>
                        <FiChevronRight className="cursor-pointer text-xl text-gray-500" />
                    </div>

                    {/* Calendar view */}
                    <div className="relative h-[500px]">
                        <div className="grid grid-cols-1 divide-y divide-gray-300 h-full">
                            {/* Time blocks */}
                            {[...Array(12).keys()].map((i) => (
                                <div key={i} className="py-6 border-l-4 border-transparent relative">
                                    {/* Example events */}
                                    {i === 1 && (
                                        <div className="absolute left-8 top-2 bg-gray-100 border-l-4 border-purple-500 px-4 py-2 text-sm rounded-md shadow-md">
                                            Jai Shree Raam - To be played in 15 min
                                        </div>
                                    )}
                                    {i === 2 && (
                                        <div className="absolute left-8 top-2 bg-gray-100 border-l-4 border-green-400 px-4 py-2 text-sm rounded-md shadow-md">
                                            Radha 2023 - To be played
                                        </div>
                                    )}
                                    {i === 3 && (
                                        <div className="absolute left-8 top-2 bg-gray-100 border-l-4 border-blue-400 px-4 py-2 text-sm rounded-md shadow-md">
                                            B Prank - Checked in
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Chart Section */}
                    {/* <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-4">Monthly Activity Chart</h2>
                        <Line data={data} options={options} />
                    </div> */}
                </div>

                {/* Right - Small calendar and schedule */}
                <div className="w-1/4">
                    {/* Calendar widget */}
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-4">January 2022</h2>
                        <div className="grid grid-cols-7 gap-1 text-center text-sm text-gray-600">
                            <span className="font-semibold">Sun</span>
                            <span className="font-semibold">Mon</span>
                            <span className="font-semibold">Tue</span>
                            <span className="font-semibold">Wed</span>
                            <span className="font-semibold">Thu</span>
                            <span className="font-semibold">Fri</span>
                            <span className="font-semibold">Sat</span>

                            {/* Dates */}
                            {[...Array(31).keys()].map((day) => (
                                <span key={day} className="py-1 hover:bg-gray-100 cursor-pointer rounded-md">
                                    {day + 1}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Schedule tags */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Schedule</h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-600 font-semibold">Listen</span>
                            <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-600 font-semibold">Learn</span>
                            <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 font-semibold">Work-Out</span>
                            <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 font-semibold">Study</span>
                            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-semibold">Practice</span>
                            <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-600 font-semibold">Other</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;

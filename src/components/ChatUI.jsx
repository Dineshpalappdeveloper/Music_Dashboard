import React from 'react';
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const ChatUI = () => {
    const data = {
        labels: ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'],
        datasets: [
            {
                label: 'Messages Sent',
                data: [5, 10, 7, 8, 5, 9],
                borderColor: 'rgba(255, 159, 64, 1)',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                fill: true,
                tension: 0.4,
            },
            {
                label: 'Messages Received',
                data: [8, 6, 9, 12, 4, 7],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chat Activity Over Time',
            },
        },
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-4xl mx-auto mt-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Chat Overview</h2>
                <button className="bg-yellow-400 text-white px-4 py-2 rounded-full">
                    + New Chat
                </button>
            </div>

            {/* Chart */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                <Line data={data} options={options} />
            </div>

            {/* Chat Log */}
            <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Recent Chats</h3>
                <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <div className="bg-yellow-100 px-3 py-1 rounded-full">Sent</div>
                        <div className="bg-white p-4 rounded-lg shadow-md w-full">
                            <p className="text-sm">Jai Shree Raam - Sent 5 minutes ago</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="bg-blue-100 px-3 py-1 rounded-full">Received</div>
                        <div className="bg-white p-4 rounded-lg shadow-md w-full">
                            <p className="text-sm">Office chill track - Received 15 minutes ago</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="bg-purple-100 px-3 py-1 rounded-full">Sent</div>
                        <div className="bg-white p-4 rounded-lg shadow-md w-full">
                            <p className="text-sm">Radha 2023 - Sent 20 minutes ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatUI;

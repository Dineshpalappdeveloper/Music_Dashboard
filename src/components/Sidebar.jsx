import { useState } from "react";
import {
    FaHome, FaUser, FaChevronDown, FaChevronUp, FaUsers, FaCalendarAlt
} from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";
import { BsCollection, BsBroadcast, BsFillPersonLinesFill } from "react-icons/bs";
import {
    IoMusicalNoteOutline, IoRadioOutline, IoMicOutline, IoAlbumsOutline, IoDiscOutline, IoEarthOutline
} from "react-icons/io5";
import { GiLaurelCrown, GiTrophy } from "react-icons/gi";
import { FiSettings } from "react-icons/fi";
function Sidebar() {
    const [isCollectionOpen, setIsCollectionOpen] = useState(true);
    const [isStationsOpen, setIsStationsOpen] = useState(true);
    const [isPerformanceOpen, setIsPerformanceOpen] = useState(true);

    return (
        <div className="w-[350px] bg-white p-10 py-24  border-r rounded-r-[32px] ">
            <div className="flex items-center text-yellow-500 font-semibold my-4     bg-yellow-100 rounded-3xl  py-1 pl-2 ml-[-20px]">
                <FaHome className="mx-3" />
                <span>Home</span>
            </div>
            <div className="text-left space-y-4 pr-4    ">


                <div className="flex items-center text-gray-700 hover:text-yellow-500">
                    <FaUser className="mr-3" />
                    <span>Profile</span>
                </div>

                <div className="flex items-center text-gray-700 hover:text-yellow-500">
                    <MdLibraryMusic className="mr-3" />

                    <span>Library</span>
                </div>

                <div>
                    <div
                        className="flex items-center text-gray-700 hover:text-yellow-500 cursor-pointer"
                        onClick={() => setIsCollectionOpen(!isCollectionOpen)}
                    >
                        <BsCollection className="mr-3" />
                        <span>Collection</span>
                        <span className="ml-auto">
                            {isCollectionOpen ? <FaChevronUp /> : <FaChevronDown />}
                        </span>
                    </div>
                    {isCollectionOpen && (
                        <ul className="ml-8 mt-2 space-y-2 text-gray-400">
                            <li className="flex items-center">
                                <IoMusicalNoteOutline className="mr-3" />
                                <span>Playlists</span>
                            </li>
                            <li className="flex items-center">
                                <IoRadioOutline className="mr-3" />
                                <span>Tracks</span>
                            </li>
                            <li className="flex items-center">
                                <IoMicOutline className="mr-3" />
                                <span>Artists</span>
                            </li>
                            <li className="flex items-center">
                                <IoAlbumsOutline className="mr-3" />
                                <span>Albums</span>
                            </li>
                            <li className="flex items-center">
                                <IoDiscOutline className="mr-3" />
                                <span>Genres</span>
                            </li>
                            <li className="flex items-center">
                                <IoEarthOutline className="mr-3" />
                                <span>Geos</span>
                            </li>
                            <li className="flex items-center">
                                <IoDiscOutline className="mr-3" />
                                <span>Decades</span>
                            </li>
                        </ul>
                    )}
                </div>

                <div className="flex items-center text-gray-700 hover:text-yellow-500">
                    <BsFillPersonLinesFill className="mr-3" />
                    <span>Community</span>
                </div>
                <div>
                    <div
                        className="flex items-center text-gray-700 hover:text-yellow-500 cursor-pointer"
                        onClick={() => setIsStationsOpen(!isStationsOpen)}
                    >
                        <BsBroadcast className="mr-3" />
                        <span>Stations</span>
                        <span className="ml-auto">
                            {isStationsOpen ? <FaChevronUp /> : <FaChevronDown />}
                        </span>
                    </div>
                    {isStationsOpen && (
                        <ul className="ml-8 mt-2 space-y-2 text-gray-400">
                            <li className="flex items-center">
                                <FaCalendarAlt className="mr-3" />
                                <span>Scheduled Listening</span>
                            </li>
                            <li className="flex items-center">
                                <IoMusicalNoteOutline className="mr-3" />
                                <span>Music Discovery</span>
                            </li>
                            <li className="flex items-center">
                                <GiLaurelCrown className="mr-3" />
                                <span>Positive Music</span>
                            </li>
                            <li className="flex items-center">
                                <FaHome className="mr-3" />
                                <span>Mood Regulation</span>
                            </li>
                        </ul>
                    )}
                </div>

                <div>
                    <div
                        className="flex items-center text-gray-700 hover:text-yellow-500 cursor-pointer"
                        onClick={() => setIsPerformanceOpen(!isPerformanceOpen)}
                    >
                        <GiTrophy className="mr-3" />
                        <span>Performance</span>
                        <span className="ml-auto">
                            {isPerformanceOpen ? <FaChevronUp /> : <FaChevronDown />}
                        </span>
                    </div>
                    {isPerformanceOpen && (
                        <ul className="ml-8 mt-2 space-y-2 text-gray-400">
                            <li className="flex items-center">
                                <FaCalendarAlt className="mr-3" />
                                <span>Calendar</span>
                            </li>
                            <li className="flex items-center">
                                <FaUsers className="mr-3" />
                                <span>Groups</span>
                            </li>
                            <li className="flex items-center">
                                <FiSettings className="mr-3" />
                                <span>Music Analysis</span>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;

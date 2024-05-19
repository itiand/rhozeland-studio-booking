import React from "react";
import { motion } from "framer-motion";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";

const SpecialistStage = ({ category }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">{category.sub} SPECIALIST SESSION</h1>
      <p>$60/hr</p>
      <div className="info flex justify-between items-center">
        <div>time</div>
        <div>number of people</div>
        <div>room size</div>
      </div>
      <div id="appointment-type" className="mb-4">
        <h2>Appointment Type</h2>
        <div id="appointment-selection" className="flex flex-col gap-3">
          <button className="bg-slate-300 rounded py-2 px-4 hover:bg-slate-500">
            In Person
          </button>
          <button className="bg-slate-300 rounded py-2 px-4 hover:bg-slate-500">
            Online
          </button>
        </div>
      </div>
      <div id="select-specialist" className="bg-slate-200 px-2">
        <div className="flex justify-between items-center">
          <h2>Select a Specialist</h2>
          <div>
            <button className="bg-slate-300 rounded py-2 px-4 hover:bg-slate-500">
              &lt;
            </button>
            <button className="bg-slate-300 rounded py-2 px-4 hover:bg-slate-500">
              &gt;
            </button>
          </div>
        </div>

        <button className="w-full">
          <div
            id="earlist-btn"
            className=" w-full py-2 px-4 rounded flex items-center gap-4"
          >
            <HiMiniArrowPathRoundedSquare />
            <span>Earliest Available</span>
          </div>
        </button>
        <div className="specialist-list space-y-4">
          <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded">
            <img
              src="path/to/image1.jpg"
              alt="Specialist 1"
              className="w-12 h-12 rounded-full"
            />
            <p>John Smith</p>
          </div>
          <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded">
            <img
              src="path/to/image2.jpg"
              alt="Specialist 2"
              className="w-12 h-12 rounded-full"
            />
            <p>Jane Smith</p>
          </div>
          <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded">
            <img
              src="path/to/image3.jpg"
              alt="Specialist 3"
              className="w-12 h-12 rounded-full"
            />
            <p>Jane Smith</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialistStage;

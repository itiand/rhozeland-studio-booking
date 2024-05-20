import React from "react";
import { motion } from "framer-motion";

const CalendarStage = ({ appointmentType, specialist }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="calendar-stage p-4 bg-gray-900 text-white"
    >
      <h1 className="text-2xl font-bold mb-4">Calendar</h1>
      <p className="text-lg mb-6">
        Tap to select time, drag for 2+ hour sessions
      </p>
      <div className="appointment-type mb-6">
        <div className="flex space-x-4">
          <button className="bg-gray-700 text-white py-2 px-4 rounded">
            {appointmentType}
          </button>
          <button className="bg-gray-700 text-white py-2 px-4 rounded">
            {specialist}
          </button>
        </div>
      </div>
      <div className="calendar">
        <div className="flex justify-between items-center mb-4">
          <button className="bg-gray-700 text-white py-2 px-4 rounded">
            In Person
          </button>
          <button className="bg-gray-700 text-white py-2 px-4 rounded">
            Room
          </button>
          <button className="bg-gray-700 text-white py-2 px-4 rounded">
            Specialist
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2">
          <div className="bg-gray-800 p-4 rounded text-center">Sun</div>
          <div className="bg-gray-800 p-4 rounded text-center">Mon</div>
          <div className="bg-gray-800 p-4 rounded text-center">Tue</div>
          <div className="bg-gray-800 p-4 rounded text-center">Wed</div>
          <div className="bg-gray-800 p-4 rounded text-center">Thu</div>
          <div className="bg-gray-800 p-4 rounded text-center">Fri</div>
          <div className="bg-gray-800 p-4 rounded text-center">Sat</div>
          {/* Calendar slots */}
          <div className="bg-gray-800 p-4 rounded text-center">13</div>
          <div className="bg-gray-800 p-4 rounded text-center">14</div>
          <div className="bg-gray-800 p-4 rounded text-center">15</div>
          <div className="bg-gray-800 p-4 rounded text-center">16</div>
          <div className="bg-gray-800 p-4 rounded text-center">17</div>
          <div className="bg-gray-800 p-4 rounded text-center">18</div>
          <div className="bg-gray-800 p-4 rounded text-center">19</div>
        </div>
        <div className="grid grid-cols-1 gap-2 mt-4">
          {/* Time slots */}
          <div className="bg-gray-800 p-4 rounded text-center">3 PM</div>
          <div className="bg-gray-800 p-4 rounded text-center">4 PM</div>
          <div className="bg-gray-800 p-4 rounded text-center">5 PM</div>
          <div className="bg-gray-800 p-4 rounded text-center">6 PM</div>
          <div className="bg-gray-800 p-4 rounded text-center">7 PM</div>
          <div className="bg-gray-800 p-4 rounded text-center">8 PM</div>
          <div className="bg-gray-800 p-4 rounded text-center">9 PM</div>
        </div>
      </div>
    </motion.div>
  );
};

export default CalendarStage;

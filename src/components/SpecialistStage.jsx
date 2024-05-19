import React from "react";
import { motion } from "framer-motion";

const SpecialistStage = ({ category }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="specialist-stage p-4 bg-gray-900 text-white"
    >
      <h1 className="text-2xl font-bold mb-4">
        {category.main} & {category.sub} SPECIALIST SESSION
      </h1>
      <p className="text-xl font-semibold mb-6">$60/hr</p>
      <div className="flex items-center space-x-4 mb-6">
        <div className="flex items-center space-x-2">
          <span className="material-icons">schedule</span>
          <p>1 hr min</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="material-icons">person</span>
          <p>1 person</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="material-icons">square_foot</span>
          <p>800 sqft</p>
        </div>
      </div>
      <div className="appointment-type mb-6">
        <h2 className="text-lg font-semibold mb-2">Appointment Type</h2>
        <div className="flex space-x-4">
          <button className="bg-gray-700 text-white py-2 px-4 rounded">
            In Person
          </button>
          <button className="bg-gray-700 text-white py-2 px-4 rounded">
            Online
          </button>
        </div>
      </div>
      <div className="select-specialist">
        <h2 className="text-lg font-semibold mb-2">Select a Specialist</h2>
        <div className="flex justify-between items-center mb-4">
          <button className="bg-gray-700 text-white py-2 px-4 rounded">
            Earliest Available
          </button>
          <div className="flex space-x-2">
            <button className="material-icons bg-gray-700 text-white py-2 px-2 rounded">
              chevron_left
            </button>
            <button className="material-icons bg-gray-700 text-white py-2 px-2 rounded">
              chevron_right
            </button>
          </div>
        </div>
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
    </motion.div>
  );
};

export default SpecialistStage;

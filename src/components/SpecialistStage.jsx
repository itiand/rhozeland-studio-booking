import React from "react";
import { motion } from "framer-motion";

const SpecialistStage = ({ category }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        {category.sub} SPECIALIST SESSION
      </h1>
      <p>$60/hr</p>
      <div className="info flex justify-between items-center">
        <div>time</div>
        <div>number of people</div>
        <div>room size</div>
      </div>
    </div>
  );
};

export default SpecialistStage;

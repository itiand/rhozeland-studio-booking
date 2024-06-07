import React, { createContext, useState } from "react";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [currentStage, setCurrentStage] = useState("initial");
  const [selectedCategory, setSelectedCategory] = useState({
    main: null,
    sub: null,
  });

  const [appointmentType, setAppointmentType] = useState(null);
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleCategoryClick = (mainCategory, subCategory) => {
    setCurrentStage("selected");
    setSelectedCategory({ main: mainCategory, sub: subCategory });
  };

  const handleRestart = () => {
    setCurrentStage("initial");
    setSelectedCategory({ main: null, sub: null });
    setAppointmentType(null);
    setSelectedSpecialist(null);
    setSelectedLocation(null);
  };

  return (
    <CategoryContext.Provider
      value={{
        currentStage,
        selectedCategory,
        appointmentType,
        selectedSpecialist,
        selectedLocation,
        setAppointmentType,
        setSelectedSpecialist,
        setSelectedLocation,
        handleCategoryClick,
        handleRestart,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext, CategoryProvider };

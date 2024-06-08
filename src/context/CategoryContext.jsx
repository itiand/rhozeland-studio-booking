import React, { createContext, useState, useEffect } from "react";

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
  const [appointments, setAppointments] = useState([]); // New state for storing appointments

  const fetchAppointments = async () => {
    try {
      const response = await fetch(
        "https://api.example.com/appointments/rhozeland"
      );
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

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

    //needed?
    setAppointments([]); // Reset appointments
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        currentStage,
        selectedCategory,
        appointmentType,
        selectedSpecialist,
        selectedLocation,
        appointments, // Provide appointments to the context
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

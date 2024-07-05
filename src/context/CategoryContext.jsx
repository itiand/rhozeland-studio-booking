import React, { createContext, useState, useEffect, useRef } from "react";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [currentStage, setCurrentStage] = useState("initial");
  const [selectedCategory, setSelectedCategory] = useState({
    main: null,
    sub: null,
  });

  const [appointmentType, setAppointmentType] = useState(null); //in person or online
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [appointments, setAppointments] = useState([]); // New state for storing appointments
  const [projectField, setProjectField] = useState(null);

  const fetchAppointments = async () => {
    try {
      const response = await fetch("http://18.212.183.250:8000/all_bookings/");
      const data = await response.json();
      console.log("fetched!", data);
      setAppointments(data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const handleCategoryClick = (mainCategory, subCategory) => {
    setCurrentStage("selected");
    setSelectedCategory({ main: mainCategory, sub: subCategory });
    if (mainCategory === "Room Rentals") {
      setAppointmentType("person");
    }
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
        projectField,
        setProjectField,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext, CategoryProvider };

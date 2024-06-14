import React, { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";
import { motion } from "framer-motion";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  ViewDirective,
  ViewsDirective,
} from "@syncfusion/ej2-react-schedule";

const CalendarStage = ({ appointmentType, specialist }) => {
  const { appointments } = useContext(CategoryContext);

  //sample bookings
  const data = [
    {
      Id: 1,
      Subject: "Meeting - 1",
      StartTime: new Date(2024, 6, 2, 10, 0),
      EndTime: new Date(2024, 6, 2, 12, 30),
      IsAllDay: false,
    },
    {
      Id: 2,
      Subject: "Meeting - 2",
      StartTime: new Date(2024, 6, 3, 9, 0),
      EndTime: new Date(2024, 6, 3, 10, 0),
      IsAllDay: false,
    },
    {
      Id: 3,
      Subject: "Meeting - 3",
      StartTime: new Date(2024, 6, 4, 11, 0),
      EndTime: new Date(2024, 6, 4, 12, 0),
      IsAllDay: false,
    },
    {
      Id: 4,
      Subject: "Meeting - 4",
      StartTime: new Date(2024, 6, 5, 14, 0),
      EndTime: new Date(2024, 6, 5, 15, 0),
      IsAllDay: false,
    },
    {
      Id: 5,
      Subject: "Meeting - 5",
      StartTime: new Date(2024, 6, 6, 16, 0),
      EndTime: new Date(2024, 6, 6, 17, 0),
      IsAllDay: false,
    },
    {
      Id: 6,
      Subject: "Meeting - 6",
      StartTime: new Date(2024, 6, 7, 13, 0),
      EndTime: new Date(2024, 6, 7, 14, 0),
      IsAllDay: false,
    },
    {
      Id: 7,
      Subject: "Meeting - 7",
      StartTime: new Date(2024, 6, 8, 10, 0),
      EndTime: new Date(2024, 6, 8, 11, 0),
      IsAllDay: false,
    },
    {
      Id: 8,
      Subject: "Meeting - 8",
      StartTime: new Date(2024, 6, 9, 15, 0),
      EndTime: new Date(2024, 6, 9, 16, 0),
      IsAllDay: false,
    },
  ];
  const eventSettings = { dataSource: data };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="calendar-stage p-4 bg-gray-900 text-white"
    >
      <ScheduleComponent
        eventSettings={eventSettings}
        selectedDate={new Date()}
        currentView="Day"
      >
        <ViewsDirective>
          <ViewDirective option="Week" />
          <ViewDirective option="Day" />
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </motion.div>
  );
};

export default CalendarStage;

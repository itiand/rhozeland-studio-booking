import React from "react";
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
  //sample bookings
  const data = [
    {
      Id: 1,
      Subject: "Meeting - 1",
      StartTime: new Date(2024, 6, 2, 10, 0),
      EndTime: new Date(2024, 6, 2, 12, 30),
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

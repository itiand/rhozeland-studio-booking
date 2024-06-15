import React, { useContext, useRef } from "react";
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
  DragAndDrop,
  TimelineViews,
} from "@syncfusion/ej2-react-schedule";

const CalendarStage = ({ appointmentType, specialist }) => {
  const { appointments } = useContext(CategoryContext);

  const scheduleRef = useRef(null);

  const refreshEvents = () => {
    if (scheduleRef.current) {
      scheduleRef.current.refreshEvents();
    }
  };
  // //sample bookings

  const data = [
    {
      Id: 1,
      Subject: "Meeting - 1",
      StartTime: new Date(2024, 5, 13, 10, 0),
      EndTime: new Date(2024, 5, 13, 12, 30),
      IsAllDay: false,
    },
    {
      Id: 2,
      Subject: "Meeting - 2",
      StartTime: new Date(2024, 5, 14, 9, 0),
      EndTime: new Date(2024, 5, 14, 10, 0),
      IsAllDay: false,
      RecurrenceRule: "FREQ=DAILY;INTERVAL=1;COUNT=5",
      IsAllDay: true,
      isBlock: true,
    },
    {
      Id: 3,
      Subject: "Meeting - 3",
      StartTime: new Date(2024, 5, 15, 11, 0),
      EndTime: new Date(2024, 5, 15, 12, 0),
      IsAllDay: false,
    },
    {
      Id: 4,
      Subject: "Meeting - 4",
      StartTime: new Date(2024, 5, 16, 14, 0),
      EndTime: new Date(2024, 5, 16, 15, 0),
      IsAllDay: false,
    },
    {
      Id: 5,
      Subject: "Meeting - 5",
      StartTime: new Date(2024, 5, 17, 16, 0),
      EndTime: new Date(2024, 5, 17, 17, 0),
      IsAllDay: false,
    },
    {
      Id: 6,
      Subject: "Meeting - 6",
      StartTime: new Date(2024, 5, 18, 13, 0),
      EndTime: new Date(2024, 5, 18, 14, 0),
      IsAllDay: false,
    },
    {
      Id: 7,
      Subject: "Meeting - 7",
      StartTime: new Date(2024, 5, 19, 10, 0),
      EndTime: new Date(2024, 5, 19, 11, 0),
      IsAllDay: false,
    },
    {
      Id: 8,
      Subject: "Meeting - 8",
      StartTime: new Date(2024, 5, 20, 15, 0),
      EndTime: new Date(2024, 5, 20, 16, 0),
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
      <button style={{ backgroundColor: "red" }} onClick={refreshEvents}>
        Refresh Events
      </button>
      {/* SCHEDULE COMPONENT */}
      <ScheduleComponent
        eventSettings={eventSettings}
        selectedDate={new Date()}
        currentView="Day"
        ref={scheduleRef}
      >
        <ViewsDirective>
          <ViewDirective option="Week" />
          <ViewDirective option="Day" />
          <ViewDirective option="TimelineDay" />
        </ViewsDirective>
        <Inject
          services={[
            Day,
            Week,
            WorkWeek,
            Month,
            Agenda,
            DragAndDrop,
            TimelineViews,
          ]}
        />
      </ScheduleComponent>
      {/* END SCHEDULE COMPONENT */}
    </motion.div>
  );
};

export default CalendarStage;

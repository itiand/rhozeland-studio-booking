import React, { useContext, useRef, useState } from "react";
import { CategoryContext } from "../context/CategoryContext";
import { motion } from "framer-motion";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Agenda,
  Month,
  Inject,
  ViewDirective,
  ViewsDirective,
  DragAndDrop,
  TimelineViews,
  Timezone,
} from "@syncfusion/ej2-react-schedule";

import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";

const CalendarStage = ({ appointmentType, specialist }) => {
  const { appointments } = useContext(CategoryContext);
  const scheduleRef = useRef(null);

  const [selectedDate, setSelectedDate] = useState(new Date());

  //REFRESH EVENTS
  const refreshEvents = () => {
    if (scheduleRef.current) {
      scheduleRef.current.refreshEvents();
    }
  };
  //END REFRESH EVENTS

  //EVENT DETAILS
  const getEventDetails = (args) => {
    if (scheduleRef.current) {
      let event = scheduleRef.current.getEventDetails(args.element);
      // console.log("event", event);
    }
  };
  //END EVENT DETAILS

  //EVENT RENDERED
  const onEventRendered = (args) => {
    // Compare event's EndTime with the selected date
    if (args.data.EndTime < selectedDate) {
      args.element.classList.add("red-border");
    }
  };
  //END EVENT RENDERED

  //DATA START
  const data = [
    {
      Id: 1,
      Subject: "Meeting - 1",
      StartTime: new Date(2024, 5, 9, 13, 0),
      EndTime: new Date(2024, 5, 9, 14, 30),
      IsAllDay: false,
      RecurrenceRule: "FREQ=DAILY;INTERVAL=1;COUNT=5",
      RecurrenceException: "20240613", //adding exceptions
    },
    {
      Id: 2,
      Subject: "Meeting - 2",
      StartTime: new Date(2024, 5, 14, 9, 0),
      EndTime: new Date(2024, 5, 14, 10, 0),
      IsAllDay: false,
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
  ];

  ////remote data set up
  let calendarId =
    "e133f66d097f96376e7ba4f32278b6e516e45d051648a23d203d1cbfb866fa6b@group.calendar.google.com";
  const apiAccessKey = "AIzaSyDOp-Mv-voooD18ddspABgZ-I4qcrwMlnw";

  let remoteData = new DataManager({
    url: `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiAccessKey}`,
    adaptor: new WebApiAdaptor(),
    crossDomain: true,
  });
  ////end remote data set up

  const onDataBinding = (e) => {
    // Extract items from the event result
    let items = e.result.items;
    let schedulerData = [];
    let timezone = new Timezone();

    // Check if there are items to process
    if (items.length > 0) {
      for (let event of items) {
        let isAllDay = !event.start.dateTime;
        let start = event.start.dateTime || event.start.date;
        let end = event.end.dateTime || event.end.date;

        if (event.summary === `All Day`) {
          console.log(`start`, start);
          console.log(`end`, end);
        }

        // Push formatted event data to schedulerData
        schedulerData.push({
          Id: event.id,
          Subject: event.summary,
          StartTime: start,
          EndTime: end,
          IsAllDay: isAllDay,
        });
        // console.log(`${event.summary} pushed`, schedulerData);
      }
    }
    // Update the event settings with the formatted data
    e.result = schedulerData;
  };

  const eventSettings = { dataSource: remoteData };
  //DATA END

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
      <button onClick={() => console.log("Timezone", Timezone)}>Debug</button>
      {/* SCHEDULE COMPONENT */}
      <ScheduleComponent
        eventSettings={eventSettings}
        selectedDate={selectedDate}
        currentView="Week"
        ref={scheduleRef}
        eventClick={getEventDetails}
        eventRendered={onEventRendered}
        dataBinding={onDataBinding}
      >
        <ViewsDirective>
          <ViewDirective option="Week" />
          <ViewDirective option="Day" />
          <ViewDirective option="TimelineDay" />
          <ViewDirective option="Month" />
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

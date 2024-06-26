import React, { useContext, useRef, useState, useEffect } from "react";
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
import { DataManager, ODataV4Adaptor } from "@syncfusion/ej2-data";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

const CalendarStage = ({ appointmentType, specialist }) => {
  const { appointments } = useContext(CategoryContext);
  const scheduleRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [remoteData, setRemoteData] = useState(null);
  const buttonObj = useRef(null);

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

  //mock example data
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
  ];

  ////
  ////
  ////
  ////remote data set up
  useEffect(() => {
    const fetchData = async () => {
      let calendarId =
        "e133f66d097f96376e7ba4f32278b6e516e45d051648a23d203d1cbfb866fa6b@group.calendar.google.com";
      const apiAccessKey = "AIzaSyDOp-Mv-voooD18ddspABgZ-I4qcrwMlnw";

      const remoteData = new DataManager({
        url: `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiAccessKey}`,
        adaptor: new ODataV4Adaptor(),
        crossDomain: true,
      });
      await remoteData.ready;
      console.log("remoteData", remoteData);
      setRemoteData(remoteData);
    };

    fetchData(); // Call the async function
  }, []);
  ////end remote data set up
  ////
  ////
  ///

  const onDataBinding = (e) => {
    // Extract items from the event result
    let items = e.result.items;
    let schedulerData = [];

    // Check if there are items to process
    if (items.length > 0) {
      for (let event of items) {
        let isAllDay = !event.start.dateTime;
        let start = event.start.dateTime || event.start.date;
        let end = event.end.dateTime || event.end.date;

        // Convert all-day event dates to Date objects
        if (isAllDay) {
          start = new Date(start + "T00:00:00");
          end = new Date(end + "T00:00:00");
        }

        // Push formatted event data to schedulerData
        schedulerData.push({
          Id: event.id,
          Subject: event.summary,
          StartTime: start,
          EndTime: end,
          IsAllDay: isAllDay,
        });
        console.log(
          `Event ${event.summary.toUpperCase()} starts at ${start} and ends at ${end} and the type of start is ${typeof start} and the type of end is ${typeof end}`
        );
      }

      console.log(`schedulerData done`, schedulerData);
    }
    // Update the event settings with the formatted data
    e.result = schedulerData;
  };

  const onAddClick = () => {
    let Data = [
      {
        Id: 1,
        Subject: "Conference",
        StartTime: new Date(2024, 5, 24, 9, 0), // Updated date to June 24, 2024
        EndTime: new Date(2024, 5, 24, 10, 0), // Updated date to June 24, 2024
        IsAllDay: false,
      },
      {
        Id: 2,
        Subject: "Meeting",
        StartTime: new Date(2024, 5, 27, 10, 0), // Updated date to June 25, 2024
        EndTime: new Date(2024, 5, 27, 11, 30), // Updated date to June 25, 2024
        IsAllDay: false,
      },
    ];
    scheduleRef.current.addEvent(Data);
    buttonObj.current.element.setAttribute("disabled", "true");
  };

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
      <ButtonComponent onClick={onAddClick} ref={buttonObj}>
        Add Events
      </ButtonComponent>
      {/* SCHEDULE COMPONENT */}
      <ScheduleComponent
        eventSettings={{ includeFiltersInQuery: true, dataSource: remoteData }}
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

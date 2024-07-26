import React, { useContext, useRef, useState, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
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
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { format } from "date-fns";
import { formatInTimeZone, toZonedTime } from "date-fns-tz";

const CalendarStage = ({ appointmentType, specialist }) => {
  const { appointments, setAppointments, fetchAppointments } =
    useContext(CategoryContext);
  const scheduleRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const buttonObj = useRef(null);

  const {
    data,
    error,
    isLoading,
    refetch: refetchAppointments,
  } = useQuery({
    queryKey: ["appointments"],
    queryFn: fetchAppointments,
  });

  ////TESTING POST EVENT
  ///////
  ///START

  ///////
  //dummy data to post
  const dummyEvent = {
    client_id: 3,
    room_id: 1,
    employee_id: 1,
    book_date: "2024-07-05T15:53:57.192Z",
    start_time: "2024-08-03T15:53:57.192Z",
    end_time: "2024-08-03T15:53:57.192Z",
    canceled: true,
    num_guests: 0,
    in_person: true,
    description: "NEW APPOINTMENT",
  };

  const mutation = useMutation({
    mutationFn: async (newEvent) => {
      const response = await fetch("/api/bookings/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });

      if (!response.ok) {
        const errorMessage = await response.text(); // Get error message from respons
        throw new Error(`Failed to save event: ${errorMessage}`); // Include error message
      }

      return response.json();
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (bookingId) => {
      const response = await fetch(`/api/bookings/${bookingId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to delete event: ${errorMessage}`);
      }
      return response.json();
    },
  });

  // Function to handle the button click
  const handleAddEvent = () => {
    mutation.mutate(dummyEvent, {
      onSuccess: (data) => {
        console.log("Event saved successfully", data);
        alert("Event saved successfully", data);
        refetchAppointments();
      },
      onError: (error) => {
        console.error("Error saving event", error);
        alert("Error saving event", error);
      },
    });
  };
  /////
  ///END
  /////

  //REFRESH EVENTS - REFRESH EVENTS WHEN BUTTON IS CLICKED
  const refreshEvents = () => {
    if (scheduleRef.current) {
      console.log("refreshing events");
      refetchAppointments();
      scheduleRef.current.refreshEvents();
    }
  };
  //END REFRESH EVENTS

  //EVENT DETAILS - GETS EVENT DETAILS WHEN EVENT IS CLICKED
  const getEventDetails = (args) => {
    if (scheduleRef.current) {
      let event = scheduleRef.current.getEventDetails(args.element);
      // console.log("event", event);
    }
  };
  //END EVENT DETAILS

  //EVENT RENDERED - ADDS RED BORDER TO EVENTS THAT END BEFORE THE SELECTED DATE
  const onEventRendered = (args) => {
    // Compare event's EndTime with the selected date
    if (args.data.EndTime < selectedDate) {
      args.element.classList.add("red-border");
    }
  };
  //END EVENT RENDERED

  ///intercepting the event creation
  const onAddClick = () => {
    let Data = [
      {
        client_id: 3,
        room_id: 1,
        employee_id: 1,
        book_date: "2024-08-05T15:53:57.192Z",
        start_time: "2024-08-01T15:53:57.192Z",
        end_time: "2024-08-01T15:53:57.192Z",
        canceled: true,
        num_guests: 0,
        in_person: true,
        description: "FROM WEDNESDAY NIGHT",
      },
    ];
    scheduleRef.current.addEvent(Data);
    // buttonObj.current.element.setAttribute("disabled", "true");
  };

  //intercepting the event creation to the UI
  const onActionBegin = async (args) => {
    alert("onActionBegin is triggered. args is ", args);
    console.log("onAtionBeging TRIGGERED!", args);

    if (args.requestType === "eventCreate") {
      args.cancel = true; // Prevent default action
      const eventData = args.data[0]; // this is just one event. args.data is an array of events. but the post method expects a single event.

      console.log("eventData", eventData);

      const desiredTimeZone = "America/Toronto";

      //NOTE: MIGHT NOT EVEN NEED THIS AS IT"S ALREADY IN TORONTO TIME ZONE
      const convertedStartTime = toZonedTime(
        eventData.StartTime,
        desiredTimeZone
      );
      const convertedEndTime = toZonedTime(eventData.EndTime, desiredTimeZone);
      const convertedBookDate = toZonedTime(
        eventData.StartTime,
        desiredTimeZone
      );

      console.log("convertedStartTime", convertedStartTime);
      console.log("convertedEndTime", convertedEndTime);
      console.log("convertedBookDate", convertedBookDate);

      console.log("now formatting the date to iso string....");

      //formatting the date to iso string
      const formattedStartTime = format(
        convertedStartTime,
        "yyyy-MM-dd'T'HH:mm:ssXXX"
      );
      const formattedEndTime = format(
        convertedEndTime,
        "yyyy-MM-dd'T'HH:mm:ssXXX"
      );
      const formattedBookDate = format(
        convertedBookDate,
        "yyyy-MM-dd'T'HH:mm:ssXXX"
      );

      console.log("formattedStartTime", formattedStartTime);
      console.log("formattedStartTime type", typeof formattedStartTime);
      console.log("formattedEndTime", formattedEndTime);
      console.log("formattedBookDate", formattedBookDate);

      //need to reformat the data to match the format of the dummy data to post
      const reformattedData = {
        allday: eventData.IsAllDay,
        book_date: formattedBookDate,
        canceled: false,
        client_id: 3,
        description: eventData.Subject,
        employee_id: 1,
        end_time: formattedEndTime,
        in_person: true,
        num_guests: 0,
        room_id: 1,
        start_time: formattedStartTime,
      };
      console.log("reformattedData", reformattedData);

      mutation.mutate(reformattedData, {
        onSuccess: (data) => {
          console.log("Event Saved Successfully", data);
          alert("Event Saved Successfully", data);
          refetchAppointments();
        },
        onError: (error) => {
          console.error("Error saving event", error);
          alert("Error saving event", error);
        },
      });
    }

    if (args.requestType === "eventRemove") {
      console.log("eventRemove is triggered. args is ", args);
      const bookingId = args.data[0].Id; // Extract the booking ID
      deleteMutation.mutate(bookingId, {
        onSuccess: (data) => {
          console.log("Event Deleted Successfully", data);
          alert("Event Deleted Successfully", data);
          refetchAppointments();
        },
        onError: (error) => {
          console.error("Error deleting event", error);
          alert("Error deleting event", error);
        },
      });
    }
  };

  //TO FORMAT THE VALUES
  const exampleDataComingFromTheDB = [
    {
      book_date: "2024-07-05T16:29:56",
      canceled: true,
      client_id: 3,
      description: "string",
      employee_id: 1,
      end_time: "2024-07-05T16:29:56",
      id: 0,
      in_person: true,
      num_guests: 0,
      room_id: 1,
      start_time: "2024-07-05T16:29:56",
    },
  ];

  const onDataBinding = (e) => {
    // Extract items from the event result
    let appointments = e.result;
    let schedulerData = [];

    // Check if there are items to process
    if (appointments.length > 0) {
      // Loop through each event and format the data
      for (let appointment of appointments) {
        let isAllDay = appointment.allday;
        let start = appointment.start_time;
        let end = appointment.end_time;

        // Convert all-day event dates to Date objects
        // if (isAllDay) {
        //   start = new Date(start + "T00:00:00");
        //   end = new Date(end + "T00:00:00");
        // }

        // Push formatted event data to schedulerData
        schedulerData.push({
          Id: appointment.id,
          Subject: appointment.description,
          StartTime: start,
          EndTime: end,
          IsAllDay: isAllDay, // currently hardcoded as false
        });
      }
    }
    // Update the event settings with the formatted data
    e.result = schedulerData;
  };
  ///////
  //END
  //////

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
      <ButtonComponent
        id="add"
        title="eventCreate"
        onClick={onAddClick}
        ref={buttonObj}
      >
        onAddClick [intercepted method]
      </ButtonComponent>

      <button onClick={handleAddEvent} className="bg-red-500">
        handleAddEvent [useMutation hook]
      </button>
      {/* SCHEDULE COMPONENT */}
      <ScheduleComponent
        eventSettings={{ dataSource: appointments }}
        selectedDate={selectedDate}
        currentView="Month"
        ref={scheduleRef}
        eventClick={getEventDetails}
        eventRendered={onEventRendered}
        actionBegin={onActionBegin}
        dataBinding={onDataBinding}
        timezone="America/Toronto"
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

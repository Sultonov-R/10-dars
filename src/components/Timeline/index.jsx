import { useState } from "react";
import { TimeRange } from "@matiaslgonzalez/react-timeline-range-slider";
import { set } from "date-fns";
import './index.css'

export default function TimeLine() {
  const now = new Date();
  const getTodayAtSpecificHour = (hour = 12) =>
    set(now, { hours: hour, minutes: 0, seconds: 0, milliseconds: 0 });
  const [errorState, setErrorState] = useState(false);

  const disabledIntervals = [
    {
      id: "1",
      start: getTodayAtSpecificHour(16),
      end: getTodayAtSpecificHour(17),
    },
  ];
  return (
    <div className="App">
      <TimeRange
        disabledIntervals={disabledIntervals}
        onUpdateCallback={({ error }) => {
          setErrorState(error);
        }}
        error={errorState}
      />
    </div>
  );
}

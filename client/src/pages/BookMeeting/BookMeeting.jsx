import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateCalendar } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
import "./BookMeeting.css";

const BookMeeting = (name) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [mentor, setMentor] = useState("");

  useEffect(() => {
    try {
      const getData = async (name) => {
        const res = await axios.post(`/mentor/book`, { name });
        console.log(res.data);
        setMentor(res.data.mentor);
      };

      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <main>
      <h2>{mentor.name}</h2>
      <div className="calendar">
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          label="Controlled calendar"
        >
          <DateCalendar
            value={selectedDate}
            onChange={(selectedDate) => setSelectedDate(selectedDate)}
          />
        </LocalizationProvider>
      </div>
    </main>
  );
};

export default BookMeeting;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateCalendar } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
import "./BookMentorMeeting.css";

const BookMentorMeeting = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [mentor, setMentor] = useState("");
  const { name } = useParams();

  useEffect(() => {
    try {
      const getData = async (name) => {
        const res = await axios.post(`/api/book/mentor`, { name });
        console.log(res.data);
        setMentor(res.data.mentor);
      };

      if (name) {
        getData(name);
      }
    } catch (error) {
      console.log(error);
    }
  }, [name]);

  return (
    <main className="book-meeting-container">
      <h1>Book a meeting with {mentor.name}</h1>
      <div className="container">
        <div className="info-container">
          <h3>{mentor.name}</h3>
          <div>Sector: {mentor.sector}</div>
          <div>Major: {mentor.major}</div>
          <div>Region: {mentor.region}</div>
        </div>
        <div className="calendar-container">
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            label="Controlled calendar"
          >
            <DateCalendar
              className="calendar"
              value={selectedDate}
              onChange={(selectedDate) => setSelectedDate(selectedDate)}
            />
          </LocalizationProvider>
        </div>
      </div>
    </main>
  );
};

export default BookMentorMeeting;

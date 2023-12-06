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
    <main className="book-meeting-container_book1">
      <h1>Book a meeting with {mentor.name}</h1>
      <div className="container_book1">
        <div className="info-container_book1">
          <h3>{mentor.name}</h3>
          <div>Sector: {mentor.sector}</div>
          <div>Major: {mentor.major}</div>
          <div>Region: {mentor.region}</div>
        </div>
        <div className="calendar-container_book1">
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            label="Controlled calendar"
          >
            <DateCalendar
              className="calendar_book1"
              value={selectedDate}
              onChange={(selectedDate) => setSelectedDate(selectedDate)}
            />
          </LocalizationProvider>
        </div>
      </div>
      <a href="/dashboard">
      <button type="button" className="confirm-button1" >
          Confirm
        </button>
        </a>
    </main>
  );
};

export default BookMentorMeeting;

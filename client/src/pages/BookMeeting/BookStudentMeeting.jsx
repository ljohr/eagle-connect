import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateCalendar } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
import "./BookStudentMeeting.css";

const BookStudentMeeting = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [student, setStudent] = useState("");
  const { name } = useParams();

  useEffect(() => {
    try {
      const getData = async (name) => {
        const res = await axios.post(`/api/book/student`, { name });
        console.log(res.data);
        setStudent(res.data.student);
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
      <h1>Book a meeting with {student.name}</h1>
      <div className="container">
        <div className="info-container">
          <h3>{student.name}</h3>
          <div>Sector: {student.sector}</div>
          <div>Major: {student.major}</div>
          <div>Region: {student.region}</div>
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

export default BookStudentMeeting;

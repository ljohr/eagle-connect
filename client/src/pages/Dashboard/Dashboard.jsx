import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import profileLink1 from "../../assets/profile-1.svg";
import profileLink2 from "../../assets/profile-2.svg";
import "./Dashboard.css";

const Dashboard = () => {
  const { isStudent } = useContext(AuthContext);
  return (
    <main className="dashboard-main">
      <h1>My Dashboard</h1>
      <div>
        <section className="appointments">
          <div className="scheduled">
            <h3 className="title">Scheduled Appointments</h3>
            <div className="appointment-single">
              <h4 className="time">December 20th at 4pm</h4>
              <div className="appointment-inner">
                <div className="profile-img">
                  <img src={profileLink1} alt="profile-image" />
                </div>
                <div className="appointment-info">
                  <p className="name">James Smith</p>
                  <p>Class of 2020</p>
                  <p>Software Engineer working at Datadog</p>
                  <p className="btn-category">Coffee Chat</p>
                </div>
              </div>
            </div>

            <div className="appointment-single">
              <h4 className="time">December 27th at 4pm</h4>
              <div className="appointment-inner">
                <div className="profile-img">
                  <img src={profileLink1} alt="profile-image" />
                </div>
                <div className="appointment-info">
                  <p className="name">James Smith</p>
                  <p>Class of 2020</p>
                  <p>Software Engineer working at Datadog</p>
                  <p className="btn-category">Resume Review</p>
                </div>
              </div>
            </div>
            <div className="appointment-single">
              <h4 className="time">January 10th at 1pm</h4>
              <div className="appointment-inner">
                <div className="profile-img">
                  <img src={profileLink2} alt="profile-image" />
                </div>
                <div className="appointment-info">
                  <p className="name">Audrey Shin</p>
                  <p>Class of 2022</p>
                  <p>Software Engineer working at MongoDB</p>
                  <p className="btn-category">Coffee Chat</p>
                </div>
              </div>
            </div>
          </div>
          <div className="saved">
            <h3 className="title">
              {isStudent ? <>Saved Mentors</> : <>Saved Students</>}
            </h3>
            <div className="mentor-single">
              <div className="mentor-inner">
                <div className="profile-img">
                  <img src={profileLink1} alt="profile-image" />
                </div>
                <div className="appointment-info">
                  <p className="name">Dan Alejo</p>
                  <p>Class of 2019</p>
                  <p>Software Engineer working at Grammarly</p>
                  <p className="btn-category">Resume Review</p>
                  <p className="btn-category">Coffee Chat</p>
                  <p className="btn-category">Zoom</p>
                </div>
              </div>
            </div>

            <div className="mentor-single">
              <div className="mentor-inner">
                <div className="profile-img">
                  <img src={profileLink2} alt="profile-image" />
                </div>
                <div className="appointment-info">
                  <p className="name">Katie Gupta</p>
                  <p>Class of 2021</p>
                  <p>Software Engineer working at Apple</p>
                  <p className="btn-category">Resume Review</p>
                  <p className="btn-category">Zoom</p>
                </div>
              </div>
            </div>
            <div className="mentor-single">
              <div className="mentor-inner">
                <div className="profile-img">
                  <img src={profileLink1} alt="profile-image" />
                </div>
                <div className="appointment-info">
                  <p className="name">John Wilson</p>
                  <p>Class of 2020</p>
                  <p>Software Engineer working at Bloomberg</p>
                  <p className="btn-category">Coffee Chat</p>
                  <p className="btn-category">Zoom</p>
                </div>
              </div>
            </div>
            <div className="mentor-single">
              <div className="mentor-inner">
                <div className="profile-img">
                  <img src={profileLink2} alt="profile-image" />
                </div>
                <div className="appointment-info">
                  <p className="name">Jane Lim</p>
                  <p>Class of 2016</p>
                  <p>Software Engineer working at Audible</p>
                  <p className="btn-category">Coffee Chat</p>
                  <p className="btn-category">Zoom</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Dashboard;

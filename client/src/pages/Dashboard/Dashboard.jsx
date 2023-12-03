import "./Dashboard.css";

const Dashboard = () => {
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
                  <img src="../assets/profile-1.svg" alt="profile-image" />
                </div>
                <div className="appointment-info">
                  <p className="name">James Smith</p>
                  <p>Class of 2020</p>
                  <p>Software Engineer working at Datadog</p>
                  <p className="btn-category">Coffee Chat</p>
                </div>
              </div>
            </div>
          </div>
          <div className="saved">
            <h3 className="title">Saved Mentors</h3>
            <div className="mentor-single">
              <div className="mentor-inner">
                <div className="profile-img">
                  <img src="../assets/profile-1.svg" alt="profile-image" />
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
          </div>
        </section>
      </div>

      <div>
        <h2>Saved Mentors</h2>
      </div>
    </main>
  );
};

export default Dashboard;

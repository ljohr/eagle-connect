import eagleEarthLink from "../../assets/eagle-earth.svg";
import { Link } from "react-router-dom";
import "./Home.css";

const Hero = () => {
  return (
    <div className="hero">
      <img className="hero-img" src={eagleEarthLink} alt="Profile" />
      <h1>Eagle Connect</h1>

      <h3>Your Ultimate BC Networking Companion </h3>
      <div className="home-login-container">
        <button>
          <Link to="/mentor/login">Login as a Mentor</Link>
        </button>
        <button>
          <Link to="/student/login">Login as a Student</Link>
        </button>
      </div>
    </div>
  );
};

const Info = () => {
  return (
    <div className="home-info">
      <p>
        Explore careers or offer help on our platform designed for meaningful
        connections in our vibrant community.
      </p>
    </div>
  );
};

const KeyImage = () => {
  return (
    <div class="image-container">
      <div class="image-wrapper">
        <div class="circle-box">
          <img
            src="https://www.svgrepo.com/show/492701/supporting-business-person.svg"
            alt="Image 1"
          ></img>
        </div>
        <p class="image-caption">Establish Connection</p>
      </div>

      <div class="image-wrapper">
        <div class="circle-box">
          <img
            src="https://www.svgrepo.com/show/530239/schedule.svg"
            alt="Image 2"
          ></img>
        </div>
        <p class="image-caption">Book Meeting with Scheduling Tool</p>
      </div>

      <div class="image-wrapper">
        <div class="circle-box">
          <img
            src="https://www.svgrepo.com/show/493366/meeting-person.svg"
            alt="Image 3"
          ></img>
        </div>
        <p class="image-caption">Choose Your Preferred Meeting Type</p>
      </div>

      <div class="image-wrapper">
        <div class="circle-box">
          <img
            src="https://www.svgrepo.com/show/228137/job-info.svg"
            alt="Image 4"
          ></img>
        </div>
        <p class="image-caption">Discover Your Career Path</p>
      </div>
    </div>
  );
};

const HowToJoinTitle = () => {
  return (
    <div className="how-to-join">
      <h3>Connect in 4 Steps</h3>
      </div>
  )
}


const HowToJoin = () => {
  return (
    <div class="image-container">
      <div class="image-wrapper">
        <div class="circle-box">
          <img
            src="https://www.svgrepo.com/show/302839/sign-up-application.svg"
            alt="Image 1"
          ></img>
        </div>
        <p class="image-caption">Sign Up</p>
      </div>

      <div class="image-wrapper">
        <div class="circle-box">
          <img
            src="https://www.svgrepo.com/show/302837/productive-person-thinking.svg"
            alt="Image 2"
          ></img>
        </div>
        <p class="image-caption">Discover Profiles</p>
      </div>

      <div class="image-wrapper">
        <div class="circle-box">
          <img
            src="https://www.svgrepo.com/show/302842/stay-active.svg"
            alt="Image 3"
          ></img>
        </div>
        <p class="image-caption">Schedule Meetings</p>
      </div>
      
      <div class="image-wrapper">
        <div class="circle-box">
          <img
            src="https://www.svgrepo.com/show/302836/new-team-member.svg"
            alt="Image 4"
          ></img>
        </div>
        <p class="image-caption">Meet Your Mentor</p>
      </div>
    </div>
  );
};

// const HowToJoin = () => {
//   return (
//     <div className="how-to-join">
//       <h3>How To Join</h3>
//       <ol>
//         <li>
//           <strong>Sign Up:</strong>
//           <p>
//             Create your Eagle Connect account in minutes. Provide details about
//             your academic background, interests, and career goals to enhance
//             your profile.
//           </p>
//         </li>

//         <li>
//           <strong>Discover Profiles:</strong>
//           <p>
//             Explore profiles of students and alumni who share your professional
//             interests. Our matching algorithm connects you with potential
//             mentors, mentees, or networking partners.
//           </p>
//         </li>

//         <li>
//           <strong>Schedule Meetings:</strong>
//           <p>
//             Use our scheduling tool to find convenient meeting times. Whether
//             it's a virtual Zoom meeting or an in-person coffee chat, networking
//             has never been this easy.
//           </p>
//         </li>

//         <li>
//           <strong>Request Mentorship:</strong>
//           <p>
//             Reach out to experienced alumni by sending mentorship requests.
//             Receive guidance, insights, and advice to navigate your academic and
//             professional journey.
//           </p>
//         </li>
//       </ol>
//     </div>
//   );
// };

const Home = () => {
  return (
    <main>
      <Hero />
      <Info />
      <KeyImage />
      <HowToJoinTitle/>
      <HowToJoin />
    </main>
  );
};

export default Home;

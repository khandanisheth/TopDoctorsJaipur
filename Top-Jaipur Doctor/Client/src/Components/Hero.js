// React, hooks aur zaroori icons/images ko import kiya gaya hai
import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor-picture.png"; // Doctor image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // Navigation ke liye hook
import "../Styles/Hero.css"; // Is component ka CSS file
function Hero() {
  const navigate = useNavigate(); // Page navigation ke liye hook
  const [goUp, setGoUp] = useState(false); // "Scroll to top" button show/hide ke liye state
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Page ko smooth scroll se upar le jaata hai
  };
  const handleBookAppointmentClick = () => {
    navigate("/appointment"); // Appointment page par navigate karta hai
  };
  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true); // Scroll zyada hone par button show
      } else {
        setGoUp(false); // Scroll kam hone par button hide
      }
    };
    window.addEventListener("scroll", onPageScroll); // Event listener lagaya

    return () => {
      window.removeEventListener("scroll", onPageScroll); // Component unmount hone par clean-up
    };
  }, []);
  return (
    <div className="section-container">
      {/* Hero Section (text + image) */}
      <div className="hero-section">

        {/* Left Side: Text */}
        <div className="text-section">
          <p className="text-headline">❤️ Health comes first</p>
          <h2 className="text-title">
            Find your Doctor and make an Appointments
          </h2>
          <p className="text-descritpion">
            TopDoctorsJaipur ek simple aur user-friendly platform hai jahan patient doctor ko dekh sakte hain, unka location aur timing check kar sakte hain aur aasani se appointment book kar sakte hain.
          </p>

          {/* Book Appointment Button */}
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
          </button>

          {/* Stats (patients, doctors, experience) */}
          <div className="text-stats">
            <div className="text-stats-container">
              <p>15+</p>
              <p>Receive Patients</p>
            </div>

            <div className="text-stats-container">
              <p>20+</p>
              <p>Expert Doctors</p>
            </div>

            <div className="text-stats-container">
              <p>10+</p>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>

        {/* Right Side: Doctor Image */}
        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      {/* Scroll to top button */}
      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`} // Conditional class
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}


export default Hero;


// import React, { useEffect, useState } from "react";
// import Doctor from "../Assets/doctor-picture.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom";
// import "../Styles/Hero.css";

// function Hero() {
//   const navigate = useNavigate();
//   const [goUp, setGoUp] = useState(false);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleBookAppointmentClick = () => {
//     navigate("/appointment");
//   };

//   useEffect(() => {
//     const onPageScroll = () => {
//       if (window.scrollY > 600) {
//         setGoUp(true);
//       } else {
//         setGoUp(false);
//       }
//     };
//     window.addEventListener("scroll", onPageScroll);

//     return () => {
//       window.removeEventListener("scroll", onPageScroll);
//     };
//   }, []);

//   return (
//     <div className="section-container">
//       <div className="hero-section">
//         <div className="text-section">
//           <p className="text-headline">❤️ Health comes first</p>
//           <h2 className="text-title">
//             Find your Doctor and make an Appointments
//           </h2>
//           <p className="text-descritpion">
//             TopDoctorsJaipur is a simple and user-friendly platform where patients can view available doctors,
//             check their location and timings, and book appointments online with ease
//           </p>
//           <button
//             className="text-appointment-btn"
//             type="button"
//             onClick={handleBookAppointmentClick}
//           >
//             <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
//           </button>
//           <div className="text-stats">
//             <div className="text-stats-container">
//               <p>15+</p>
//               <p>Receive Patients</p>
//             </div>

//             <div className="text-stats-container">
//               <p>20+</p>
//               <p>Expert Doctors</p>
//             </div>

//             <div className="text-stats-container">
//               <p>10+</p>
//               <p>Years of Experience</p>
//             </div>
//           </div>
//         </div>

//         <div className="hero-image-section">
//           <img className="hero-image1" src={Doctor} alt="Doctor" />
//         </div>
//       </div>

//       <div
//         onClick={scrollToTop}
//         className={`scroll-up ${goUp ? "show-scroll" : ""}`}
//       >
//         <FontAwesomeIcon icon={faAngleUp} />
//       </div>
//     </div>
//   );
// }

// export default Hero;

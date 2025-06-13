
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Important: Toastify CSS import karna zaroori hai

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const doctorList = [
    "Dr. Mukesh Sharma", "Dr. Pushkar Gupta", "Dr. S R Shukla", "Dr. J. P. Dhamija",
    "Dr. Manisha Nijhawan", "Dr. Sandeep Nijhawan", "Dr. Mukesh Bhaskar",
    "Dr. Ashok Gupta", "Dr. Dinesh Khandelwal", "Dr. Shiv Gautam", "Dr. Hemant Bhartiya",
    "Dr. Shankar Basandani", "Dr. R. Tongia", "Dr. Ajeet Bana", "Dr. A K Sharma",
    "Dr. Rajkumar Goyal", "Dr. Vikas Mittal", "Dr. Umakant Gupta",
    "Dr. Anoop Jhurani", "Dr. Rajeev Bhargava", "Dr. Anita Bhandari"
  ];

  const handleDoctorInputChange = (e) => {
    const input = e.target.value;
    setDoctorName(input);

    if (input.trim() === "") {
      setFilteredDoctors([]);
    } else {
      const filtered = doctorList.filter((doctor) =>
        doctor.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredDoctors(filtered);
    }
  };

  const handleDoctorSelection = (doctor) => {
    setDoctorName(doctor);
    setFilteredDoctors([]);
  };

  // Data bace 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const errors = {};
  
    // Validation
    if (!patientName.trim()) {
      errors.patientName = "Patient name is required";
    } else if (patientName.trim().length < 8) {
      errors.patientName = "Patient name must be at least 8 characters";
    }
  
    if (!patientNumber.trim()) {
      errors.patientNumber = "Patient phone number is required";
    } else if (!/^\d{10}$/.test(patientNumber.trim())) {
      errors.patientNumber = "Please enter a valid 10-digit phone number";
    }
  
    if (patientGender === "default") {
      errors.patientGender = "Please select patient gender";
    }
  
    if (!appointmentTime) {
      errors.appointmentTime = "Appointment time is required";
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "Please select a future appointment time";
      }
    }
  
    if (!doctorName.trim()) {
      errors.doctorName = "Doctor name is required";
    }
  
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
  
    // ✅ Backend me data POST karo
    try {
      const response = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          patientName,
          patientNumber,
          patientGender,
          appointmentTime,
          doctorName,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        toast.success("Appointment Scheduled!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          onOpen: () => setIsSubmitted(true),
          onClose: () => setIsSubmitted(false),
        });
  
        // Reset form
        setPatientName("");
        setPatientNumber("");
        setPatientGender("default");
        setAppointmentTime("");
        setDoctorName("");
        setFilteredDoctors([]);
        setFormErrors({});
      } else {
        toast.error(data.message || "Server error. Try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };
  

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">Jaipur Doctor <span className="legal-siteSign">+</span></Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title"><span>Book Appointment Online</span></h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Patient Full Name:
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
            {formErrors.patientName && <p className="error-message">{formErrors.patientName}</p>}
          </label>

          <br />
          <label>
            Patient Phone Number:
            <input
              type="tel"
              value={patientNumber}
              onChange={(e) => setPatientNumber(e.target.value)}
              required
            />
            {formErrors.patientNumber && <p className="error-message">{formErrors.patientNumber}</p>}
          </label>

          <br />
          <label>
            Patient Gender:
            <select
              value={patientGender}
              onChange={(e) => setPatientGender(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="private">I will inform Doctor only</option>
            </select>
            {formErrors.patientGender && <p className="error-message">{formErrors.patientGender}</p>}
          </label>

          <br />
          <label>
            Preferred Appointment Time:
            <input
              type="datetime-local"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
            {formErrors.appointmentTime && <p className="error-message">{formErrors.appointmentTime}</p>}
          </label>

          <br />
          <label>
            Doctor Name:
            <input
              type="text"
              value={doctorName}
              onChange={handleDoctorInputChange}
              required
              placeholder="Type doctor name"
            />
            {formErrors.doctorName && <p className="error-message">{formErrors.doctorName}</p>}

            {filteredDoctors.length > 0 && (
              <ul className="suggestions-list">
                {filteredDoctors.map((doctor, index) => (
                  <li key={index} onClick={() => handleDoctorSelection(doctor)}>
                    {doctor}
                  </li>
                ))}
              </ul>
            )}
          </label>
          <br />
          <button type="submit" className="text-appointment-btn">
            Confirm Appointment
          </button>

          <p className="success-message" style={{ display: isSubmitted ? "block" : "none" }}>
            Appointment details have been sent to the patient's phone number via SMS.
          </p>
        </form>
      </div>

      <div className="legal-footer">
        <p>© 2023–2025 Top Doctors Jaipur. All rights reserved. Designed with care in Jaipur.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;




// {import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "../Styles/AppointmentForm.css";
// import { ToastContainer, toast } from "react-toastify";

// function AppointmentForm() {
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   const [patientName, setPatientName] = useState("");
//   const [patientNumber, setPatientNumber] = useState("");
//   const [patientGender, setPatientGender] = useState("default");
//   const [appointmentTime, setAppointmentTime] = useState("");
//   const [preferredMode, setPreferredMode] = useState("default");
//   const [doctorName, setDoctorName] = useState(""); // Define doctorName state
//   const [filteredDoctors, setFilteredDoctors] = useState([]); // Define filteredDoctors state
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const doctorList = [
//     "Dr. Mukesh Sharma",
//     "Dr. Pushkar Gupta",
//     "Dr. S R Shukla",
//     "Dr. J. P. Dhamija",
//     "Dr. Manisha Nijhawan",
//     "Dr. Sandeep Nijhawan",
//     "Dr. Mukesh Bhaskar",
//     "Dr. Ashok Gupta",
//     "Dr. Dinesh Khandelwal",
//     "Dr. Shiv Gautam",
//     "Dr. Hemant Bhartiya",
//     "Dr. Shankar Basandani",
//     "Dr. R. Tongia",
//     "Dr. Ajeet Bana",
//     "Dr. A K Sharma",
//     "Dr. Rajkumar Goyal",
//     "Dr. Vikas Mittal",
//     "Dr. Umakant Gupta",
//     "Dr. Anoop Jhurani",
//     "Dr. Rajeev Bhargava",
//     "Dr. Anita Bhandari"
//   ];
  

//   // Handle doctor's name input and filter suggestions
//   const handleDoctorInputChange = (e) => {
//     const input = e.target.value;
//     setDoctorName(input);

//     if (input.trim() === "") {
//       setFilteredDoctors([]); // Clear suggestions when input is empty
//     } else {
//       const filtered = doctorList.filter((doctor) =>
//         doctor.toLowerCase().includes(input.toLowerCase())
//       );
//       setFilteredDoctors(filtered);
//     }
//   };

//   // Handle doctor name selection from suggestions
//   const handleDoctorSelection = (doctor) => {
//     setDoctorName(doctor);
//     setFilteredDoctors([]); // Clear suggestions after selection
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const errors = {};
//     if (!patientName.trim()) {
//       errors.patientName = "Patient name is required";
//     } else if (patientName.trim().length < 8) {
//       errors.patientName = "Patient name must be at least 8 characters";
//     }

//     if (!patientNumber.trim()) {
//       errors.patientNumber = "Patient phone number is required";
//     } else if (patientNumber.trim().length !== 10) {
//       errors.patientNumber = "Patient phone number must be of 10 digits";
//     }

//     if (patientGender === "default") {
//       errors.patientGender = "Please select patient gender";
//     }
//     if (!appointmentTime) {
//       errors.appointmentTime = "Appointment time is required";
//     } else {
//       const selectedTime = new Date(appointmentTime).getTime();
//       const currentTime = new Date().getTime();
//       if (selectedTime <= currentTime) {
//         errors.appointmentTime = "Please select a future appointment time";
//       }
//     }

//     if (preferredMode === "default") {
//       errors.preferredMode = "Please select preferred mode";
//     }

//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       return;
//     }

//     // Reset form fields and errors after successful submission
//     setPatientName("");
//     setPatientNumber("");
//     setPatientGender("default");
//     setAppointmentTime("");
//     setPreferredMode("default");
//     setDoctorName(""); // Reset doctor name
//     setFilteredDoctors([]); // Clear suggestions
//     setFormErrors({});

//     toast.success("Appointment Scheduled!", {
//       position: toast.POSITION.TOP_CENTER,
//       onOpen: () => setIsSubmitted(true),
//       onClose: () => setIsSubmitted(false),
//     });
//   };

//   return (
//     <div className="appointment-form-section">
//       <h1 className="legal-siteTitle">
//         <Link to="/">
//           Jaipur Doctor <span className="legal-siteSign">+</span>
//         </Link>
//       </h1>

//       <div className="form-container">
//         <h2 className="form-title">
//           <span>Book Appointment Online</span>
//         </h2>

//         <form className="form-content" onSubmit={handleSubmit}>
//           <label>
//             Patient Full Name:
//             <input
//               type="text"
//               value={patientName}
//               onChange={(e) => setPatientName(e.target.value)}
//               required
//             />
//             {formErrors.patientName && <p className="error-message">{formErrors.patientName}</p>}
//           </label>

//           <br />
//           <label>
//             Patient Phone Number:
//             <input
//               type="tel"
//               value={patientNumber}
//               onChange={(e) => setPatientNumber(e.target.value)}
//               required
//             />
//             {formErrors.patientNumber && <p className="error-message">{formErrors.patientNumber}</p>}
//           </label>

//           <br />
//           <label>
//             Patient Gender:
//             <select
//               value={patientGender}
//               onChange={(e) => setPatientGender(e.target.value)}
//               required
//             >
//               <option value="default">Select</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="private">I will inform Doctor only</option>
//             </select>
//             {formErrors.patientGender && <p className="error-message">{formErrors.patientGender}</p>}
//           </label>

//           <br />
//           <label>
//             Preferred Appointment Time:
//             <input
//               type="datetime-local"
//               value={appointmentTime}
//               onChange={(e) => setAppointmentTime(e.target.value)}
//               required
//             />
//             {formErrors.appointmentTime && <p className="error-message">{formErrors.appointmentTime}</p>}
//           </label>

//           <br />
//           {/* Doctor Name (Autocomplete) */}
//           <label>
//             Doctor Name:
//             <input
//               type="text"
//               value={doctorName}
//               onChange={handleDoctorInputChange}
//               required
//               placeholder="Type doctor name"
//             />
//             {formErrors.doctorName && <p className="error-message">{formErrors.doctorName}</p>}

//             {/* Suggestions List */}
//             {filteredDoctors.length > 0 && (
//               <ul className="suggestions-list">
//                 {filteredDoctors.map((doctor, index) => (
//                   <li key={index} onClick={() => handleDoctorSelection(doctor)}>
//                     {doctor}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </label>
//           <br />
//           <button type="submit" className="text-appointment-btn">
//             Confirm Appointment
//           </button>

//           <p className="success-message" style={{ display: isSubmitted ? "block" : "none" }}>
//             Appointment details have been sent to the patient's phone number via SMS.
//           </p>
//         </form>
//       </div>

//       <div className="legal-footer">
//         <p>© 2023–2025 Top Doctors Jaipur. All rights reserved. Designed with care in Jaipur.</p>
//       </div>

//       <ToastContainer autoClose={5000} limit={1} closeButton={false} />
//     </div>
//   );
// }

// export default AppointmentForm;



  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const errors = {};

  //   // Validate Patient Name
  //   if (!patientName.trim()) {
  //     errors.patientName = "Patient name is required";
  //   } else if (patientName.trim().length < 8) {
  //     errors.patientName = "Patient name must be at least 8 characters";
  //   }

  //   // Validate Patient Number
  //   if (!patientNumber.trim()) {
  //     errors.patientNumber = "Patient phone number is required";
  //   } else if (!/^\d{10}$/.test(patientNumber.trim())) {
  //     errors.patientNumber = "Please enter a valid 10-digit phone number";
  //   }

  //   // Validate Patient Gender
  //   if (patientGender === "default") {
  //     errors.patientGender = "Please select patient gender";
  //   }

  //   // Validate Appointment Time
  //   if (!appointmentTime) {
  //     errors.appointmentTime = "Appointment time is required";
  //   } else {
  //     const selectedTime = new Date(appointmentTime).getTime();
  //     const currentTime = new Date().getTime();
  //     if (selectedTime <= currentTime) {
  //       errors.appointmentTime = "Please select a future appointment time";
  //     }
  //   }

  //   // Validate Doctor Name
  //   if (!doctorName.trim()) {
  //     errors.doctorName = "Doctor name is required";
  //   }
  //   // Agar koi error hai
  //   if (Object.keys(errors).length > 0) {
  //     setFormErrors(errors);
  //     return;
  //   }

  //   // Successful submission
  //   setPatientName("");
  //   setPatientNumber("");
  //   setPatientGender("default");
  //   setAppointmentTime("");
  //   setDoctorName("");
  //   setFilteredDoctors([]);
  //   setFormErrors({});

  //   // Show toast
  //   toast.success("Appointment Scheduled!", {
  //     position: toast.POSITION.TOP_CENTER,
  //     autoClose: 3000,
  //     onOpen: () => setIsSubmitted(true),
  //     onClose: () => setIsSubmitted(false),
  //   });
  // };
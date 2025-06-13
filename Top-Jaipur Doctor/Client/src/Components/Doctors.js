import React, { useState } from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import profile5 from "../Assets/profile-5.png";
import profile6 from "../Assets/profile-6.png";
import profile7 from "../Assets/profile-7.png";
import profile8 from "../Assets/profile-8.png";
import profile9 from "../Assets/profile-9.png";
import profile10 from "../Assets/profile-10.png";
import "../Styles/Doctors.css";

const doctorsData = [
  {
    img: profile1,
    name: "Dr. Mukesh Sharma",
    title: "Cornea, Oculoplasty, Neuro-Ophthalmology, Pediatric Ophthalmology",
    stars: "4.4",
    reviews: "61",
    bio: "Senior Ophthalmologist with 24+ years of experience, expert in cornea and pediatric eye care at Centre for Sight, Jaipur.",
    address: "Dr. Mukesh Sharma (BHMS, M.D.), 105/95, Ahimsa marg, Gali, 5, Vijay Path, near fi growth bank, Sector 101, Sector 12, Mansarovar, Jaipur, Rajasthan 302020",
    timing: "Mon-Sat 9–11:30 am, 6–8:30 pm & Sun 9 am–12 pm",
    phone: "+91 94140 72878",
    website: "https://www.centreforsight.net/doctor/dr-mukesh-sharma",
    education: "MBBS (SMS Medical College, 1994), MD & DNB (AIIMS Delhi)",
    experience: "30+ Years of Experience"
  },
  {
    img: profile2,
    name: "Dr. Pushkar Gupta",
    title: "Epilepsy, Stroke, Neuromuscular Disorders",
    stars: "4.3",
    reviews: "110",
    bio: "Dr. Pushkar Gupta holds more than 28 years of experience, has done his super specialization in Neurology from SGPGIMS, Lucknow. He was earlier additional Director Neurology department at Fortis Escort hospitals. Dr. Gupta is a senior neurologist with special expertise in handling complex cases of stroke, epilepsy, headache, tropical neurological disease, CNS infection and neuro muscular disorders. He has special interest and expertise in preventive and rehabilitative neurology.",
    address: "A13, Tonk Rd, Jai Jawan Colony, Durgapura, Jaipur, Rajasthan 302018",
    timing: "Mon-Sat 7–9 am, 5–7 pm",
    phone: "+91 9828020015 , 8062136530",
    website: "https://ckbirlahospitals.com/rbh/doctor/dr-pushkar-gupta",
    education: "M.D. (Gen. Medicine) D.M. (Neuro) D.N.B (Neuro)",
    experience: "28+ Years Neurologists & Neurosurgeons "
  },
  {
    img: profile3,
    name: "Dr. S R Shukla",
    title: "Dermatologist",
    stars: "4.4",
    reviews: "91",
    bio: "Dr S R Shukla is a renowned Dermatologist having a rich experience of more than 41 years. He is MD from All India Institute of Medical Sciences, New Delhi. He has the honor of serving as Consultant Dermatologist to the former President of India. Before joining Fortis Escorts Hosp....",
    address: "003, Jawahar Lal Nehru Marg, Sector 5, Malviya Nagar, Jaipur, Rajasthan, Landmark: Near Jawahar Circle Sector 5, Jaipur",
    timing: "Mon-Sat 10:00 AM - 01:00 PM",
    phone: "+91 9876543212",
    website: "https://www.fortishealthcare.com/doctors/dr-s-r-shukla-711?utm_source=google-gmb&utm_medium=gmb-seo-url&utm_campaign=FHL-gmb",
    education: "MD (Dermatology & Venerology) (AIIMS)",
    experience: "48 Years Experience Overall  (46 years as specialist)"
  },
  {
    img: profile4,
    name: "Dr. J. P. Dhamija ",
    title: "Cardiologist ",
    stars: "4.8",
    reviews: "",
    bio: "With 40+ years of experience, Dr. JP Dhamija is one of the most notable Interventional Cardiologists in India. He specializes in the treatment of heart attacks, heart failure, heart valve disease, arrhythmia, and high blood pressure. Dr. JP Dhamija has several publications, journals and articles to his name. He has completed MBBS (1975) and MD (1979) from the prestigious colleges of India. Dr. JP Dhamija is well-versed in Hindi and English.",
    address: "Jaipur Med. Directorate/ B-207, Shiv Gyan Enclave Gautam Marg, Nirman Ngr, Jaipur, Jaipur City-302003",
    timing: "Mon-Sat 10:00AM - 6:00PM",
    phone: "+91 9414223671",
    website: "https://healthcarehospital.com",
    education: "Associate Professor (MBBS , MD)",
    experience: "43 years of overall experience."
  },
  {
    img: profile5,
    name: "Dr. Manisha Nijhawan",
    title: "Dermatology",
    stars: "4.1",
    reviews: "90",
    bio: "Dr. Manisha Nijhawan is one of the leading dermatologists in Jaipur, Rajasthan.She is a dedicated dermatologist and works with evidence-based treatments of skin, hair, nails , leprosy and STD’s..",
    address: "29, 4th Ave, Shree Vihar, Chandrakala Colony, Durgapura, Jaipur, Rajasthan 302018",
    timing: "Mon-Sat  4 PM – 7PM",
    phone: "+91 7340597522",
    website: "https://www.drnijhawansclinic.com/",
    education: "MBBS and MD (Venerology and Leprosy) from SMS Medical College, Jaipur, in the year 1985 and 1990",
    experience: "Highly adept in treating all dermatological conditions with experience of over 29 years."
  },
  {
    img: profile6,
    name: "Dr. Sandeep Nijhawan",
    title: "Gastroenterologist",
    stars: "4.1",
    reviews: "834",
    bio: "Dr Sandeep Nijhawan is the senior most Gastroenterologist in India having a rich teaching experience of 35 years. He is an aluminous of AIIMS, New Delhi. He has devoted his life to establish a state of art Gastroenterology centre at SMS Medical College, which is a centre of repute worldwide. He retired recently as Professor & Head from SMS Medical College after an illustrious tenure spanning 35 years.",
    address: "29, 4th Ave, Shree Vihar, Chandrakala Colony, Durgapura, Jaipur, Rajasthan 302018",
    timing: "Mon-Sat  3 PM – 8 PM",
    phone: "+91 7340597522 , 93510 93880",
    website: "https://www.drnijhawansclinic.com/",
    education: "D.M. (Gastroenterology. 1989) All India Institute Medical Science, New Delhi   MD. (General Medicine, 1987), S. M.S. Medical College, Jaipur  MBBS. (1983), SMS Medical College, Jaipur",
    experience: "Highly adept in treating all dermatological conditions with experience of over 29 years."
  },
  {
    img: profile7,
    name: "Dr. Mukesh Bhaskar",
    title: "Neurosurgeon",
    stars: "4.8",
    reviews: "630",
    bio: "​Dr. Mukesh Bhaskar is a distinguished neurosurgeon based in Jaipur, India. He holds an MBBS, MS in General Surgery, and M.Ch. in Neurosurgery, and serves as an Assistant Professor of Neurosurgery at SMS Medical College & Hospital. Dr. Bhaskar is the founder of Bhaskar Brain & Spine Clinic, where he specializes in treating complex neurological and spinal conditions",
    address: "Gate No. 1, Akshat Retreat, Room No. 405 (4th Floor, opp. S.M.S. Hospital, Jaipur, Rajasthan 302001",
    timing: "Mon-Sat 3:00pm to 6:00pm",
    phone: "+91 63773 05556",
    website: "http://bhaskarbrainandspineclinic.com/",
    education: " MCh (Neurosurgery), King George’s Medical University, Lucknow India MS (General Surgery), RNT Medical College Udaipur, Rajasthan M.B.B.S, SMS Medical College Jaipur, Rajasthan",
    experience: "Highly adept in treating all dermatological conditions with experience of over 29 years."
  },

  {
    img: profile8,
    name: "Dr. Ashok Gupta",
    title: "Pediatrician",
    stars: "3.8",
    reviews: "350",
    bio: "Dr. Ashok Gupta was a renowned pediatrician from Jaipur and Head of Pediatrics at MGMCH. He led global efforts on rare diseases and chaired the task force of the International Pediatric Association. He received multiple international fellowships and held key roles in national health policy committees.",
    address: "25, Chetak Marg, near j k lon hospital, Gangawal Park, Adarsh Nagar, Jaipur, Rajasthan 302004",
    timing: "Mon-Sat 1–3 pm, 5–8 pm",
    phone: "+91 0141 260 6060",
    website: "N/A",
    education: "MBBS /MD",
    experience: "Highly adept in treating all dermatological conditions with experience of over 29 years."
  },
  {
    img: profile9,
    name: "Dr. Dinesh Khandelwal",
    title: "NeurologistDM (Neurology)",
    stars: "3.8",
    reviews: "350",
    bio: " Dr. Dinesh Khandelwal is an Neurologist in Jaipur. He is a renowned and highly trusted personality in the medical fraternity. Dr. Dinesh Khandelwal owns rich experience in Neurology. Dr. Dinesh Khandelwal offers some advanced medical treatments for Vesicoureteral Reflux, Absence Seizures, Acute and Chronic Inflammatory Demyelinating Polyneuropathy in HIV, Acute Disseminated Encephalomyelitis, Acute Inflammatory Demyelinating Polyradiculoneuropathy etc. Looking at his ever-increasing popularity, one thing is for sure that he is one of the best trusted  doctors in Jaipur.He has numerous successful treatment cases registered in his name and patients are very happy with the kind of hospitality displayed him.",
    address: "G2, 48, Gangawal Park, Adarsh Nagar, Jaipur, Rajasthan 302004",
    timing: "Mon-Sat 3–8 pm",
    phone: "+91 94133 41485",
    website: "N/A",
    education: "MBBS /MD",
    experience: "30 Years in Healthcare."
  },
  {
    img: profile10,
    name: "Dr. Shiv Gautam",
    title: "MD (Psychiatrist)",
    stars: "2.8",
    reviews: "239",
    bio: " Dr. Shiv Gautam is Top Psychiatrist in Civil Lines, Jaipur. Dr. Shiv Gautam practices at Gautam Hospital & Research Center, Civil Lines, 1, Jacob Road, Jaipur . Dr. Shiv Gautam is MBBS, D.P.M . You can Book Online Appointment, Consult with Dr. Shiv Gautam on www.365doctor.in. Find Contact no/phone number, Ask Question, Find & write Dr. Shiv Gautam Reviews, Qualification, Dr. Shiv Gautam fees on www.365doctor.in.",
    address: "1, Jacob Rd, near Water Tank, Madrampur, Civil Lines, Jaipur, Rajasthan 302006",
    timing: "Mon-Sat7:30 am–8 pm",
    phone: "+91  0141 222 2111",
    website: "N/A",
    education: "MBBS, D.P.M",
    experience: "30 Years in Healthcare."
  },
];

function Doctors() {
  const [showMore, setShowMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const filteredDoctors = doctorsData.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const visibleDoctors = showMore ? filteredDoctors : filteredDoctors.slice(0, 4);

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleCloseModal = () => {
    setSelectedDoctor(null);
  };

  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Doctors</span>
        </h3>

        <p className="dt-description">
        Meet our expert team of doctors at topdoctorsjaipur, dedicated to providing top-tier healthcare services with care, compassion, and precision. Find the best healthcare professionals in Jaipur, right here
        </p>

        {/* Search Box */}
        <input
          type="text"
          placeholder="Search Doctor..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="dt-search-input"
        />
      </div>

      <div className="dt-cards-content">
        {visibleDoctors.map((doctor, index) => (
          <DoctorCard
            key={index}
            img={doctor.img}
            name={doctor.name}
            title={doctor.title}
            stars={doctor.stars}
            reviews={doctor.reviews}
            onClick={() => handleDoctorClick(doctor)}
          />
        ))}
      </div>

      {/* More Button */}
      {!showMore && filteredDoctors.length > 4 && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button className="dt-more-button" onClick={() => setShowMore(true)}>
            Show More
          </button>
        </div>
      )}

      {/* Doctor Modal */}
      {selectedDoctor && (
        <div className="doctor-modal">
          <div className="doctor-modal-content">
            <span className="doctor-modal-close" onClick={handleCloseModal}>
              &times;
            </span>
            <img src={selectedDoctor.img} alt={selectedDoctor.name} className="doctor-modal-img" />
            <h2>{selectedDoctor.name}</h2>
            <p><strong>Speciality:</strong> {selectedDoctor.title}</p>
            <p><strong>Rating:</strong> {selectedDoctor.stars} ⭐</p>
            <p><strong>Reviews:</strong> {selectedDoctor.reviews}+ Reviews</p>
            <p><strong>Address:</strong> {selectedDoctor.address}</p>
            <p><strong>Available Timing:</strong> {selectedDoctor.timing}</p>
            <p><strong>Phone:</strong> <a href={`tel:${selectedDoctor.phone}`}>{selectedDoctor.phone}</a></p>
            <p><strong>Website:</strong> <a href={selectedDoctor.website} target="_blank" rel="noopener noreferrer">{selectedDoctor.website}</a></p>
            <p><strong>Education:</strong> {selectedDoctor.education}</p>
            <p><strong>Experience:</strong> {selectedDoctor.experience}</p>
            <p><strong>Bio:</strong> {selectedDoctor.bio}</p>
          </div>
        </div>
      )}

    </div>
  );
}

export default Doctors;

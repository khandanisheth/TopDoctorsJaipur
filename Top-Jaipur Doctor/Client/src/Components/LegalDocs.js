import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Top Doctors <span className="legal-siteSign">Jaipur</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
          Welcome to Top Doctors Jaipur, your trusted platform for finding and
          booking consultations with top doctors in Jaipur. Our goal is to
          provide seamless access to healthcare professionals, allowing you to
          view their bios, contact details, and availability, and book
          appointments online.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
          We prioritize your privacy. Our Privacy Policy outlines how we
          collect, use, and protect your personal and medical information. We
          ensure that all your data, including medical records, is securely
          stored and treated with the highest level of confidentiality.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
          By using Top Doctors Jaipur, you agree to our Terms of Service.
          This includes guidelines for searching doctors, viewing their details,
          booking appointments, and interacting with healthcare professionals.
          Please ensure you understand these terms to maintain a smooth user
          experience on our platform.
        </p>

        <p className="legal-title">Consultations</p>
        <p className="legal-description">
          Our platform allows you to book appointments and consult with expert
          doctors in Jaipur. These consultations are conducted online and are
          intended to provide medical advice, prescriptions, and follow-up care.
          Please note that in case of medical emergencies, you should visit a
          local medical facility.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
          Top Doctors Jaipur makes it easy to find the right doctor for your
          healthcare needs. You can search for doctors by specialty, view their
          availability, and book an appointment directly from our platform. 
          All consultations are conducted online for your convenience.
          Emergency situations should be handled immediately at local medical
          centers.
        </p>
      </div>

      <div className="legal-footer">
      <p>© 2023–2025 Top Doctors Jaipur. All rights reserved. Designed with care in Jaipur.</p>
      </div>
    </div>
  );
}

export default LegalDocs;

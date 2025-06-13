import React, { useState } from "react";
import InformationCard from "./InformationCard";
import {
  faHeartPulse,
  faTruckMedical,
  faTooth,
  faBrain,
  faPersonWalking ,
  faSpa
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCardsCount = 3;

  const cards = [
    {
      title: "Emergency Care",
      description:
        "Our Emergency Care service is designed to be your reliable support in critical situations. Whether it's a sudden illness, injury, or any medical concern that requires immediate attention, our team of dedicated healthcare professionals is available 24/7 to provide prompt and efficient care.",
      icon: faTruckMedical,
    },
    {
      title: "Heart Disease",
      description:
        "Our team of experienced cardiologists and medical experts use state-of-the-art technology to assess your cardiovascular health and design personalized treatment plans. From comprehensive screenings to advanced interventions, we are committed to helping you maintain a healthy heart and lead a fulfilling life.",
      icon: faHeartPulse,
    },
    {
      title: "Dental Care",
      description:
        "Smile with confidence as our Dental Care services cater to all your oral health needs. Our skilled dentists provide a wide range of treatments, from routine check-ups and cleanings to cosmetic procedures and restorative treatments.",
      icon: faTooth,
    },
    {
      title: "Physical Therapy",
      description:
        "Our Physical Therapy services help you recover from injuries, surgeries, and chronic pain through personalized rehabilitation plans. Our therapists guide you through exercises and techniques to restore mobility and improve strength.",
      icon: faPersonWalking,
    },
    {
      title: "Skin Care",
      description:
        "We offer advanced skin care treatments including acne care, anti-aging treatments, and more. Our specialists will guide you in choosing the best options to achieve healthy and radiant skin.",
      icon: faSpa,
    },
    {
      title: "Neurology",
      description:
        "Our Neurology services provide expert consultations and treatments for brain, spine, and nervous system disorders. Get the care you need for neurological health.",
      icon: faBrain,
    },
    
  ];

  const totalCards = cards.length;

  const maxIndex = totalCards - visibleCardsCount;

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (maxIndex + 1));
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + (maxIndex + 1)) % (maxIndex + 1)
    );
  };

  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p>
      </div>

      {/* Carousel container */}
      <div className="info-cards-carousel">
        <div
          className="info-cards-content"
          style={{
            transform: `translateX(-${currentIndex * (115 / visibleCardsCount)}%)`,
          }}
        >
          {cards.map((card, index) => (
            <InformationCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="carousel-controls">
        <button onClick={prevCard} className="carousel-btn">
          ←
        </button>
        <button onClick={nextCard} className="carousel-btn">
          →
        </button>
      </div>
    </div>
  );
}

export default Info;

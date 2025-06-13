// React aur useState hook ko import kar rahe hain
import React, { useState } from "react";
// initial customer reviews ko import kar rahe hain (ek static data file se)
import { customerReviews as initialReviews } from "../Scripts/reviews";
// CSS styling import
import "../Styles/Reviews.css";
// Review form component import (naye reviews add karne ke liye)
import ReviewForm from "./ReviewForm";

function Reviews() {
  // reviews state, jisme saare reviews honge (initial value imported data se)
  const [reviews, setReviews] = useState(initialReviews);
  // current review ka index store karne ke liye state
  const [reviewIndex, setReviewIndex] = useState(0);
  // current review object ko access karna (based on index)
  const currentReview = reviews[reviewIndex];
  // Left arrow button ke liye function: previous review dikhata hai
  const backBtnClick = () => {
    setReviewIndex(reviewIndex <= 0 ? reviews.length - 1 : reviewIndex - 1);
    // agar index 0 se chhota ya barabar hai to last review par le jao, warna previous par
  };
  // Right arrow button ke liye function: next review dikhata hai
  const frontBtnClick = () => {
    setReviewIndex(reviewIndex >= reviews.length - 1 ? 0 : reviewIndex + 1);
    // agar last index tak pahuch gaye to first par jao, warna next par
  };
  // Jab koi naya review add ho to usko handle karne wala function
  const handleAddReview = (newReview) => {
    setReviews((prevReviews) => {
      const updatedReviews = [...prevReviews, newReview]; // naye review ko add karo
      setReviewIndex(updatedReviews.length - 1); // naya review last index par hota hai
      return updatedReviews;
    });
  };

  // Component ka return part (HTML/JSX structure)
  return (
    <div className="review-section" id="reviews">
      {/* Text content */}
      <div className="rw-text-content">
        <p className="rw-text-title">
          More over <span className="rw-text-num">{reviews.length}+ Customers</span>
        </p>

        <p className="rw-text-desc">Don't believe us, Check clients word</p>

        {/* Current review message ke liye quotation mark ke sath */}
        <p className="rw-text-format">
          <span className="rw-text-quote1">''</span>
          <span className="rw-review">{currentReview.message}</span>
          <span className="rw-text-quote2">''</span>
        </p>

        {/* Reviewer ka naam aur location */}
        <div className="rw-authors">
          <div className="rw-names">
            <p className="rw-reviewer-name">{currentReview.name}</p>
            <p className="rw-reviewer-place">{currentReview.location}</p>
          </div>

          {/* Navigation buttons (left and right arrows) */}
          <div className="rw-btns">
            <button className="rw-next-btn" type="button" onClick={backBtnClick}>←</button>
            <button className="rw-next-btn" type="button" onClick={frontBtnClick}>→</button>
          </div>
        </div>
      </div>

      {/* Naya review submit karne ke liye form */}
      <ReviewForm onAddReview={handleAddReview} />
    </div>
  );
}

// Component ko export kar rahe hain taki dusre files me use ho sake
export default Reviews;





// import React, { useState } from "react";
// import { customerReviews as initialReviews } from "../Scripts/reviews";
// import "../Styles/Reviews.css";
// import ReviewForm from "./ReviewForm";

// function Reviews() {
//   const [reviews, setReviews] = useState(initialReviews);
//   const [reviewIndex, setReviewIndex] = useState(0);

//   const currentReview = reviews[reviewIndex];

//   const backBtnClick = () => {
//     setReviewIndex(reviewIndex <= 0 ? reviews.length - 1 : reviewIndex - 1);
//   };

//   const frontBtnClick = () => {
//     setReviewIndex(reviewIndex >= reviews.length - 1 ? 0 : reviewIndex + 1);
//   };

//   const handleAddReview = (newReview) => {
//     setReviews((prevReviews) => {
//       const updatedReviews = [...prevReviews, newReview];
//       setReviewIndex(updatedReviews.length - 1); // last review ka index set karo
//       return updatedReviews;
//     });
//   };
  

//   return (
//     <div className="review-section" id="reviews">
//       <div className="rw-text-content">
//         <p className="rw-text-title">
//           More over <span className="rw-text-num">{reviews.length}+ Customers</span>
//         </p>

//         <p className="rw-text-desc">Don't believe us, Check clients word</p>

//         <p className="rw-text-format">
//           <span className="rw-text-quote1">''</span>
//           <span className="rw-review">{currentReview.message}</span>
//           <span className="rw-text-quote2">''</span>
//         </p>

//         <div className="rw-authors">
//           <div className="rw-names">
//             <p className="rw-reviewer-name">{currentReview.name}</p>
//             <p className="rw-reviewer-place">{currentReview.location}</p>
//           </div>

//           <div className="rw-btns">
//             <button className="rw-next-btn" type="button" onClick={backBtnClick}>←</button>
//             <button className="rw-next-btn" type="button" onClick={frontBtnClick}>→</button>
//           </div>
//         </div>
//       </div>

//       {/* Review Form */}
//       <ReviewForm onAddReview={handleAddReview} />
//     </div>
//   );
// }

// export default Reviews;

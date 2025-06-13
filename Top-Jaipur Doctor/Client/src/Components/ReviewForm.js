import React, { useState } from "react";
import "../Styles/ReviewForm.css"; 
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
function ReviewForm({ onAddReview }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Initialize the state for button

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trim the values to remove any extra spaces
    const trimmedName = name.trim();
    const trimmedLocation = location.trim();
    const trimmedMessage = message.trim();

    // Check if all fields are filled
    if (trimmedName && trimmedLocation && trimmedMessage) {
      const newReview = { name: trimmedName, location: trimmedLocation, message: trimmedMessage };

      // Send data to backend
      try {
        const response = await fetch("http://localhost:5000/api/reviews", {
          method: "POST", // POST method for sending data
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newReview), // Data to send
        });

        const data = await response.json();

        if (response.ok) {
          toast.success("Review Submitted Successfully!", {
            position: toast.POSITION.TOP_CENTER,
          });

          // Pass the review to parent component (if needed locally)
          onAddReview(newReview);

          // Reset form fields
          setName("");
          setLocation("");
          setMessage("");
        } else {
          toast.error("Something went wrong, please try again.");
        }
      } catch (error) {
        console.error("Error submitting review:", error);
        toast.error("Error submitting review. Please try again.");
      }
    } else {
      toast.error("Please fill all fields."); // Show error if any field is empty
    }
  };

  const handleChatBtnClick = () => {
    // This should only run if button is not disabled, and after review submission
    if (!isButtonDisabled) {
      toast.info("Thanks for your feedback!", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h3>Submit Your Review</h3>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Your Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <textarea
        placeholder="Your Review"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
     <button type="submit" disabled={isButtonDisabled}>
  Submit Review
</button>
    </form>
  );
}

export default ReviewForm;






// import React, { useState } from "react";
// import "../Styles/ReviewForm.css"; // optional if styling needed
// import { toast } from "react-toastify"; // Importing toast for notifications
// import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast notifications

// function ReviewForm({ onAddReview }) {
//   const [name, setName] = useState("");
//   const [location, setLocation] = useState("");
//   const [message, setMessage] = useState("");
//   const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Initialize the state for button

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   if (name && location && message) {
//   //     onAddReview({ name, location, message });
//   //     setName("");
//   //     setLocation("");
//   //     setMessage("");
//   //   }



//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     // Trim the values to remove any extra spaces
//     const trimmedName = name.trim();
//     const trimmedLocation = location.trim();
//     const trimmedMessage = message.trim();
  
//     if (trimmedName && trimmedLocation && trimmedMessage) {
//       // If all fields are filled
//       const newReview = { name: trimmedName, location: trimmedLocation, message: trimmedMessage };
  
//       // Send this data to backend (via API)
//       try {
//         const response = await fetch("http://localhost:5000/api/reviews", {
//           method: "POST", // POST method for sending data
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(newReview), // Data to send
//         });
  
//         const data = await response.json();
  
//         if (response.ok) {
//           toast.success("Review Submitted Successfully!", {
//             position: toast.POSITION.TOP_CENTER,
//           });
  
//           // Pass the review to parent component (if needed locally)
//           onAddReview(newReview);
  
//           // Reset form fields
//           setName("");
//           setLocation("");
//           setMessage("");
//         } else {
//           toast.error("Something went wrong, please try again.");
//         }
//       } catch (error) {
//         console.error("Error submitting review:", error);
//         toast.error("Error submitting review. Please try again.");
//       }
//     } else {
//       toast.error("Please fill all fields.");
//     }
//   };
  

//   const handleChatBtnClick = () => {
//     if (!isButtonDisabled) {
//       toast.info("Thanks for your feedback!", {
//         position: toast.POSITION.TOP_CENTER,
//         onOpen: () => setIsButtonDisabled(true),
//         onClose: () => setIsButtonDisabled(false),
//       });
//     }
//   };

//   return (
//     <form className="review-form" onSubmit={handleSubmit}>
//       <h3>Submit Your Review</h3>
//       <input
//         type="text"
//         placeholder="Your Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />
//       <input
//         type="text"
//         placeholder="Your Location"
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//         required
//       />
//       <textarea
//         placeholder="Your Review"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         required
//       ></textarea>
//       <button type="submit" disabled={isButtonDisabled} onClick={handleChatBtnClick}>
//         Submit Review
//       </button>
//     </form>
//   );
// }

// export default ReviewForm;



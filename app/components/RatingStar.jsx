'use client'
import { useState } from 'react';


const RatingStar = ({ initialRating = 0 }) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          onClick={() => handleStarClick(index)}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 cursor-pointer ${
            index < rating ? 'text-yellow-500' : 'text-gray-300'
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7 "
          />
        </svg>
      ))}
     
    </div>
  );
};

export default RatingStar;

/**M5 13l4 4L19 7 
 * 0 0 24 24
*/

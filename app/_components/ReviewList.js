import React from 'react';
import Review from './Review';

function ReviewList({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return (
      <p className='text-primary-300'>
        No reviews yet. Be the first to leave one!
      </p>
    );
  }

  return (
    <ul className='space-y-4'>
      {reviews.map((review) => (
        <li key={review.id}>
          <Review review={review} />
        </li>
      ))}
    </ul>
  );
}

export default ReviewList;

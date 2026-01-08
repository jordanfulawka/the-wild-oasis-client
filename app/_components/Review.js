import React from 'react';

function Review({ review }) {
  return (
    <div className='border-b pb-4'>
      <p className='text-lg font-medium'>
        {review.guestName} - {review.rating}⭐
      </p>
      <p className='text-primary-300'>{review.comment}</p>
      <p className='text-sm text-primary-500'>
        {new Date(review.created_at).toLocaleDateString()}
      </p>
    </div>
  );
}

export default Review;

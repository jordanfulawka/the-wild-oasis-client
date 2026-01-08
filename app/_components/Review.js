import React from 'react';
import { getGuest } from '../_lib/data-service';

async function Review({ review }) {
  const guest = await getGuest(review.email);
  console.log(guest);
  return (
    <div className='border-b pb-4'>
      <p className='text-lg font-medium'>
        {guest.fullName} - {review.rating}⭐
      </p>
      <p className='text-primary-300'>{review.comment}</p>
      <p className='text-sm text-primary-500'>
        {new Date(review.created_at).toLocaleDateString()}
      </p>
    </div>
  );
}

export default Review;

'use client';

import { createReview } from '../_lib/actions';
import SubmitButton from './SubmitButton';

function ReviewForm({ cabinId }) {
  return (
    <form
      className='bg-primary-900 p-4 text-sm flex gap-4 flex-col rounded-md shadow-md'
      action={createReview}
    >
      <div className='flex items-center gap-2'>
        <label htmlFor='rating' className='text-primary-200'>
          Rating:
        </label>
        <input
          id='rating'
          name='rating'
          type='number'
          min='1'
          max='5'
          placeholder='1-5'
          className='px-2 py-1 bg-primary-200 text-primary-800 w-16 rounded-sm shadow-sm'
        />
      </div>

      <div className='flex items-center gap-2'>
        <label htmlFor='comment' className='text-primary-200'>
          Comment:
        </label>
        <input
          id='comment'
          name='comment'
          type='text'
          placeholder='Write a review...'
          className='px-2 py-1 bg-primary-200 text-primary-800 flex-1 rounded-sm shadow-sm'
        />
      </div>
      <input type='hidden' name='cabinId' value={cabinId} />

      <div className='flex justify-end'>
        <SubmitButton pendingLabel='Submitting...'>Submit Review</SubmitButton>
      </div>
    </form>
  );
}

export default ReviewForm;

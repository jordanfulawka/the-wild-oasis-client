import Link from 'next/link';

export default function Page() {
  return (
    <div className='text-center space-y-6 mt-4'>
      <h1 className='text-3xl font-semibold'>Thank you for your input!</h1>
      <Link href='/' className='underline text-xl text-accent-500 inline-block'>
        We really value your feedback.
      </Link>
    </div>
  );
}

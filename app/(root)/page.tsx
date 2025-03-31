import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'

const HomePage = () => {
  return (
    <>
      {/*Hero Section*/}
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Simulate AI-Powered Professional Interviews and Get Feedback</h2>
          <p className='text-lg'>
            Practice and be ready to land your dream job
          </p>

          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href='/interview'>Start an Interview</Link>
          </Button>
        </div>
        <Image
          src='/robot.png'
          alt='robot'
          width={400}
          height={400}
          className='max-md:hidden'
        />
      </section>

      {/*Your Interviews Section*/}
      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interviews</h2>
        <div className='interviews-section'>
          {dummyInterviews.map((interview) => (
            <InterviewCard
              {...interview}
              key={`yourInterview-${interview.id}`}
            />
          ))}
          {/*<p>You haven't taken any interviews yet</p>*/}
        </div>
      </section>

      <section className='flex flex-col gap-6 mt-11'>
        <h2>Take an Interview</h2>
        <div className='interviews-section'>
          {dummyInterviews.map((interview) => (
            <InterviewCard
              {...interview}
              key={`otherInterviews-${interview.id}`}
            />
          ))}
          {/*<p>There are no interviews available</p>*/}
        </div>
      </section>
    </>
  )
}
export default HomePage

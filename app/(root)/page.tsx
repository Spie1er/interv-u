import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import InterviewCard from '@/components/InterviewCard'
import { getCurrentUser } from '@/lib/actions/auth.action'
import {
  getInterviewByUserId,
  getLatestInterviews
} from '@/lib/actions/general.action'

const HomePage = async () => {
  const user = await getCurrentUser()

  //Parallel Requests
  const [userInterviews, latestInterviews] = await Promise.all([
    await getInterviewByUserId(user?.id!),
    await getLatestInterviews({ userId: user?.id! })
  ])

  const hasPastInterviews = !!userInterviews?.length
  const hasUpcomingInterviews = !!latestInterviews?.length

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
            <Link href='/interview'>Create an Interview</Link>
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
          {hasPastInterviews ?
            userInterviews.map((interview) => (
              <InterviewCard
                {...interview}
                key={`yourInterview-${interview.id}`}
              />
            ))
          : <p>You haven't taken any interviews yet</p>}
        </div>
      </section>

      <section className='flex flex-col gap-6 mt-11'>
        <h2>Take an Interview</h2>
        <div className='interviews-section'>
          {hasUpcomingInterviews ?
            latestInterviews.map((interview) => (
              <InterviewCard
                {...interview}
                key={`yourInterview-${interview.id}`}
              />
            ))
          : <p>There are no interviews available</p>}
        </div>
      </section>
    </>
  )
}
export default HomePage

import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-newsletter.jpg'
import { FormEvent } from 'react'
import addData from "@/firebase/firestore/addData";

// function ArrowRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
//   return (
//     <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
//       <path
//         d="m14 7 5 5-5 5M19 12H5"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   )
// }



export function RegisterVenue() {
 
  async function handleSubmit(e: FormEvent<HTMLFormElement>)  {
    e.preventDefault();
  
   const { venueName, location, capacity, contactEmail } = e.target.elements;
  
    // Post data to Firebase
    try {
      const data = {
        venueName: venueName.value,
        location: location.value,
        capacity: capacity.value,
        contactEmail: contactEmail.value
      };
  console.log(data);
      const { result, error } = await addData('venues', 'venue-id', data)

      if (error) {
        return console.log(error)
      }

      alert('Venue registered successfully!');
    } catch (error) {
      console.error('Error registering venue:', error);
      alert('Error registering venue. Please try again.');
    }
  }

  return (
    <section id="register-venue" aria-label="Register Venue">
      <Container>
        <div className="relative -mx-4 overflow-hidden bg-indigo-50 px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
          <Image
            className="absolute left-1/2 top-0 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]"
            src={backgroundImage}
            alt=""
            width={919}
            height={1351}
            unoptimized
          />
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
                Venue Registration
              </p>
              <p className="mt-4 text-lg tracking-tight text-blue-900">
                Register your venue for the Global DevOps Experience event.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <input
                  type="text"
                  name="venueName"
                  required
                  placeholder="Venue Name"
                  aria-label="Venue Name"
                  className="w-full rounded-3xl bg-white py-2.5 pl-6 pr-2.5 shadow-xl shadow-blue-900/5 focus:outline-none"
                />
                <input
                  type="text"
                  name="location"
                  required
                  placeholder="Location"
                  aria-label="Location"
                  className="w-full rounded-3xl bg-white py-2.5 pl-6 pr-2.5 shadow-xl shadow-blue-900/5 focus:outline-none"
                />
                <input
                  type="number"
                  required
                  name="capacity"
                  placeholder="Capacity"
                  aria-label="Capacity"
                  className="w-full rounded-3xl bg-white py-2.5 pl-6 pr-2.5 shadow-xl shadow-blue-900/5 focus:outline-none"
                />
                <input
                  type="email"
                  required
                  name="contactEmail"
                  placeholder="Contact Email"
                  aria-label="Contact Email"
                  className="w-full rounded-3xl bg-white py-2.5 pl-6 pr-2.5 shadow-xl shadow-blue-900/5 focus:outline-none"
                />
                <Button type="submit">
                  <span className="sr-only sm:not-sr-only">Register Venue</span>
                  <span className="sm:hidden">
                    {/* <ArrowRightIcon className="h-6 w-6" /> */}
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}

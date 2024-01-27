'use client';

import { RegisterVenue } from '@/components/RegisterVenue'
import { Hero } from '@/components/Hero'
import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export default function Register() {
  return (
    <>
      <Hero />
      <RegisterVenue />
      <div className="relative flex h-full items-center py-20 sm:py-36">
      <BackgroundImage className="-top-36 bottom-0" />
      <Container className="relative flex w-full flex-col items-center">
       
        <Button href="/" className="mt-8">
          Go back home
        </Button>
      </Container>
    </div>
    </>
  )
}

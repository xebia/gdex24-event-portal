---
layout: default
---

<div class="bg-gray-900">
    <main>
      <!-- Hero section -->
      <div class="relative isolate overflow-hidden">
        <svg class="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-800/20">
            <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
          </svg>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
        </svg>
        <div class="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]" aria-hidden="true">
          <div class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20" style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"></div>
        </div>
        <div class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-40 lg:flex lg:px-8 lg:pt-40">
          <div class="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">           
            <div class="mt-24 sm:mt-32 lg:mt-16">
              <a href="#" class="inline-flex space-x-6">
                <span class="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20">15 June, 2024</span>                
              </a>
            </div>
            <h1 class="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">Global DevOps Experience</h1>
            <p class="mt-6 text-lg leading-8 text-gray-300">Welcome to the <span class="font-bold tracking-tight text-white">Global DevOps Experience</span>,&nbsp;a unique, global event where the worlds of DevOps, Platform Engineering, and Developer Experience (DevEx) converge. </p>
             <p class="mt-6 text-lg leading-8 text-gray-300">This event is for everyone who likes to learn how we can make software development more productive in a DevOps way of work. This one-day event is designed for those intrigued by the potential of technology to transform traditional development practices into something far more dynamic by using GitHub, Azure, and AI.</p>
             <p class="mt-6 text-lg leading-8 text-gray-300">This is an Event out of the box. This means you can organize this event for your local community on the same day. We, the organizers, provide you with everything you need to run a high-value community event. We provide the presentations, the hands-on labs, the infrastructure, and a fun narrative for the day. How do you organize this event? Simple: You sign up as a venue, and you, the local organizer, arrange a physical venue where people can join for the event. We provide you with everything you need to sign up attendees, content for the event, and all the infrastructure you need to run this event. Please sign up and provide us with some basic details, and we will be in touch to help you set everything up.</p>
            <div class="mt-10 flex items-center gap-x-6">
              <a href="#more" class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">More information</a>
              <a href="{{ '/register' | relative_url }}" class="text-sm font-semibold leading-6 text-white">Register your venue <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none">
            <img class="h-120" width="33%" src="images/Logo-trans.png" alt="Global DevOps Experience">
            <!-- <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none" id="globeContainer">               
            </div> -->
          </div>
        </div> 
      </div>
      <!-- Logo cloud -->
      <div class="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
        <h2 class="text-center text-lg font-semibold leading-8 text-white">This event is sponsored by</h2>
        <div class="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <!-- Loop through the site.data.sponsors -->
          {% for sponsor in site.data.sponsors %}
          <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="{{ sponsor.logo }}" alt="{{ sponsor.name }}" width="158" height="48">
          {% endfor %}   
        </div>
      </div>
      <!-- Feature section -->
      <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-26 lg:px-8" id="more">
        <div class="mx-auto  text-center">
          <h2 class="text-base font-semibold leading-7 text-indigo-400">What is the Global DevOps Experience</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">The story</p>
          <p class="mt-6 text-lg leading-8 text-gray-300 text-justify">You were onboarded to a Company that has some mission-critical applications running to sell concert tickets online. You will join their platform Engineering team to help this company deliver new software. Faced with emerging challenges and the need for innovation, the Company embarks on a transformation journey.</p>
          <p class="mt-6 text-lg leading-8 text-gray-300 text-justify">Soon, they realize that they find themselves at a turning point..... In order to survive, they will need to go all in on DevOps and DevEX and embrace AI.</p>
        </div>
      </div>
      <!-- Stats -->
      <!-- <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-26 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <h2 class="text-base font-semibold leading-8 text-indigo-400">Our track record</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Trusted by thousands of developers&nbsp;worldwide</p>
          <p class="mt-6 text-lg leading-8 text-gray-300">Our past events include the Global DevOps Bootcamps in 2017, 2018, and 2019, where we delighted over 10.000 developers all across the globe in 35 countries and 90 different venues.</p>
        </div>
        <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
            <dt class="text-sm leading-6">Developers on the platform</dt>
            <dd class="order-first text-3xl font-semibold tracking-tight">10,000+</dd>
          </div>
          <div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
            <dt class="text-sm leading-6">Daily requests</dt>
            <dd class="order-first text-3xl font-semibold tracking-tight">900m+</dd>
          </div>
          <div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
            <dt class="text-sm leading-6">Uptime guarantee</dt>
            <dd class="order-first text-3xl font-semibold tracking-tight">99.9%</dd>
          </div>
        </dl>
      </div> -->
      <!-- CTA section -->
      <div class="relative isolate mt-4 px-6 py-32 sm:mt-16 sm:py-40 lg:px-8">
        <svg class="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="1d4240dd-898f-445f-932d-e2872fd12de3" width="200" height="200" x="50%" y="0" patternUnits="userSpaceOnUse">
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="0" class="overflow-visible fill-gray-800/20">
            <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
          </svg>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)" />
        </svg>
        <div class="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl" aria-hidden="true">
          <div class="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20" style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"></div>
        </div>
        <div class="mx-auto max-w-7xl text-center px-6 sm:mt-26 lg:px-8">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join the DevOps Experience<br>Host a venue!</h2>
          <p class="mx-auto mt-6  text-lg leading-8 text-justify text-gray-300">The "Global DevOps Experience" invites you to be part of this evolving story, where technology meets practicality and where every challenge is a stepping stone to innovation. Join us as and host a venue so you can be part of this experience and be at the forefront of your local community.</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="{{ '/register' | relative_url }}" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Register your venue</a>
            <a href="#more" class="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </main>
  
  
  </div>
  
  <!-- <script src="//unpkg.com/three"></script>
<!-- <script src="{{ '/assets/js/TrackballControls.js' | relative_url }}"></script> 
<script src="//unpkg.com/three-globe"></script>
<script src="{{ '/assets/js/globe.js' | relative_url }}"></script> -->
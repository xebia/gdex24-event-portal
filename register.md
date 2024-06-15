---
layout: default
permalink: /register/
published: false
---

<div class="relative isolate bg-gray-900">
  <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
    <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
      <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
        <div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
          <svg class="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
            <defs>
              <pattern id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse">
                <path d="M130 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="100%" y="-1" class="overflow-visible fill-gray-800/20">
              <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
            </svg>
            <rect width="100%" height="100%" stroke-width="0" fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" />
          </svg>
          <div class="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]" aria-hidden="true">
            <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20" style="clip-path: polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)"></div>
          </div>
        </div>
        <h2 class="text-3xl font-bold tracking-tight text-white">Register your venue</h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">Thanks for taking the time to register your venue. We are looking forward to work together to make this event a big success!</p>
        <p class="mt-6 text-lg leading-8 text-gray-300">In order to sign up, we need your GitHub handle, so we will authenticate you against the GitHub system. By doing so, you agree that we store your username and email address, in addition to the information you will provide us.</p>
      </div>
    </div>
    <div id="sign-in" class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
      <div class="mt-6 grid grid-cols-1 gap-4">
          <a href="#" id="sign-in-button" class="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent">
            <svg class="h-5 w-5 fill-[#24292F]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
            </svg>
            <span class="text-sm font-semibold leading-6">Sign in with GitHub</span>
          </a>
      </div>
    </div>
    <div id="form" style="display: none;">
      <form id="venue-registration-form" class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
        <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2" >
            <!-- Venue Name -->
            <div class="sm:col-span-2">
              <label for="venue-name" class="block text-sm font-semibold leading-6 text-white">Venue Name</label>
              <div class="mt-2.5">
                <input type="text" name="venue-name" required id="venue-name" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6">
              </div>
            </div>
            <!-- Venue Location -->
            <div class="sm:col-span-2">
              <label for="location" class="block text-sm font-semibold leading-6 text-white">Location</label>
              <div class="mt-2.5">
                <input type="text" name="location" id="location" required class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6">
              </div>
            </div>
            <!-- Maximum Number of Participants -->
            <div class="sm:col-span-2">
              <label for="max-participants" class="block text-sm font-semibold leading-6 text-white">Maximum Number of Participants</label>
              <div class="mt-2.5">
                <input type="number" name="max-participants" id="max-participants" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6">
              </div>
            </div>
             <!-- Primary Contact Name -->
            <div class="sm:col-span-2">
              <label for="primary-contact-name" class="block text-sm font-semibold leading-6 text-white">Primary Contact Name</label>
              <div class="mt-2.5">
                <input type="text" name="primary-contact-name"  id="primary-contact-name" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6">
              </div>
            </div>
            <!-- Primary Email -->
            <div>
              <label for="primary-email" class="block text-sm font-semibold leading-6 text-white">Primary Email</label>
              <div class="mt-2.5">
                <input type="email" name="primary-email" id="primary-email" required class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6">
              </div>
            </div>
            <!-- Primary Phone -->
            <div>
              <label for="primary-phone" class="block text-sm font-semibold leading-6 text-white">Primary Phone</label>
              <div class="mt-2.5">
                <input type="tel" name="primary-phone" id="primary-phone" required class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6">
              </div>
            </div>
            <!-- Secondary Contact Name -->
            <div class="sm:col-span-2">
              <label for="secondary-contact-name" class="block text-sm font-semibold leading-6 text-white">Secondary Contact Name</label>
              <div class="mt-2.5">
                <input type="text" name="secondary-contact-name"  id="secondary-contact-name" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6">
              </div>
            </div>
            <!-- Secondary Email -->
            <div>
              <label for="secondary-email" class="block text-sm font-semibold leading-6 text-white">Secondary Email</label>
              <div class="mt-2.5">
                <input type="email" name="secondary-email" id="secondary-email" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6">
              </div>
            </div>
            <!-- Secondary Phone -->
            <div>
              <label for="secondary-phone" class="block text-sm font-semibold leading-6 text-white">Secondary Phone</label>
              <div class="mt-2.5">
                <input type="tel" name="secondary-phone" id="secondary-phone" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6">
              </div>
            </div>
          </div>
          <div class="mt-8 flex justify-end">
            <button type="submit" class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Register Venue</button>
          </div>
        </div>
      </form>
    </div>
    <div id="venue-registration-success" style="display: none;">
      <div class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
        <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div class="" >
            <div class="mt-4 text-center">
              <h3 class="text-3xl font-bold ">Venue Registration Successful!</h3>
              <div class="mt-4">
                <p class="mt-6 text-lg leading-8 text-gray-300">Thank you for registering your venue. We will be in touch with you shortly by inviting you to our GitHub repo, so check your notifications. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";
  import { getAuth, signInWithPopup, GithubAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
  import { firebaseConfig } from '/firebaseConfig.js';

  // Initialize Firebase and Firestore
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  // GitHub Auth Provider
  const provider = new GithubAuthProvider();

  let userName  = null;

  // Sign in with GitHub
  document.getElementById('sign-in-button').addEventListener('click', () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // User signed in
        console.log('User signed in:', result);
        userName = result.user.reloadUserInfo.screenName;

          // Hide the sign-in button
        document.getElementById('sign-in').style.display = 'none';

        // Set the email from the user to the primary email field
        document.getElementById('primary-email').value = result.user.email;
        document.getElementById('primary-contact-name').value = result.user.displayName

        // Show the venue registration form
        document.getElementById('form').style.display = 'block';
 
      })
      .catch((error) => {
        console.error('Authentication error:', error);
      });
  });

  // Form submission handler
  document.getElementById('venue-registration-form').addEventListener('submit', async function(e) {
       e.preventDefault();

      if (!auth.currentUser) {
        console.error('User not authenticated');
        return;
      }

      // Get form values
      var venueName = document.getElementById('venue-name').value;
      var location = document.getElementById('location').value;
      var maxParticipants = document.getElementById('max-participants').value;
      var primaryContactName = document.getElementById('primary-contact-name').value;
      var primaryEmail = document.getElementById('primary-email').value;
      var primaryPhone = document.getElementById('primary-phone').value;
      var secondaryContactName = document.getElementById('secondary-contact-name').value;
      var secondaryEmail = document.getElementById('secondary-email').value;
      var secondaryPhone = document.getElementById('secondary-phone').value;

      try {
        // Add a new document to the Firestore collection
        await addDoc(collection(db, 'venues'), {
          venueName: venueName,
          location: location,
          maxParticipants: maxParticipants,
          primaryUsername: userName,
          primaryContactName: primaryContactName,
          primaryEmail: primaryEmail,
          primaryPhone: primaryPhone,
          secondaryContactName: secondaryContactName,
          secondaryEmail: secondaryEmail,
          secondaryPhone: secondaryPhone,
          registeredAt: new Date().toISOString()
        });
        console.log('Venue registered successfully!');
          // Hide the venue registration form
        document.getElementById('form').style.display = 'none';
          // Show the venue confirmation message
        document.getElementById('venue-registration-success').style.display = 'block';
        // Handle successful submission
      } catch (error) {
        console.error('Error registering venue:', error);
        // Handle errors
      }
  });
</script>


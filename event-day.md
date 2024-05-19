---
layout: default
---

<div class="bg-gray-900">
  <div class="relative isolate overflow-hidden pt-14">
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>
    <div class="mx-auto max-w-2xl py-12 sm:py-12 lg:py-18">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <img src="images/Logo-trans Small.png" alt="GDEX">  
      </div>
      <div class="text-center" id="login-section">
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Welcome to the Global&nbsp;DevOps&nbsp;Experience</h1>
        <p class="mt-6 text-lg leading-8 text-gray-300">Time to get started with the event! You will need to log in using your GitHub account which you used to register yourself. When logged in, you can select a team to join.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400" id="login-button">Join the event!</a>
          <!-- <a href="#" class="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a> -->
        </div>
      </div>
      <div class="hidden" id="event-section">
      </div>
    </div>
    <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
      <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>
  </div>
</div>
<!-- Logo cloud -->
<div class="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
  <h2 class="text-center text-lg font-semibold leading-8 text-white">This event is sponsored by</h2>
  <div class="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
    <!-- Loop through the site.data.sponsors -->
    {% for sponsor in site.data.sponsors %}
    <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="{{ sponsor.logo }}" alt="{{ sponsor.name }}" width="158" height="48">
    {% endfor %}   
  </div>
</div>
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
   import { getFirestore, collection, query, where, getDocs, addDoc, updateDoc, arrayUnion, arrayRemove, doc } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";
  import { getAuth, signInWithPopup, GithubAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
  import { firebaseConfig } from '/firebaseConfig.js';
  // Initialize Firebase and Firestore
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  // GitHub Auth Provider
  const provider = new GithubAuthProvider();
  var loginButton = document.getElementById('login-button');
  var loginSection = document.getElementById('login-section');
  var eventSection = document.getElementById('event-section');
  // Login with GitHub
  loginButton.addEventListener('click', function() {
    signInWithPopup(auth,provider)
      .then((result) => {
        var user = result.user;
        var ghHandle = result.user.reloadUserInfo.screenName;
        handleUserLogin(user);
      }).catch((error) => {
        console.error("Error during login:", error);
      });
  });
   // Handle user login
  async function handleUserLogin(user) {
    loginSection.style.display = 'none';
    eventSection.style.display = 'block';
    console.log(user);
    // userName.textContent = user.displayName;
    // Check if the user is a registered participant
    const q = query(collection(db, 'participants'), where('uid', '==', user.uid));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const participantData = querySnapshot.docs[0].data();
      const venueId = participantData.venueId;
      await fetchTeams(user, venueId, participantData);
    } else {
      alert('You are not registered for the event.');
    }
  }
  // Fetch teams with the same venueId and check team membership
  async function fetchTeams(user, venueId, participantData) {
    const q = query(collection(db, 'teams'), where('venueId', '==', venueId));
    const querySnapshot = await getDocs(q);

    let joinedTeams = [];
    let availableTeams = [];
    
    querySnapshot.forEach((doc) => {
      const teamData = doc.data();
      const teamId = doc.id;
      const member = teamData.members?.find(member => member.uid === user.uid);
      if (member) {
        joinedTeams.push({ teamId, teamData });
      } else {
        availableTeams.push({ teamId, teamData });
      }
    });

    displayTeams(user, participantData, joinedTeams, availableTeams);
  }

   // Display teams to the participant
  function displayTeams(user, participantData, joinedTeams, availableTeams) {
    eventSection.innerHTML = ''; // Clear previous content

    if (joinedTeams.length > 0) {
      const joinedSection = document.createElement('div');
      joinedSection.innerHTML = `
        <h2 class="text-2xl font-bold text-white mb-6">Your team(s)</h2>
      `;
      joinedTeams.forEach(({ teamId, teamData }) => {
        const teamName = teamData.name.startsWith('global-') ? teamData.name.replace('global-', '') : teamData.name;
        const teamElement = document.createElement('div');
        teamElement.innerHTML = `
          <p class="text-lg font-semibold text-white">${teamName} (${teamData.members.length} participants)</p>
          <button class="rounded-md bg-green-500 px-3.5 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400" id="start-${teamId}">Start with Team</button>
          <button class="rounded-md bg-red-500 px-3.5 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400" id="leave-${teamId}">Leave Team</button>
        `;
        joinedSection.appendChild(teamElement);
      });
      eventSection.appendChild(joinedSection);

      joinedTeams.forEach(({ teamId }) => {
        document.getElementById(`start-${teamId}`).addEventListener('click', () => {
          window.location.href = `/start-team`;
        });

        document.getElementById(`leave-${teamId}`).addEventListener('click', async () => {
          await leaveTeam(user, teamId);
          fetchTeams(user, participantData.venueId, participantData);
        });
      });
    }

    const availableSection = document.createElement('div');
    availableSection.innerHTML = `
      <h2 class="text-2xl font-bold text-white mb-6 mt-6">Available Teams</h2>
    `;
    availableTeams.forEach(({ teamId, teamData }) => {
      const teamName = teamData.name.startsWith('global-') ? teamData.name.replace('global-', '') : teamData.name;
      const teamElement = document.createElement('div');
      teamElement.innerHTML = `
        <p class="text-lg font-semibold text-white">${teamName} (${teamData.members?.length || 0} participants)</p>
        <button class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400" id="join-${teamId}">Join Team</button>
      `;
      availableSection.appendChild(teamElement);
    });
    eventSection.appendChild(availableSection);

    availableTeams.forEach(({ teamId }) => {
      document.getElementById(`join-${teamId}`).addEventListener('click', async () => {
        await joinTeam(user, participantData, teamId);
        fetchTeams(user, participantData.venueId, participantData);
      });
    });
  }

  // Join a team
  async function joinTeam(user, participantData, teamId) {
    try {
      const teamDocRef = doc(db, 'teams', teamId);
      await updateDoc(teamDocRef, {
        members: arrayUnion({ uid: user.uid, githubUsername: user.reloadUserInfo.screenName })
      });
      alert('You have joined the team!');
    } catch (error) {
      console.error("Error joining team:", error);
    }
  }

  // Leave a team
  async function leaveTeam(user, teamId) {
    try {
      const teamDocRef = doc(db, 'teams', teamId);
      await updateDoc(teamDocRef, {
        members: arrayRemove({ uid: user.uid, githubUsername: user.reloadUserInfo.screenName })
      });
      alert('You have left the team!');
    } catch (error) {
      console.error("Error leaving team:", error);
    }
  }

  </script>
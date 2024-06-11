 // Import the functions you need from the SDKs you need
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
    getFirestore,
    collection,
    query,
    where,
    getDocs,
    addDoc,
    updateDoc,
    arrayUnion,
    arrayRemove,
    doc
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";
import {
    getAuth,
    signInWithPopup,
    GithubAuthProvider
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import {
    firebaseConfig
} from '/firebaseConfig.js';
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
    signInWithPopup(auth, provider)
        .then((result) => {
            var user = result.user;
            var ghHandle = result.user.reloadUserInfo.screenName;
            handleUserLogin(user);
            appInsights.setAuthenticatedUserContext(ghHandle);
            appInsights.trackEvent({name: "userLogin", properties: {username: ghHandle}});
        }).catch((error) => {
            appInsights.trackException({ exception: error });
            console.error("Error during login:", error);
        });
        return false;
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
        alert('You are not registered for the event or we cannot find you with this account. Please do register again with your venue to gain access to the event. Find you venue from the list and register.');
        throw new Error('User not registered');
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
        if (teamData.members){
            const member = teamData.members?.find(member => member.uid === user.uid);
            if (member) {
                joinedTeams.push({
                    teamId,
                    teamData
                });
            } else {
                availableTeams.push({
                    teamId,
                    teamData
                });
            }   
        }
        else
        {
            // add a member array to the teamData object
            teamData.members = [];

            availableTeams.push({
                teamId,
                teamData
            });
        }

    });

    displayTeams(user, participantData, joinedTeams, availableTeams);
}

function displayTeams(user, participantData, joinedTeams, availableTeams) {
    eventSection.innerHTML = ''; // Clear previous content

    const allTeams = [...joinedTeams, ...availableTeams];
    const teamsContainer = document.createElement('div');
    teamsContainer.className = 'space-y-4 text-center';

    // Check if there is a selected team
    const selectedTeam = allTeams.find(({
        teamData: {
            members
        }
    }) => members.some(member => member.uid === user.uid));

    const introText = document.createElement('p');
    introText.textContent = `Welcome to venue ${participantData.venueName}!`;
    introText.className = 'text-white text-lg';

    teamsContainer.appendChild(introText);

    if (selectedTeam) {
        // If there is a selected team, add a button to start the event
        const startButton = document.createElement('button');
        startButton.textContent = 'Start the event';
        startButton.className = 'text-left rounded-md bg-indigo-500 px-3.5 py-2.5 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500';
        startButton.addEventListener('click', () => {
            const githubUsername = user.reloadUserInfo.screenName;
            appInsights.trackEvent({name: "eventStarted", properties: {teamId: selectedTeam.teamId, username: githubUsername}});
            startTeam(githubUsername, selectedTeam);
        });

        teamsContainer.appendChild(startButton);
    } else {
        // If there is no selected team, show a text that a team needs to be selected
        const selectTeamText = document.createElement('p');
        selectTeamText.textContent = 'A team needs to be selected to start the event.';
        selectTeamText.className = 'text-white text-lg';

        teamsContainer.appendChild(selectTeamText);
    }

    // Sort by team name
    allTeams.sort((a, b) => a.teamData.name.localeCompare(b.teamData.name));

    allTeams.forEach(({
        teamId,
        teamData
    }, index) => {
        const isSelected = teamId === selectedTeam?.teamId;
        const teamName = teamData.name;
        const teamElement = document.createElement('label');
        teamElement.setAttribute('aria-label', teamName);
        teamElement.setAttribute('aria-description', `${teamData.members.length} participants`);
        teamElement.className = `relative block cursor-pointer rounded-lg border px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between ${isSelected ? 'border-indigo-600' : 'border-gray-300'}`;
        teamElement.innerHTML = `
       <input type="radio" name="team" value="${teamId}" class="sr-only" ${isSelected? 'checked' : ''}>
       <span class="flex items-center">
         <span class="flex flex-col text-normal text-left">
           <span class="font-medium text-white text-xl">${teamName}</span>
           <span class="text-gray-400">${teamData.members.length} participants</span>
         </span>
       </span>
       ${isSelected ? `
       <span class="mt-2 flex text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-right">
         <span class="inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-normal font-bold text-green-700">selected</span>
       </span>
       ` : ''}
       <span class="pointer-events-none absolute -inset-px rounded-lg border-2 ${isSelected ? 'border-indigo-600' : 'border-transparent'}" aria-hidden="true"></span>
     `;

        teamsContainer.appendChild(teamElement);
    });

    eventSection.appendChild(teamsContainer);

    allTeams.forEach(({
        teamId
    }) => {
        document.querySelector(`input[value="${teamId}"]`).addEventListener('change', async (event) => {
            if (event.target.checked) {
                await joinTeam(user, participantData, teamId, allTeams);
                fetchTeams(user, participantData.venueId, participantData);
                appInsights.trackEvent({name: "teamSelected", properties: {teamId: teamId, username: user.reloadUserInfo.screenName}});
            }
        });
    });
}

async function joinTeam(user, participantData, newTeamId, allTeams) {
    try {
        // Check if user is already in a team
        const allTeamsArray = Object.values(allTeams);
        const currentTeam = allTeamsArray.find(({
            teamData: {
                members
            }
        }) => members.some(member => member.uid === user.uid));

        if (currentTeam && currentTeam.teamId !== newTeamId) {
            const teamName = currentTeam.teamData.name;
            const confirmation = confirm(`You are about to leave the team ${teamName}. Are you sure?`);
            if (!confirmation) return;
        }

        // Leave all other teams
        const leavePromises = allTeams.map(({
            teamId
        }) => {
            if (teamId !== newTeamId) {
                const teamDocRef = doc(db, 'teams', teamId);
                appInsights.trackEvent({name: "teamLeft", properties: {teamId: teamId}});
                return updateDoc(teamDocRef, {
                    members: arrayRemove({
                        uid: user.uid,
                        githubUsername: user.reloadUserInfo.screenName
                    })
                });
            }
        });

        await Promise.all(leavePromises);

        // Remove from the event app
        await removeFromTeam(user.reloadUserInfo.screenName);    

        // Join the new team
        const newTeamDocRef = doc(db, 'teams', newTeamId);
        await updateDoc(newTeamDocRef, {
            members: arrayUnion({
                uid: user.uid,
                githubUsername: user.reloadUserInfo.screenName
            })
        });

    } catch (error) {
        appInsights.trackException({ exception: error });
        throw new Error('Error joining team', error);
    }
}

async function removeFromTeam(githubUsername)
{

    const baseUrl = 'https://gdex2024-eventapp-app.azurewebsites.net';
    let teamName;
    let team;

    const response = await fetch(`${baseUrl}/api/teams/member/${githubUsername}`);
    if (response.status === 404) {
        console.log(`User ${githubUsername} is not a member of any team`);
    } else if (!response.ok) {
        throw new Error(`Error fetching team: ${response}`);
    } else {
        team = await response.json();
        teamName = team.teamName;
        // Remove the member from the team
        await fetch(`${baseUrl}/api/teams/${teamName}/members/${githubUsername}`, {
            method: 'DELETE'
        });
    }

}

async function startTeam(githubUsername, selectedTeam) {
    // Access the teamId and teamData from the selectedTeam
    const { teamId, teamData } = selectedTeam;

    // Log or do something with the githubUsername and selectedTeam
    console.log(`Starting event for team ${teamData.name} (ID: ${teamId}) with GitHub user ${githubUsername}`);

    const teamName = teamData.name;
    const baseUrl = 'https://gdex2024-eventapp-app.azurewebsites.net';

    // Get a team by name
    let team;
    const response = await fetch(`${baseUrl}/api/teams/${teamName}`);
    if (response.status === 404) {
    // Create a team if it doesn't exist
    await fetch(`${baseUrl}/api/teams/${teamName}`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            RepositoryName: teamData.name,
            VenueId: teamData.venueId,
        })
    }).catch((error) => {
        console.error('Error creating team:', error);
        appInsights.trackException({ exception: error });
        alert('An error occurred while processing your request. Please try again later.');    
    });
    } else if (!response.ok) {
        alert("Unable to add you to the team. Reach out to a proctor: " + error.message);
        throw new Error(`Error fetching team: ${response}`);
    } else {
        team = await response.json();
    }

  // Add a member to the team
    const responseAdd = await fetch(`${baseUrl}/api/teams/${teamName}/members`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            GitHubHandle: githubUsername
        })
    });
    if (!responseAdd.ok) {
        alert("Unable to add you to the team. Reach out to a proctor: " + error.message);
        throw new Error(`Error adding member to team: ${responseAdd}`);
    }

    // redirect to the start-team
    window.location.href = `/start-team`;

}
const admin = require('firebase-admin');
const fs = require('fs');
const slugify = require('slugify');
const path = require('path');

const firebaseConfig = {
  // Your Firebase project configuration
};

const githubToken = process.env.GITHUB_TOKEN; // Make sure to set this in your GitHub Secrets
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const repositoryDetails = {
  owner: process.env.GITHUB_REPOSITORY_OWNER,
  repo: "gdex-2024",
};

  
async function main() {
    try {
      // Clean the _venues folder
      fs.rmdirSync('_venues', { recursive: true });
      fs.mkdirSync('_venues');
  
      // Fetch the venues from Firebase
      const venuesSnapshot = await db.collection('venues').get();
  
      // Generate a markdown file for each venue
      venuesSnapshot.forEach((doc) => {
        const venue = doc.data();
  
        // Create a slug from the venue name
        const slug = slugify(venue.venueName, { lower: true });
  
        // Create the frontmatter
        const frontmatter = `---
  venueName: "${venue.venueName}"
  location: "${venue.location}"
  maxParticipants: ${venue.maxParticipants}
  registeredAt: "${venue.registeredAt}"
  primaryContactName: "${venue.primaryContactName}"
  primaryUsername: "${venue.primaryUsername}"
  secondaryContactName: "${venue.secondaryContactName}"
  secondaryUsername: "${venue.secondaryUsername}"
  ---`;
  
        // Write the frontmatter to a new markdown file
        fs.writeFileSync(path.join('_venues', `${slug}.md`), frontmatter);
      });
    } catch (error) {
      console.error('[Error] Processing venues:', error.message);
    }
  }
  
  main();
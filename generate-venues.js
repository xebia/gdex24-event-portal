const admin = require('firebase-admin');
const fs = require('fs');
const slugify = require('slugify');
const path = require('path');
require('dotenv').config();

const firebaseConfig = {
  // Your Firebase project configuration
};

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

  
async function main() {
    try {
     // Clean the _venues folder
      if (fs.existsSync('_venues')) {
        fs.rmdirSync('_venues', { recursive: true });
      }

      // Create the _venues folder if it doesn't exist
      if (!fs.existsSync('_venues')) {
        fs.mkdirSync('_venues');
      }
  
      // Fetch the venues from Firebase
      const venuesSnapshot = await db.collection('venues').get();
  
      // Generate a markdown file for each venue
      venuesSnapshot.forEach((doc) => {
        const venue = doc.data();
  
        // Create a slug from the venue name
        const slug = slugify(venue.venueName, { lower: true });
  
        var content = venue.__content;

        // replace the /n with newlines in the content
        content = content.replace(/\\n/g, '\n');

        // Create the frontmatter
        const frontmatter = `---
  venueName: "${venue.venueName}"
  location:
    address: ${venue.location.address}
    city: "${venue.location.city}"
    country: "${venue.location.country}"
    latitude: ${venue.location.latitude}
    longitude: ${venue.location.longitude}
  maxParticipants: ${venue.maxParticipants}
  primaryContactName: "${venue.primaryContactName}"
  primaryUsername: "${venue.primaryUsername}"
  secondaryContactName: "${venue.secondaryContactName}"
  secondaryUsername: "${venue.secondaryUsername}"
  proctors: ${JSON.stringify(venue.proctors)}
  canSignup: false
  isShown: ${venue.isShown}
---
${content}
`;
  
        // Output the markdown to the console
       // console.log(frontmatter);

        // Write the frontmatter to a new markdown file
        fs.writeFileSync(path.join('_venues', `${slug}.md`), frontmatter);
      });
    } catch (error) {
      console.error('[Error] Processing venues:', error.message);
    }
  }
  
  main();
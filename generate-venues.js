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
  //console.log(venue);
        // Create a slug from the venue name
        const slug = slugify(venue.venueName, { lower: true });
        const proctors = Array.isArray(venue.proctors) ? venue.proctors : [venue.proctors];

        var content = venue.__content;

        // Check if content exists
        if (content) {
          // replace the /n with newlines in the content
          content = content.replace(/\\n/g, '\n');
        } else {
          // Set content to an empty string if it doesn't exist
          content = '';
        }
        // Create the frontmatter
        const frontmatter = `---
  venueName: "${venue.venueName}"
  venueId: "${venue.id}"
  location:
    address: ${venue.location.address}
    city: "${venue.location.city}"
    country: "${venue.location.country}"
    latitude: ${venue.location.latitude}
    longitude: ${venue.location.longitude}
  maxParticipants: ${venue.maxParticipants}
  primaryContactName: "${venue.primaryContact?.name || venue.primaryContactName}"
  primaryUsername: "${venue.primaryContact?.username || venue.primaryUsername}"
  secondaryContactName: "${venue.secondaryContact?.name || venue.secondaryContactName}"
  secondaryUsername: "${venue.secondaryContact?.username || ""}"
  proctors: ${JSON.stringify(proctors)}
  canSignup: ${venue.canSignup}
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
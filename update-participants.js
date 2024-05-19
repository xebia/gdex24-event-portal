
require('dotenv').config();
const admin = require('firebase-admin');

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
    // Get a reference to the 'participants' collection
    const participantsRef = db.collection('participants');

    // Get all participants
    const snapshot = await participantsRef.get();

    // Loop through all participants
    snapshot.forEach(async (doc) => {
      const participant = doc.data();

      try {
        // Get the user record by email
        const user = await admin.auth().getUserByEmail(participant.participantEmail);

        // Update the participant document with the UID
        await participantsRef.doc(doc.id).update({
          uid: user.uid
        });

        console.log(`Updated participant ${doc.id} with UID ${user.uid}`);
      } catch (error) {
        console.error(`Failed to update participant ${doc.id}:`, error.message);

        // Handle the case where the user could not be found
        if (error.code === 'auth/user-not-found') {
          console.error(`No user found for email ${participant.participantEmail}`);
        }
      }
    });
  } catch (error) {
    console.error('[Error] Processing participants:', error.message);
  }
}
  
  main();
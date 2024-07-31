import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'NareenAsad_pantry-key',
    authDomain: 'pantry-project.firebaseapp.com',
    projectId: 'pantry-project-id',
    storageBucket: 'pantry-project.appspot.com',
    messagingSenderId: '1234567890',
    appId: '1:1234567890:web:pantry-app-id',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
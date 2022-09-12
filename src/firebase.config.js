import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyB6XWymVQuPwh-cxrj7BcVT-HGGmx62pv0',
    authDomain: 'house-marketplace-app-ae5d2.firebaseapp.com',
    projectId: 'house-marketplace-app-ae5d2',
    storageBucket: 'house-marketplace-app-ae5d2.appspot.com',
    messagingSenderId: '61724191584',
    appId: '1:61724191584:web:7807f3b5c21e28377e4c05',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()

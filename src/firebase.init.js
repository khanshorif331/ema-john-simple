// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'

import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
	apiKey: 'AIzaSyBTepC7gnglzyHxQlmuNQdJu-3WgwBzzUQ',

	authDomain: 'ema-john-simple-dfd67.firebaseapp.com',

	projectId: 'ema-john-simple-dfd67',

	storageBucket: 'ema-john-simple-dfd67.appspot.com',

	messagingSenderId: '361914529189',

	appId: '1:361914529189:web:683902990d77fecc6d644c',
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth

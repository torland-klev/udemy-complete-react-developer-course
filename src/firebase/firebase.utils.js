import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyD5_2MIcEFlJ1D3BsqtrApWt3PGEaOS8bU',
  authDomain: 'udemy-react-course-7b37f.firebaseapp.com',
  projectId: 'udemy-react-course-7b37f',
  storageBucket: 'udemy-react-course-7b37f.appspot.com',
  messagingSenderId: '112836877793',
  appId: '1:112836877793:web:cb57e727263ca28abe46a0',
  measurementId: 'G-25SM3M91GZ',
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const userSnapshot = await userRef.get()

  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('Error creating user', error.message)
    }
  }

  return userRef
}

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey)

  const batch = firestore.batch()
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    }
  })

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

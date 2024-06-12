import { initializeApp } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  writeBatch,
} from 'firebase/firestore'

type ImageType = {
  image: string
}

type ProductDataType = {
  name: string
  id: string
  description: string
  price: string
  inStock: boolean
  category: string
  images: ImageType[]
}

interface ProductDocument {
  title: string
  items: ProductDataType[]
}

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Set up authentication
export const auth = getAuth(app)

// Set up Firestore
// const db = getFirestore(app);

export const signUp = async (email: string, password: string) => {
  try {
    console.log(email, password)
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    )

    const user = userCredential.user
    return user
    // You might do something with 'user' or navigate to a different page after signing up
  } catch (error) {
    const authError = error as { code: string; message: string }
    console.error('Error creating user:', authError.message)
  }
}

// Example: Signing in with an existing user
export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    )
    const user = userCredential.user
    return user
    // You might do something with 'user' or navigate to a different page after signing in
  } catch (error) {
    const authError = error as { code: string; message: string }
    console.error('Error signing in:', authError.message)
  }
}

// Example: Signing out
export const signOutUser = async () => {
  try {
    await signOut(auth)
    console.log('User signed out')
    // You might do something after signing out, like navigating to a login page
  } catch (error) {
    const authError = error as { code: string; message: string }
    console.error('Error signing out:', authError.message)
  }
}

const db = getFirestore(app)

export async function addProduct(data: ProductDataType): Promise<void> {
  try {
    const productRef = doc(db, 'products', data.category)

    // Update the document with the new field
    await updateDoc(productRef, {
      [data.name]: {
        // Use data.name as the field name
        price: data.price,
        description: data.description,
      },
    })
    console.log('Document updated successfully')
  } catch (error) {
    console.error('Error updating document: ', error)
  }
}
// await setDoc(doc(db, 'categories'))

export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: ProductDocument[],
) => {
  const collectionRef = collection(db, collectionKey)

  const batch = writeBatch(db)

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())

    batch.set(docRef, object)
  })

  await batch.commit()
  console.log('done')
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'produtos')

  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)

  const categoryMap = querySnapshot.docs.reduce((acc: any, docSnapshot) => {
    const { title, items }: { title: string; items: ProductDataType[] } =
      docSnapshot.data() as ProductDocument

    acc[title.toLowerCase()] = items
    return acc
  }, {})

  return categoryMap
}

export const getProductById = async () => {
  try {
    const collectionRef = collection(db, 'products')

    const q = query(collectionRef)

    const querySnapshot = await getDocs(q)

    const product = querySnapshot.docs

    console.log(product)
  } catch {
    console.log('bibilip')
  }
}

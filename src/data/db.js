import { firebaseApp } from './firebaseApp'
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
} from 'firebase/firestore'

export const addMessage = async message => {
  const db = getFirestore(firebaseApp)

  try {
    const messageRef = await addDoc(collection(db, 'messages'), {...message, date: Timestamp.fromDate(new Date()).toDate()})
    
    return messageRef.id
  } catch (error) {
    console.log(error)
  }

  return false
}
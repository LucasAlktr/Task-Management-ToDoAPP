import { doc, updateDoc } from "firebase/firestore";
import { db } from "./config";

export async function updateTask(id, data) {
  const docRef = doc(db, "tasks", id);
  try {
    await updateDoc(docRef, data);
  } catch (error) {
    // eslint-disable-next-line
    throw new Error("Failed to update the data.");
  }
}

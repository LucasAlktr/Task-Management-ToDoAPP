import { doc, updateDoc } from "firebase/firestore";
import { db } from "./config";

export async function updateTask(id, data) {
  console.log("Updating...");

  const docRef = doc(db, "tasks", id);
  await updateDoc(docRef, data);
}

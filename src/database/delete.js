import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./config";

export async function removeTask(id) {
  console.log("File Updated");

  await deleteDoc(doc(db, "tasks", id));
}

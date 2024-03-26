import { doc, updateDoc } from "firebase/firestore";
import { db } from "./config";

export async function updateTask() {
  console.log("File Updated");

  const washingtonRef = doc(db, "cities", "DC");
  await updateDoc(washingtonRef, {
    capital: true,
  });
}

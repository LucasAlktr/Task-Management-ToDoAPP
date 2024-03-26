import { doc, updateDoc } from "firebase/firestore";

export async function updateTask() {
  console.log("File Updated");

  const washingtonRef = doc(db, "cities", "DC");
  await updateDoc(washingtonRef, {
    capital: true,
  });
}

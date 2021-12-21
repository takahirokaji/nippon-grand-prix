import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

import firebaseInit from "./firebaseInit";

export const useFirestore = () => {
  const db = getFirestore(firebaseInit);
  const getArticles = async () => {
    const q = query(collection(db, "articles"));
    console.log(q);
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  };

  return {
    getArticles,
  };
};

import {
  getFirestore,
  collection,
  query,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  doc,
  serverTimestamp,
  FieldValue,
  updateDoc,
  increment,
} from "firebase/firestore";

import firebaseInit from "./firebaseInit";
import { useUser, useUserSubs } from "./state";

const db = getFirestore(firebaseInit);

export const userExist = async (str: string) => {
  const docRef = doc(db, "users", str);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return true;
  } else {
    return false;
  }
};

export const createNewAccount = async (uid, name, icon) => {
  await setDoc(doc(db, "users", uid), {
    name: name,
    icon: icon,
  });
  await setDoc(doc(db, "users", uid, "contents", "liked"), {
    ids: [],
  });
  await setDoc(doc(db, "users", uid, "contents", "posted"), {
    ids: [],
  });
  await setDoc(doc(db, "users", uid, "contents", "super-liked"), {
    ids: [],
  });
  await setDoc(doc(db, "users", uid, "contents", "viewed"), {
    ids: [],
  });
};

export const setUserState = async (uid) => {
  const userRef = doc(db, "users", uid);
  const subCollection = collection(db, "users", uid, "contents");
  const userSnap = await getDoc(userRef);
  useUser().name.value = userSnap.data().name;
  useUser().id.value = userSnap.id;
  useUser().icon.value = userSnap.data().icon;
  const subUserSnaps = await getDocs(subCollection);
  subUserSnaps.forEach((snap) => {
    useUserSubs().setValue(snap.id, snap.data().ids);
  });
};

export const getQuestionAndAnswer = async () => {
  const questionsRef = collection(db, "q&a");
  const qustionSnaps = await getDocs(questionsRef);
  const allQandA = [];
  qustionSnaps.forEach((snap) => {
    const data = snap.data();
    data.id = snap.id;
    allQandA.push(data);
  });
  return allQandA;
};

export const addQuestionAndAnswer = async (uid) => {
  await addDoc(collection(db, "q&a"), {
    answer: "こんなもんかな",
    createdAt: serverTimestamp(),
    dislike: 0,
    likes: 0,
    poster: uid,
    question: "YK2YgoiUwXJa0cq4TId2",
    views: 0,
  });
};

export const getAllQuestion = async () => {
  const questionsRef = collection(db, "questions");
  const qustionSnaps = await getDocs(questionsRef);
  const all = [];
  qustionSnaps.forEach((snap) => {
    const data = snap.data();
    data.id = snap.id;
    all.push(data);
  });
  return all;
};

export const getUserNameAndIcon = async (id) => {
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);
  const name = docSnap.data().name;
  const icon = docSnap.data().icon;

  return {
    name,
    icon,
  };
};

export const incrementLikes = async (id, num) => {
  const docRef = doc(db, "q&a", id);

  await updateDoc(docRef, {
    likes: increment(num),
  });
};

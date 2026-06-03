import {
  createUserWithEmailAndPassword,
  deleteUser,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";

import { auth, db } from "../database/firebase";

type RegisterUserParams = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

export const registerUser = async ({
  name,
  email,
  phone,
  password,
}: RegisterUserParams) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  try {
    await updateProfile(userCredential.user, {
      displayName: name,
    });

    await setDoc(doc(db, "users", userCredential.user.uid), {
      uid: userCredential.user.uid,
      name,
      email,
      phone,
      createdAt: new Date().toISOString(),
    });

    return userCredential;
  } catch (error) {
    await deleteUser(userCredential.user);
    throw error;
  }
};

export const loginUser = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
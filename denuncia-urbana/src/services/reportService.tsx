import {deleteDoc, doc,  updateDoc, addDoc,collection,getDocs,query,where,} from "firebase/firestore";
import { Report } from "../types/Report";
import { auth, db } from "../database/firebase";

type CreateReportParams = {
  title: string;
  description: string;
  category: string;
};

export const createReport = async ({title,description, category}: CreateReportParams) => {
  return await addDoc(
    collection(db, "reports"),
    {
      title,
      description,
      category,
      status: "Aberto",
      userId: auth.currentUser?.uid,
      createdAt: new Date().toISOString(),
    }
  );
};

export const getUserReports = async (): Promise<Report[]> => {

  const q = query(
    collection(db, "reports"),
    where(
      "userId",
      "==",
      auth.currentUser?.uid
    )
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Report[];
};

export const deleteReport = async (reportId: string) => {
  await deleteDoc(
    doc(db, "reports", reportId)
  );
};

export const updateReport = async (reportId: string,data: 
  {
    title: string;
    category: string;
    description: string;
  }
) => {
  await updateDoc(
    doc(db, "reports", reportId),
    {
      title: data.title,
      category: data.category,
      description: data.description,
    }
  );
};
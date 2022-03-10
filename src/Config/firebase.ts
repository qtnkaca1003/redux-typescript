import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import config from "../Config/config"


const firebaseApp = initializeApp(config.firebase);

const auth = getAuth(firebaseApp); // For Authentication
const db = getDatabase(firebaseApp); // For Using Database
export {  db, auth };





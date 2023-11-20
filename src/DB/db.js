// db.js
import Dexie from "dexie";

export const db = new Dexie("MyDB");
db.version(1).stores({
  users: "++id, firstname, lastname, &username, password, role", // Primary key and indexed props
});

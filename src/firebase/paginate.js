import app from './index'


import {
    getFirestore,
    collection, query, orderBy, startAfter, limit, getDocs,
} from "firebase/firestore";



const db = getFirestore(app);
const tableName = 'posts';


 

export async function paginate (OrderBy='id') {
  // Query the first page of docs
const first = query(collection(db, tableName), orderBy(OrderBy), limit(2));
const documentSnapshots = await getDocs(first) 
/*
// Get the last visible document
const lastVisible =  documentSnapshots.docs[documentSnapshots.docs.length-1];
console.log("last", lastVisible);

// Construct a new query starting at this document,
// get the next 25 cities.
const next =  query(collection(db, tableName),
    orderBy(OrderBy),
    startAfter(lastVisible),
    limit(25));
*/

documentSnapshots.metadata.forEach(element => {
        console.log(element);
});

   
   

}
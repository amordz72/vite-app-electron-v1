import app from './index'


import {
    getFirestore,
    collection, query, orderBy, startAfter, limit, getDocs,
} from "firebase/firestore";



const db = getFirestore(app);
const tableName = 'posts';




export async function first(OrderBy = 'title', limit_it = 2) {
   
    const result = []
   
    // Query the first page of docs
   const first = query(collection(db, tableName), orderBy(OrderBy), limit(limit_it));
   const documentSnapshots = await getDocs(first);
   
     
   documentSnapshots.forEach((doc) => {

        const id = doc.id;

        result.push({
            id,
            ...doc.data()
        });
    });

    console.log(result);

    if (result) {
        return result
    } else {
        return false
    }




   // return first


}
export async function last(OrderBy = 'title', limit_it = 25) {

    const first = query(collection(db, tableName), orderBy(OrderBy), limit(limit_it));

    const documentSnapshots = await getDocs(first);

    // Get the last visible document
    const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];

    console.log(lastVisible);
 

   return lastVisible
}
export async function next(OrderBy = 'title', limit_it = 25) {


    const next = query(collection(db, tableName),
        orderBy(OrderBy),
        limit(limit_it));

    return next


}




import app from './index'


import {
    getFirestore,
    collection, query, orderBy, startAfter, limit, getDocs,
} from "firebase/firestore";



const db = getFirestore(app);
const tableName = 'posts';




export async function first(OrderBy  , limit_it ) {

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



    if (result) {
        return result
    } else {
        return false
    }




    // return first


}
export async function last(OrderBy = 'title', limit_it = 5) {

    const result = []

    // Query the first page of docs
   const first = query(collection(db, tableName), orderBy(OrderBy), limit(limit_it));
   const documentSnapshots = await getDocs(first);

    // Get the last visible document
    const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
    


    lastVisible.forEach((doc) => {

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



}
export async function next(OrderBy = 'title', limit_it = 2) {

    const result = []

    const next = query(collection(db, tableName),
        orderBy(OrderBy),
        limit(limit_it));
        const documentSnapshots = await getDocs(next);

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
    


}




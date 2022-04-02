import app from './index'


import {
    collection,
    getDocs,
    deleteDoc,
    doc,
    updateDoc, addDoc, getFirestore
} from "firebase/firestore";


const db = getFirestore(app);
const tableName = 'posts';


export async function add_post(obj) {

    const docRef = await addDoc(collection(db, tableName), {
        obj
    });
    return docRef;
}
export async function update_post(id, obj) {

    const postRef = doc(db, tableName, id);
    await updateDoc(postRef, {
        obj
    });
    return postRef
}
export async function del_post(id) {

    await deleteDoc(doc(db, tableName, id));


}

export async function get_all_posts() {

    const result = []

    const querySnapshot = await getDocs(collection(db, tableName));
    querySnapshot.forEach((doc) => {
        result.push({
            id: doc.id,
            ...doc.data(),
        });
    });

    console.log(result);

    return result
}





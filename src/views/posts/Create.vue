<template>
  <div class="container">
  
    <button type="submit" @click ="add( )">add</button>
  </div>
</template>

<script>
 

import { collection, addDoc, getFirestore } from "firebase/firestore";

import app from "../../firebase";
const db = getFirestore(app);

export default {
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    
    add: async function ( ) {
      try {
         
        const docRef = await addDoc(collection(db, "posts"), {
          title: "Alan2",
        body:'lorem 155'
        });

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  },
  mounted() {
    // this.get_users();
  },
};
</script>

<style>
</style>
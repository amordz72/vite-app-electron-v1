<template>
  <div class="container">
    <ul>
      <ol v-for="user in posts" :key="user.id">
        {{
          user.data.title 
        }}
      </ol>
    </ul>
    <button @click="add">add</button>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../router";

import { collection, getDocs, getFirestore } from "firebase/firestore";

import app from "../../firebase";
const db = getFirestore(app);

export default {
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    get_users: function () {
      var me = this;
      axios
        .get(
          "https://code-builder-528e4-default-rtdb.europe-west1.firebasedatabase.app/posts/.json"
        )
        //   .get("https://code-builder-528e4-default-rtdb.europe-west1.cloud-firestore.app/posts/.json")

        .then((dd) => {
          me.posts = dd.data;
          alert(me.posts[0].name);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add: async function () {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Alan",
          middle: "Mathison",
          last: "Turing",
          born: 1912,
        });

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    get: async function () {
      var me = this;
      const querySnapshot = await getDocs(collection(db, "posts"));
      querySnapshot.forEach((doc) => {
        me.posts.push({

          id: doc.id ,
         data:  doc.data() 
        })
      
      });  console.log(me.posts);
    },
  },
  mounted() {
    this.get(); //
  },
};
</script>

<style>
</style>
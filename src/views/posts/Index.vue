<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-4">
        <Add @get="get"></Add>
      </div>
      <div class="col-md-8">
        <table class="table table-responsive table-hover text-center">
          <thead class="table-dark">
            <tr>
              <th>Title</th>
              <th>Del</th>
            </tr>
          </thead>
          <tbody class="table-light">
            <tr v-for="p in posts" :key="p.id">
              <td>{{ p.data.title }}</td>
              <td>
                <button class="btn btn-info" @click.stop.prevent="update(p.id)">update</button>
                <button class="btn btn-danger" @click.stop.prevent="del(p.id)">del</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

import router from "../../router";

import {
  collection,
  getDocs,
  getFirestore,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import app from "../../firebase";
const db = getFirestore(app);

import Add from '../../components/posts/Add.vue'


export default {
  components: {
    Add,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {

    get: async function () {

      var me = this;
      me.posts = [];
      const querySnapshot = await getDocs(collection(db, "posts"));
      querySnapshot.forEach((doc) => {
        me.posts.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      // console.log(me.posts);
    },
    del: async function (id) {
      await deleteDoc(doc(db, "posts", id));
      this.get(); //
    },
    update: async function (id) {
      const postRef = doc(db, "posts", id);
      await updateDoc(postRef, {
        title: 'new title',
      });
      this.get(); //
    },
  },
  mounted() {
    this.get(); //
  },
};
</script>

<style>
</style>
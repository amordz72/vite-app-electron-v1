<template>
  <div class="container">
        <ul>
      <ol v-for="user in posts" :key="user.id">
        {{
          user.title
        }}
      </ol>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../router";

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
     .get("https://code-builder-528e4-default-rtdb.europe-west1.firebasedatabase.app/posts/.json")
        //   .get("https://code-builder-528e4-default-rtdb.europe-west1.cloud-firestore.app/posts/.json")


        .then((dd) => {
          me.posts = dd.data;
          alert( me.posts[0].name);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.get_users();
  },
};
</script>

<style>
</style>
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
              <th>body</th>
              <th>Del</th>
            </tr>
          </thead>
          <tbody class="table-light">
            <tr v-for="p in posts" :key="p.id">
              <td>{{ p.data.title }}</td>
              <td>
                <button
                  class="btn btn-info"
                  @click.stop.prevent="edit(p)"
                  data-bs-toggle="modal"
                  data-bs-target="#update_model"
                >update</button>
                <button class="btn btn-danger" @click.stop.prevent="del(p.id)">del</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- up -->

    <!-- Modal -->
    <div
      class="modal fade"
      id="update_model"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-2">
              <label for class="form-label">Title</label>
              <input type="text" class="form-control" v-model="post.title" />
            </div>
            <div class="mb-2">
              <label for class="form-label">Body</label>
              <input type="text" class="form-control" v-model="post.body" />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              @click="update"
              data-bs-dismiss="modal"
            >Save</button>
          </div>
        </div>
      </div>
    </div>
    <!-- e-up -->
  </div>
</template>

<script>

import router from "../../router";

import { add_post, update_post, del_post, get_all_posts } from "../../firebase/posts";


import Add from '../../components/posts/Add.vue'


export default {
  components: {
    Add,
  },
  data() {
    return {
      h_id: null,
      post: {
        title: '',
        body: '',
      },
      posts: [],
    };
  },
  methods: {

    get: async function () {

     
      this.posts = [];
      this.posts = get_all_posts();

      // console.log(me.posts);
    },
    del: async function (id) {
      del_post(id)
      this.get(); //
    },
    update: async function () {
      update_post(this.h_id, this.post)

      this.get(); //
    },
    edit(po) {
      this.h_id = po.id
      this.title = po.data.title
      this.body = po.data.body
    },
  },
  mounted() {
    this.get(); //
  },
};
</script>

<style>
</style>
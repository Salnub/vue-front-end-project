<template>
  <Navbar />
  <div class="comments">
    <h2>Comments 💬</h2>

    <div v-if="loading" class="loading">Loading comments...</div>

    <div v-else class="comments-list">
      <div v-for="comment in commentsData" :key="comment.id" class="comment-card">
        <h3>{{ comment.name }}</h3>
        <p>{{ comment.body }}</p>
        <span class="email">Email: {{ comment.email }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios';
import Navbar from '@/components/navbar.vue';

export default defineComponent({
  name: 'Comments',
  data() {
    return {
      commentsData: [],
      loading: true,
    };
  },
  components:{
    Navbar
  },
  methods: {
    async getCommentsData() {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
        this.commentsData = response.data;
         this.loading = false;
      } catch (error) {
        console.log("Error fetching data", error);
      }
    },
   
  },
  mounted() {
    this.getCommentsData();
  },
});
</script>

<style scoped>
.comments {
  padding: 32px;
  max-width: 1100px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  margin-bottom: 32px;
  color: #333;
}

.loading {
  text-align: center;
  font-size: 24px;
  color: #888;
}

.comments-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.comment-card {
  padding: 16px;
  background-color: #fff;
  border-left: 6px solid lightblue;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.comment-card h3 {
  margin: 8px;
  font-size: 17px;
  color: #333;
}

.comment-card p {
  color: #555;
  font-size: 14px;
}

.comment-card .email {
  display: block;
  margin-top: 8px;
  font-size: 13px;
  color: #888;
}

</style>

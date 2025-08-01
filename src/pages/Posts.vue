<template>
  <Navbar />
  <div class="posts">
    <h2>Posts 📝</h2>

    <div v-if="loading" class="loading">Loading posts...</div>

    <div v-else class="posts-list">
      <div v-for="post in postsData" :key="post.id" class="post-card">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
        <span class="user">User ID: {{ post.userId }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios';
import Navbar from '@/components/navbar.vue';

export default defineComponent({
  name: 'Posts',
  data() {
    return {
      postsData: [],
      loading: true,
    };
  },
  components:{
    Navbar
  },
  methods: {
    async getPostsData() {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        this.postsData = response.data;
         this.loading = false;
      } catch (error) {
        console.log("Error fetching data", error);
      }
    },
     goTo(route) {
      switch(route){
        case "Home":
          this.$router.push(ROUTES.Home)
          break;
        case "Todos":
         this.$router.push(ROUTES.TODOS)
         break;
         case "Albums":
          this.$router.push(ROUTES.ALBUMS)
          break;
          case "Users":
          this.$router.push(ROUTES.USERS)
          break;
          case "Posts":
          this.$router.push(ROUTES.POSTS)
          break;
          case "Photos":
          this.$router.push(ROUTES.PHOTOS)
          break;
          case "Comments":
          this.$router.push(ROUTES.COMMENTS)
          break;

      };
    }
  },
  mounted() {
    this.getPostsData();
  },
});
</script>

<style scoped>
.posts {
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
  font-size: 23px;
  color: #888;
}

.posts-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.post-card {
  background-color: #fff;
  padding: 16px;
  border-left: 6px solid lightblue;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.post-card h3 {
  margin: 8px;
  font-size: 17px;
  color: #333;
}

.post-card p {
  font-size: 15px;
  color: #555;
}

.post-card .user {
  display: block;
  margin-top: 8px;
  font-size: 14px;
  color: #888;
}


</style>

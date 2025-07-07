<template>
  <Navbar />
  <div class="albums">
    <h2>Albums 📚</h2>

    <div v-if="loading" class="loading">Loading albums...</div>

    <div v-else class="album-grid">
      <div v-for="album in albumData" :key="album.id" class="album-card">
        <h3>Album #{{ album.id }}</h3>
        <p>{{ album.title }}</p>
        <span class="user">User ID: {{ album.userId }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios';
import Navbar from '@/components/navbar.vue';

export default defineComponent({
  name: 'Albums',
  data() {
    return {
      albumData: [],
      loading: true
    };
  },
  components:{
    Navbar
  },
  methods: {
    async getAlbumData() {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/albums");
        this.albumData = response.data;
         this.loading = false;
      } catch (error) {
        console.log("Error fetching data", error);
      }
    },
  
  },
  
  mounted() {
    this.getAlbumData();
  }
});
</script>

<style scoped>
.albums {
  padding: 32px;
  max-width: 1000px;
  margin: auto;
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

.album-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.album-card {
  background-color: #fdfdfd;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-left: 5px solid lightblue;
  transition: 0.3s ease;
}

.album-card h3 {
  margin: 8px;
  font-size: 17px;
  color: #333;
}

.album-card p {
  font-size: 16px;
  color: #555;
}

.album-card .user {
  display: inline-block;
  margin-top: 8px;
  font-size: 14px;
  color: #888;
}

</style>

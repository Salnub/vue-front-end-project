<template>
  <Navbar />
  <div class="photos">
    <h2>Photos 🖼️</h2>

    <div v-if="loading" class="loading">Loading photos...</div>

    <div v-else class="photos-grid">
      <div v-for="photo in photosData" :key="photo.id" class="photo-card">
        <img :src="photo.thumbnailUrl" :alt="photo.title" />
        <p>{{ photo.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios';
import Navbar from '@/components/navbar.vue';

export default defineComponent({
  name: 'Photos',
  data() {
    return {
      photosData: [],
      loading: true,
    };
  },
  components:{
    Navbar
  },
  methods: {
    async getPhotosData() {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/photos?_limit=50");
        this.photosData = response.data;
         this.loading = false;
      } catch (error) {
        console.log("Error fetching photos", error);
      }
    },
   
  },
  mounted() {
    this.getPhotosData();
  },
});
</script>

<style scoped>
.photos {
  padding: 32px;
  max-width: 1200px;
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

.photos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.photo-card {
  padding: 16px;
  border-radius: 8px;
  background-color: #ffffff;
  border-left: 6px solid lightblue;
  transition: 0.3s;
}

.photo-card img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.photo-card p {
  margin-top: 8px;
  font-size: 12px;
  color: #555;
}
</style>

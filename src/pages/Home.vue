<template>
  <div class="home">
    <Navbar />

    <h1>{{ greeting }}</h1>
    <p class="subtitle">Click on any section in the navbar to explore data.</p>

    <div class="cards">
      <div class="card">
        <h2>📋 Todos</h2>
        <p>Manage and view to-do tasks.</p>
      </div>
      <div class="card">
        <h2>📸 Photos</h2>
        <p>Browse through sample image data.</p>
      </div>
      <div class="card">
        <h2>📝 Posts</h2>
        <p>Read mock posts and blog content.</p>
      </div>
      <div class="card">
        <h2>👥 Users</h2>
        <p>View sample user profiles.</p>
      </div>
      <div class="card">
        <h2>💬 Comments</h2>
        <p>Check comments related to posts.</p>
      </div>
      <div class="card">
        <h2>🎵 Albums</h2>
        <p>Discover album data by user.</p>
      </div>
    </div>
  </div>
</template>


<script>
import Navbar from '@/components/navbar.vue';
import { defineComponent } from 'vue'
import { ROUTES } from '@/constants/routes'

export default defineComponent({
  name: 'Home',
  components:{
    Navbar
  },
  computed: {
    greeting() {
      return 'Welcome to my Front-End Project'
    }
  },
  methods: {
    
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
  }
})
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

h1 {
  font-size: 32px;
  color: blue;
}

p {
  margin-top: 16px;
  font-size: 18px;
  color: #333;
}


.subtitle {
  font-size: 18px;
  margin-bottom: 24px;
  color: #666;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1000px;
  padding: 20px;
}

.card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 12px;
  transition: 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.card:hover {
  background-color: lightblue;
  transform: translateY(-2px);
}

.card h2 {
  font-size: 20px;
  margin-bottom: 8px;
}

.card p {
  color: #555;
}

</style>

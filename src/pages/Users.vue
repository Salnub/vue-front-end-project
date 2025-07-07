<template>
  <Navbar />
  <div class="users">
    <h2>Users 👥</h2>

    <div v-if="loading" class="loading">Loading users...</div>

    <div v-else class="users-list">
      <div v-for="user in usersData" :key="user.id" class="user-card">
        <h3>{{ user.name }}</h3>
        <p><strong>Username:</strong> {{ user.username }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Phone:</strong> {{ user.phone }}</p>
        <p><strong>Company:</strong> {{ user.company.name }}</p>
        <p><strong>City:</strong> {{ user.address.city }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Navbar from '@/components/navbar.vue';
import axios from 'axios';

export default defineComponent({
  name: 'Users',
  data() {
    return {
      usersData: [],
      loading: true,
    };
  },
  components:{
    Navbar
  },
  methods: {
    async getUsersData() {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        this.usersData = response.data;
         this.loading = false;
      } catch (error) {
        console.log("Error fetching users", error);
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
    this.getUsersData();
  },
});
</script>

<style scoped>
.users {
  padding: 32px;
  max-width: 1100px;
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

.users-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.user-card {
  background-color: #fff;
  padding: 16px;
  border-left: 6px solid lightblue;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.user-card h3 {
  margin: 8px;
  font-size: 17px;
  color: blue;
}

.user-card p {
  margin: 3px;
  font-size: 15px;
  color: #555;
}
</style>

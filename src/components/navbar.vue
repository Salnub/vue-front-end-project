
<template>
    <div class="nav-buttons">
      <button @click="goTo('Home')" class = "Home">Home</button>
      <button @click="goTo('Users')" class = "Users">Users</button>
      <button @click="goTo('Posts')" class = "Posts">Posts</button>
      <button @click="goTo('Comments')" class = "Comments">Comments</button>
      <button @click="goTo('Albums')" class = "Albums">Albums</button>
      <button @click="goTo('Photos')" class = "Photos">Photos</button>
      <button @click="goTo('Todos')" class = "Todos">Todos</button>
    </div>
</template>




<script>
import { defineComponent } from 'vue'
import { ROUTES } from '@/constants/routes'

export default defineComponent({
  name: 'Navbar',
  data() {
    return{
    navId: 0,
    }
    
  },
 methods: {
    
   async goTo(route) {
      switch(route){
        case "Home":
        this.navId = 0;
         await this.$router.push(ROUTES.HOME)
          break;
        case "Todos":
        this.navId = 6;
         await this.$router.push(ROUTES.TODOS)
         break;
         case "Albums":
          this.navId = 4;
          await this.$router.push(ROUTES.ALBUMS)
          break;
          case "Users":
          this.navId = 1;
          await this.$router.push(ROUTES.USERS)
          break;
          case "Posts":
          this.navId = 2;
          await this.$router.push(ROUTES.POSTS)
          break;
          case "Photos":
          this.navId = 5;
          await this.$router.push(ROUTES.PHOTOS)
          break;
          case "Comments":
          this.navId = 3;
          await this.$router.push(ROUTES.COMMENTS)
          
          break;

      };
      switch(this.navId){
      case 0:
        var a = document.querySelector(".Home");
        a.style.color = "black";
        a.style.backgroundColor = "#fff";
      break;
      case 1:
        var a = document.querySelector(".Users");
        a.style.color = "black";
        a.style.backgroundColor = "#fff";
      break;
      case 2:
        var a = document.querySelector(".Posts");
        a.style.color = "black";
        a.style.backgroundColor = "#fff";
      break;
      case 3:
        var a = document.querySelector(".Comments");
        a.style.color = "black";
        a.style.backgroundColor = "#fff";
      break;
      case 4:
        var a = document.querySelector(".Albums");
        a.style.color = "black";
        a.style.backgroundColor = "#fff";
      break;
      case 5:
        var a = document.querySelector(".Photos");
        a.style.color = "black";
        a.style.backgroundColor = "#fff";
      break;
      case 6:
        var a = document.querySelector(".Todos");
        a.style.color = "black";
        a.style.backgroundColor = "#fff";
      break;
    }
    }
  },
  
  });
</script>




<style scoped>

.nav-buttons {
  background-color: lightblue;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 32px;
  width: 100%;
  padding: 16px;
}

button {
  padding: 12px;
  background-color: lightblue;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background-color: #fff;
  color: black;
}

</style>
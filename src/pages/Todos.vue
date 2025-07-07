<template>
  <Navbar />
  <div class="todos">
    <h2>Todos ✅</h2>

    <div v-if="loading" class="loading">Loading todos...</div>

    <div v-else class="todos-list">
      <div
        v-for="todo in todosData"
        :key="todo.id"
        class="todo-card"
        :class="{ completed: todo.completed }"
      >
        <h3>#{{ todo.id }}</h3>
        <p>{{ todo.title }}</p>
        <span v-if="todo.completed" class="status done">Completed</span>
        <span v-else class="status pending">Pending</span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Navbar from '@/components/navbar.vue';
import axios from 'axios';

export default defineComponent({
  name: 'Todos',
  data() {
    return {
      todosData: [],
      loading: true,
    };
  },
  components:{
    Navbar
  },
  methods: {
    async getTodosData() {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        this.todosData = response.data;
         this.loading = false;
      } catch (error) {
        console.log("Error fetching data", error);
      }
    },
   
  },
  mounted() {
    this.getTodosData();
  }
});
</script>

<style scoped>
.todos {
  padding: 32px;
  max-width: 900px;
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

.todos-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.todo-card {
  padding: 16px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-left: 6px solid lightblue;
  transition: 0.3s;
}

.todo-card.completed {
  border-left-color: lightblue;
  background-color: #e6f9f2;
}

.todo-card h3 {
  margin: 0;
  font-size: 18px;
}

.todo-card p {
  margin: 8px;
  color: #444;
}

.status {
  font-weight: bold;
  font-size: 14px;
  display: inline-block;
  margin-top: 8px;
  padding: 3px 8px;
  border-radius: 4px;
}

.status.done {
  background-color: lightblue;
  color: white;
}

.status.pending {
  background-color: #ffb300;
  color: white;
}
</style>

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Users from '../pages/Users.vue'
import { ROUTES, ROUTE_NAMES } from '../constants/routes.js'
import Photos from '@/pages/Photos.vue'
import Albums from '@/pages/Albums.vue'
import Todos from '@/pages/Todos.vue'
import Posts from '@/pages/Posts.vue'
import Comments from '@/pages/Comments.vue'

const routes = [
  {
    path: ROUTES.HOME,
    name: ROUTE_NAMES.HOME,
    component: Home
  },
  {
    path: ROUTES.USERS,
    name: ROUTE_NAMES.USERS,
    component: Users
  },
  {
    path: ROUTES.PHOTOS,
    name: ROUTE_NAMES.PHOTOS,
    component: Photos
  },
  {
    path: ROUTES.ALBUMS,
    name: ROUTE_NAMES.ALBUMS,
    component: Albums
  },
  {
    path: ROUTES.TODOS,
    name: ROUTE_NAMES.TODOS,
    component: Todos
  },
  {
    path: ROUTES.COMMENTS,
    name: ROUTE_NAMES.COMMENTS,
    component: Comments
  },
  {
    path: ROUTES.POSTS,
    name: ROUTE_NAMES.POSTS,
    component: Posts
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 
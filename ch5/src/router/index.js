import { createRouter, createWebHistory } from "vue-router";

// Define Route Component by Importing

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Posts from "@/views/Posts.vue";
import PostDetail from "@/views/PostDetail.vue";
import NotFound from "@/views/NotFound.vue";
import PostSideBar from "@/views/PostSideBar.vue";

// Define Routes ,Each route should map to a component

const routes = [
    {
        path: '/',
        name: 'home',
        component:Home
    },
    {
        path: '/about',
        name: 'about',
        component:About
    },
    {
        path: '/contact',
        name: 'contact',
        component:Contact
    },
    {
        path: '/posts',
        name: 'posts',
        component:Posts
    },
    // Dynamic Route
    // {
    //     path: '/posts/:id',
    //     name: 'postdetail',
    //     component: PostDetail,
    //     props:true,
    // },
    //  //Named view
    {
        path: '/posts/:id',
        name: 'postdetail',
        components: { default: PostDetail, postsidebar: PostSideBar },
        props: { default: true, PostSideBar: false },
    },
    // 404 Not Found
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component:NotFound
    }
]

// Create the router instance and pass the `routes` option

const router = createRouter({
    // Provide the history implementation to use
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default router
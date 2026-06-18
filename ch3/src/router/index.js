import { createRouter, createWebHistory } from "vue-router";

// Define Route Component by Importing

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Posts from "@/views/Posts.vue";
import NotFound from "@/views/NotFound.vue";

// Define Routes ,Each route should map to a component

const routes = [
    // {
    //     path: '/',
    //     name: 'home',
    //     component:Home
    // },
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

    // 404 page not found
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound',
        component:NotFound
    },

    // Redirects - A redirect means when the user visits /home,the 
    // URl will be replace by /,and then matched as /.
    // {
    //     path: '/home',
    //     redirect:'/'
    // },

    // Alias - An alias of / as /home means when the user visits /home,
    // the URL remains /home ,but it will be matched as if the user is visiting /
    // {
    //     path: '/',
    //     name: 'home',
    //     component: Home,
    //     alias:'/home'
    // },
    {
        path: '/',
        name: 'home',
        component: Home,
        alias:['/home','/ghar']  // Multipal alias
    }

]

// Create the router instance and pass the `routes` option

const router = createRouter({
    // Provide the history implementation to use
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default router
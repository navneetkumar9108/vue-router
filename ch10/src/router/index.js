import { createRouter, createWebHistory } from "vue-router";

// Define Route Component by Importing

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Posts from "@/views/Posts.vue";
import PostDetail from "@/views/PostDetail.vue";
import NotFound from "@/views/NotFound.vue";
import Login from "@/views/Login.vue";


// Define Routes ,Each route should map to a component

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
                // meta:{isAuthenticated:true}

    },
    {
        path: '/about',
        name: 'about',
        component:About,
        // meta:{isAuthenticated:false}
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
                // meta:{isAuthenticated:true}

    },
    {
        path: '/posts',
        name: 'posts',
        component: Posts,
        meta: { isAuthenticated: false },
                beforeEnter: (to, from) => {
                     if (!to.meta.isAuthenticated && to.name !== 'login') {
                        return {name:'login'}
                    }
                    
                }

    },
    // Dynamic Route
    {
        path: '/posts/:id',
        name: 'postdetail',
        component: PostDetail,
                meta:{isAuthenticated:true}

    },
    {
        path: '/login',
        name: 'login',
        component: Login,

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
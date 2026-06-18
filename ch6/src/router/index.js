import { createRouter, createWebHistory } from "vue-router";

// Define Route Component by Importing

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Posts from "@/views/Posts.vue";
import PostDetail from "@/views/PostDetail.vue";
import NotFound from "@/views/NotFound.vue";
import Products from "@/views/Products.vue";
import ProductDetail from "@/views/ProductDetail.vue";


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
    // {
    //     path: '/posts',
    //     name: 'posts',
    //     component:Posts
    // },
    // Dynamic Route
    {
        path: '/posts/:id(\\d+)',//id should be number only
        name: 'postdetail',
        component:PostDetail
    },
    // {
    //     path: '/posts/:id(\\d+)/category/:catName([a-z]+$)',//id should be number only
    //     name: 'postdetail',
    //     component:PostDetail
    // },

    // optional Parameters
    // {
    //will match /products and products/12
    //     path: '/products/:productid?', 
    //     name: 'products',
    //     component: Products,
    // },
    // {
    //     //will match /products and products/12 (number only)
    //     path: '/products/:productid(\\d+)?', 
    //     name: 'products',
    //     component: Products,
    // },

    // same path different component
    // {
    //     path: '/products/:prod(\\d+)',
    //     name: 'productdetail',
    //     component: ProductDetail,
    // },
    // {
    //     path: '/products/:prod',
    //     name: 'products',
    //     component: Products,
    // },
    
    // Repeatable params
    // {
    //     //  matches products/one, products/one/two, product/one/two/three ,etc + means 1or more
    //     path: '/products/:prod+',
    //     name: 'products',
    //     component: Products,
    // },
    // {
    //     //  matches products/, products/one, products/one/two, product/one/two/three ,etc + means 0 or more
    //     path: '/products/:prod*',
    //     name: 'products',
    //     component: Products,
    // },
    
    // sensitive and strict route
      {
        path: '/posts',
        name: 'posts',
        component: Posts,
          sensitive: true,  //Case sensitive
        strict: true, // /posts/ wont work need to remove trailing slash
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
import HelloWorld from "../components/HelloWorld.vue";

export default [
    {
        path: '/',
        name: 'home',
        component: HelloWorld
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/admin',
        component: ()=> import('../views/Admin/Layout/AdminLayout.vue'),
        children: [
            // Users

        ]
    }
]
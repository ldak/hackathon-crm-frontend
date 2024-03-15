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
        path: '/booking/:account',
        component: ()=> import('../views/Booking/BookingHolder.vue'),
        children: [
            {
                path: 'service',
                name: 'booking.service',
                component: ()=> import('../views/Booking/ChooseService.vue'),
            }
        ]
    },
    {
        path: '/admin',
        component: ()=> import('../views/Admin/Layout/AdminLayout.vue'),
        children: [
            // Users

        ]
    }
]
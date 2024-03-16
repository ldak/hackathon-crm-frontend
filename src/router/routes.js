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
            },
            {
                path: 'hours',
                name: 'booking.hours',
                component: ()=> import('../views/Booking/ChooseHours.vue'),
            },
            {
                path: 'customer',
                name: 'booking.customer',
                component: ()=> import('../views/Booking/ChooseCustomer.vue'),
            },
            {
                path: 'otp',
                name: 'booking.otp',
                component: ()=> import('../views/Booking/TypeOtp.vue'),
            },
            {
                path: 'success',
                name: 'booking.success',
                component: ()=> import('../views/Booking/BookingSuccess.vue'),
            },
        ]
    },
    {
        path: '/admin',
        component: ()=> import('../views/Admin/Layout/AdminLayout.vue'),
        children: [
            {
                path: 'calendar',
                name: 'admin.calendar',
                component: ()=> import('../views/Admin/Calendar.vue'),
            },
            {
                path: 'settings',
                name: 'admin.settings',
                component: () => import('../views/Admin/Settings.vue')
            },
            {
                path: 'automations',
                name: 'admin.automations',
                component: () => import('../views/Admin/Automations.vue')
            }
        ]
    }
]
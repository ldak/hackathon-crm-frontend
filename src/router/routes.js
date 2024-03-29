export default [
    {
        path: '/',
        redirect: '/login'
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
                meta: {title: 'Календар'}
            },
            {
                path: 'automations',
                name: 'admin.automations',
                component: () => import('../views/Admin/Automations.vue'),
                meta: {title: 'Автоматизирани съобщения'}
            },
            {
                path: 'settings',
                name: 'admin.settings',
                component: () => import('../views/Admin/Settings.vue'),
                meta: {title: 'Настройки'}
            },
        ]
    },
    {
        path: '/*',
        redirect: {name: 'login'}
    },
]
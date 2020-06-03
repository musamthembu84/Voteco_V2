export default {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard/default',
                    icon: 'feather icon-home',
                }
            ]
        },



        {
            id: 'pages',
            title: 'Exit',
            type: 'group',
            icon: 'icon-pages',
            children: [

                {

                    id: 'disabled-menu',
                    title: 'Logout',
                    type: 'item',
                    url: '/auth/signup-1',
                    classes: 'nav-item disabled',
                    icon: 'feather icon-power'
                },

            ]
        }
    ]
}

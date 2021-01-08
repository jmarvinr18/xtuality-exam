
export const routes = [

    {
        path: '',
        component: () => import('../components/pages/LandingPage')
    },

    { 
        path: '', 
        component: () =>  import('../components/layouts/MainLayout'),
        children: [
            {
              name: 'index',
              path: '/dashboard',
              component: () => import('../components/pages/Dashboard')
            },
            { 
                path: '/videos', 
                component: () =>  import('../components/pages/Videos')
            },
            { 
                path: '/new-video', 
                component: () =>  import('../components/pages/NewVideo')
            },
            { 
                path: '/video-details/:id', 
                component: () =>  import('../components/pages/VideoDetails')
            },
            { 
                path: '/video-details/create/:id', 
                component: () =>  import('../components/pages/UpdateCreateStream')
            },
            { 
                path: '/video-details/update/:id', 
                component: () =>  import('../components/pages/VideoDetails')
            },
            { 
                path: '/update-video', 
                component: () =>  import('../components/pages/NewVideo')
            },
          ]
    },
    {
        path: '/login', 
        component: () =>  import('../components/pages/Login'),
    },
    {
        path: '/register', 
        component: () =>  import('../components/pages/Register'),
    }

]
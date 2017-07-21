import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import Emergency from '@/components/Emergency'
import GreenGuardian from '@/components/GreenGuardian'
import Monitor from '@/components/Monitor'
import Userinfo from '@/components/Userinfo'
import Home from '@/components/home'
import Yagl from '@/components/sfgl/yagl'
import Hxqxdjyb from '@/components/sfgl/hxqxdjyb'
import Fxjl from '@/components/spjc/fxjl'
import Wrjsp from '@/components/spjc/wrjsp'
import Chart from '@/components/sfgl/Chart'
import Zdjc from '@/components/spjc/zdjc'

Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
              {
                path: '/',
                name: 'Main',
                component: Main
              },
              {
                path: 'greenGuardian',
                name: 'GreenGuardian',
                component: GreenGuardian,
                children:[
                  {
                    path: 'yagl',
                    name: 'Yagl',
                    component: Yagl,                    
                  },     
                  {
                    path: 'hxqxdjyb',
                    name: 'Hxqxdjyb',
                    component: Hxqxdjyb, 
                    children:[
                        {
                          path: 'chart',
                          name: 'Chart',
                          component: Chart,                    
                        },                        
                    ]                   
                  },  
                                            
                ]
              },
              {
                path: 'emergency',
                name: 'Emergency',
                component: Emergency
              },
              {
                path: 'monitor',
                name: 'Monitor',
                component: Monitor,
                children:[
                  {
                    path: 'zdjc',
                    name: 'Zdjc',
                    component: Zdjc,                    
                  },   
                  {
                    path: 'fxjl',
                    name: 'Fxjl',
                    component: Fxjl,                    
                  },    
                  {
                    path: 'wrjsp',
                    name: 'Wrjsp',
                    component: Wrjsp,                    
                  },                                                                   
                ]
              },            
              {
                path: '/userinfo',
                name: 'Userinfo',
                component: Userinfo
              }  
      ]
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})

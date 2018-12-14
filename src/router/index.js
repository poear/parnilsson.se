import Vue from 'vue'
import Router from 'vue-router'
import blogposts from '@/components/Blogposts'
import gitRecover from '@/components/0-git-recover'
import solarizedCss from '@/components/1-solarized-css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hem',
      component: blogposts
    },
    {
      path: '/git-recover',
      name: 'git recover',
      component: gitRecover
    },
    {
      path: '/solarized-css',
      name: 'SolarizedCSS',
      component: solarizedCss
    }
  ]
})

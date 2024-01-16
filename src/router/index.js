import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: { layout: 'Default' },
      component: Home
    },
    {
      path: '/logo-designs',
      name: 'Logo',
      meta: { layout: 'Default' },
      component: () => import('../views/Services/LogoDesigns.vue')
    },
    {
      path: '/web-designs',
      name: 'Web',
      meta: { layout: 'Default' },
      component: () => import('../views/Services/WebDesigns.vue')
    },
    {
      path: '/corporate-branding',
      name: 'Branding',
      meta: { layout: 'Default' },
      component: () => import('../views/Services/Branding.vue')
    },
    {
      path: '/seo',
      name: 'SEO',
      meta: { layout: 'Default' },
      component: () => import('../views/Services/Seo.vue')
    },
    {
      path: '/social-media-marketing',
      name: 'Media',
      meta: { layout: 'Default' },
      component: () => import('../views/Services/SocialMediaMarketing.vue')
    },
    {
      path: '/lead-generation',
      name: 'Lead',
      meta: { layout: 'Default' },
      component: () => import('../views/Services/LeadGeneration.vue')
    },
    {
      path: '/content-writing',
      name: 'Content',
      meta: { layout: 'Default' },
      component: () => import('../views/Services/ContentWriting.vue')
    },
    {
      path: '/app-development',
      name: 'App',
      meta: { layout: 'Default' },
      component: () => import('../views/Services/AppDevelopment.vue')
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      meta: { layout: 'Default' },
      component: () => import('../views/Portfolio.vue')
    },
    {
      path: '/packages',
      name: 'Packages',
      meta: { layout: 'Default' },
      component: () => import('../views/Packages.vue')
    },
    {
      path: '/about-us',
      name: 'About',
      meta: { layout: 'Default' },
      component: () => import('../views/AboutUs.vue')
    },
    {
      path: '/contact-us',
      name: 'Contact',
      meta: { layout: 'Default' },
      component: () => import('../views/ContactUs.vue')
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      meta: { layout: 'Default' },
      component: () => import('../views/Privacy.vue')
    },
    {
      path: '/terms',
      name: 'terms',
      meta: { layout: 'Default' },
      component: () => import('../views/Terms.vue')
    },
    {
      path: '/refund',
      name: 'refund',
      meta: { layout: 'Default' },
      component: () => import('../views/Refund.vue')
    }
  ]
})

export default router

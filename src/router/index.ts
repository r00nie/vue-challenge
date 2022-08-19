import Vue from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import WelcomeComponent from './../components/WelcomeComponent.vue'
import QuestionItem from './../components/QuestionItem.vue'
import SummaryComponent from './../components/SummaryComponent.vue'


const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: WelcomeComponent
    },
    {
        path: '/quiz',
        name: 'Quiz',
        component: QuestionItem
    },
    {
        path: '/summary',
        name: "Summary",
        component: SummaryComponent
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
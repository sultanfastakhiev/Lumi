import TheAuth from "@/components/TheAuth";
import TheReg from "@/components/TheReg";
import TheHome from "@/components/TheHome";
import CreatePatient from "@/components/CreatePatient";
import ThePatient from "@/components/ThePatient";
import TheTest from "@/components/TheTest";
import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/',
        component: TheAuth
    },
    {
        path: '/registration',
        component: TheReg
    },
    {
        path: '/patients',
        component: TheHome
    },
    {
        path: '/patients/create_patient',
        component: CreatePatient
    },
    {
        path: '/patients/:patient_id',
        component: ThePatient
    },
    {
        path: '/test',
        component: TheTest
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router
import signUp from './components/signUp.vue'
import homePage from './components/Home.vue'
import LogIn from './components/LogIn.vue'
import PieChart from './components/PieChart.vue'
import {createRouter,createWebHistory} from 'vue-router'
import AddRest from './components/AddRest.vue'
import UpdateRest from './components/UpdateRest.vue'
import AboutUs from './components/AboutUs.vue'
import CategoriesComp from './components/CategoriesComp.vue'
import ClassContent from './components/ClassContent.vue'
import TrigonometryGen from './components/TrigonometryGen.vue'
import TringleGen from './components/TriangleGen.vue'
import ThreeDee from './components/ThreeDee.vue'
import SolarSys from './components/SolarSys.vue'
import GsapAnim from './components/GsapAnim.vue'
import ForgotPassword from './components/ForgotPassword.vue'
import PasswordReset from './components/PasswordReset.vue'
import DashboardContent from './components/DashboardContent.vue'
import GameCom from './components/GameCom.vue'
import TimeCont from './components/TimeCont.vue'
import QuizCont from './components/QuizCont.vue'
import AngleCont from './components/AngleCont.vue'
import AnimationVideo from './components/AnimationVideo.vue'
import ChangePassword from './components/ChangePassword.vue'

// import PdfCont from './components/PdfCont.vue'

const routes=[
    {
        name:'HomePage',
        component:homePage,
        path:'/'

    },
    {
        name:'signUp',
        component:signUp,
        path:'/signup'
    },
    {
        name:'PieChart',
        component:PieChart,
        path:'/piechart'
    },
    {
        name:'LogIn',
        component:LogIn,
        path:'/login'
    },
    {
        name:'AddRest',
        component:AddRest,
        path:'/add-rest'
    },
    {
        name:'UpdatRest',
        component:UpdateRest,
        path:'/update-rest'
    },
    {
        name:'AboutUs',
        component:AboutUs,
        path:'/about-us'
    },
    {
        name:'CategoriesComp',
        component:CategoriesComp,
        path:'/categories-comp'
    },
    {
        name:'ClassContent',
        component:ClassContent,
        path:'/class-content'
    },
    {
        name:'TrigonometryGen',
        component:TrigonometryGen,
        path:'/trigonometry-gen'
    },
    {
        name:'TringleGen',
        component:TringleGen,
        path:'/triangle-gen'
    },
    {
        name:'ThreeDee',
        component:ThreeDee,
        path:'/three-dee'
    },
    {
        name:'SolarSys',
        component:SolarSys,
        path:'/solar-sys'
    },
    {
        name:'GsapAnim',
        component:GsapAnim,
        path:'/gsap-anim'
    },
    {
        name:'ForgotPassword',
        component:ForgotPassword,
        path:'/forgot-password'
    },
    {
        path: '/password-reset/:uidb64/:token/',
        name: 'PasswordReset',
        component: PasswordReset
    },
    {
        path: '/dashboard-content',
        name: 'DashboardContent',
        component: DashboardContent
    },
    {
        path: '/game-com',
        name: 'GameCom',
        component: GameCom
    },
    {
        path: '/time-cont',
        name: 'TimeCont',
        component: TimeCont
    },
    {
        path: '/quiz-cont',
        name: 'QuizCont',
        component: QuizCont
    },
    {
        path: '/angle-cont',
        name: 'AngleCont',
        component: AngleCont
    },
    {
        path: '/animation-video',
        name: 'AnimationVideo',
        component: AnimationVideo
    },
    {
        path: '/change-password',
        name: 'ChangePassword',
        component: ChangePassword
    },
    // {
    //     path: '/pdf-cont',
    //     name: 'PdfCont',
    //     component: PdfCont
    // }

    








]
const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router